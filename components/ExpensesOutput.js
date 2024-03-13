import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const Expenses = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 25.45,
    date: new Date("2020-12-4"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 25.45,
    date: new Date("2021-1-10"),
  },
  {
    id: "e3",
    description: "A pair of clothes",
    amount: 25.45,
    date: new Date("2022-2-25"),
  },
  {
    id: "e4",
    description: "books",
    amount: 25.45,
    date: new Date("2020-1-15"),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={Expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={Expenses} />
    </View>
  );
}

const styles = StyleSheet.create({});
