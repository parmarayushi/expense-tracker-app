import axios from "axios";

const baseUrl = "https://react-native-app-3749f-default-rtdb.firebaseio.com";

export function storeExpenses(expenseData) {
  axios.post(`${baseUrl}/expenses.json`, expenseData);
}
