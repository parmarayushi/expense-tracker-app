import { StyleSheet, View } from "react-native";
import { Row, Table } from "react-native-table-component";

export default function DemoList({ route }) {
  const { formData } = route.params;

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: "#c8e1ff" }}>
        <Row
          data={["First Name", "Last Name", "Email", "Contact", "Address"]}
          style={styles.head}
          textStyle={styles.textStyle}
        />
        {formData.map((rowData, index) => (
          <Row
            key={index}
            data={[
              rowData.firstName,
              rowData.lastName,
              rowData.email,
              rowData.contact,
              rowData.address,
            ]}
            textStyle={styles.text}
          />
        ))}
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  head: {
    height: 50,
    backgroundColor: "#f1f8ff",
  },
  text: { margin: 6 },
  textStyle: { padding: 2, textAlign: "center" },
});
