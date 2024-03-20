import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Row, Table } from "react-native-table-component";
import { FormDataContext } from "./context/form-context";

export default function DemoList() {
  const { formData } = useContext(FormDataContext);

  const tableHead = ["First Name", "Last Name", "Email", "Contact", "Address"];

  return (
    <View style={styles.container}>
      {/* Simple Table */}
      {/* <Table borderStyle={styles.borderStyle}>
        <Row
          data={tableHead}
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
      </Table> */}

      {/* Table with scroll view */}
      <Table borderStyle={styles.borderStyle}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={{ padding: 2, textAlign: "center" }}
        />
      </Table>
      <ScrollView>
        <Table borderStyle={styles.borderStyle}>
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
              textStyle={{ margin: 6 }}
            />
          ))}
        </Table>
      </ScrollView>
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
  borderStyle: { borderWidth: 1, borderColor: "#c8e1ff" },
  textStyle: { padding: 2, textAlign: "center" },
});
