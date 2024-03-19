import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { GlobalStyles } from "../constants/styles";
import { ExpenseContext } from "../store/expensesContext";
import ErrorOverlay from "../ui/ErrorOverlay";
import IconButton from "../ui/IconButton";
import LoadingOverlay from "../ui/LoadingOverlay";
import {
  deleteExpense,
  storeExpenses,
  updateExpense,
} from "../utilities/service";

export default function ManageExpense({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const expenseContext = useContext(ExpenseContext);

  const editedExpenseId = route.params?.expenseId;
  // !!- convert value to boolean
  const isEditing = !!editedExpenseId;

  const selectedExpense = expenseContext.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    try {
      expenseContext.deleteExpense(editedExpenseId);
      await deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setError("Could not delete expense - try again later");
    }
    setIsSubmitting(false);
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        expenseContext.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpenses(expenseData);
        expenseContext.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not save data - please try agin later");
      setIsSubmitting(false);
    }
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary200,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary400,
    alignItems: "center",
  },
});
