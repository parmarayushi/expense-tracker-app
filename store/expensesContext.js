import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "Add":
      return [action.payLoad, ...state];
    case "Set":
      const inverted = action.payLoad.reverse();
      return inverted;
    case "Update":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payLoad.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payLoad.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "Delete":
      return state.filter((expense) => expense.id !== action.payLoad);
    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: "Add", payLoad: expenseData });
  }

  function setExpenses(expenses) {
    dispatch({ type: "Set", payLoad: expenses });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "Update", payLoad: { id: id, data: expenseData } });
  }

  function deleteExpense(id) {
    dispatch({ type: "Delete", payLoad: id });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}
