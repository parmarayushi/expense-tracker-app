import { createContext, useReducer } from "react";
const Expenses = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 25.45,
    date: new Date("2020-11-04"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 23.45,
    date: new Date("2021-01-10"),
  },
  {
    id: "e3",
    description: "A pair of clothes",
    amount: 5.45,
    date: new Date("2022-02-25"),
  },
  {
    id: "e4",
    description: "books",
    amount: 25.45,
    date: new Date("2020-01-15"),
  },
  {
    id: "e5",
    description: "books",
    amount: 25.45,
    date: new Date("2024-03-13"),
  },
  {
    id: "e6",
    description: "books",
    amount: 25.45,
    date: new Date("2024-03-11"),
  },
  {
    id: "e7",
    description: "books",
    amount: 25.45,
    date: new Date("2020-01-15"),
  },
  {
    id: "e8",
    description: "books",
    amount: 25.45,
    date: new Date("2024-03-05"),
  },
  {
    id: "e9",
    description: "books",
    amount: 25.45,
    date: new Date("2020-01-15"),
  },
  {
    id: "e10",
    description: "books",
    amount: 25.45,
    date: new Date("2020-01-15"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "Add":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payLoad, id: id }, ...state];
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
  const [expensesState, dispatch] = useReducer(expensesReducer, Expenses);

  function addExpense(expenseData) {
    dispatch({ type: "Add", payLoad: expenseData });
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
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}
