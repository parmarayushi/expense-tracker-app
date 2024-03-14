import { useContext } from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpenseContext } from "../store/expensesContext";
import { getDateMinusDays } from "../utilities/date";

export default function RecentExpenses() {
  const expensesContext = useContext(ExpenseContext);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);

    return expense.date >= sevenDaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses registered for last 7 days"
    />
  );
}

const styles = StyleSheet.create({});
