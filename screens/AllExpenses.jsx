import { useContext } from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpenseContext } from "../store/expensesContext";

export default function AllExpenses() {
  const expensesContext = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={expensesContext.expenses}
      expensesPeriod="Total"
      fallbackText="No registered Expenses"
    />
  );
}

const styles = StyleSheet.create({});
