import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Row, Table } from "react-native-table-component";

export default function DemoList({ route }) {
  const { formData } = route.params;
  const [data, setData] = useState([]);

  const tableHead = ["First Name", "Last Name", "Email", "Contact", "Address"];

  useEffect(() => {
    setData((prevData) => [...prevData, formData]);
  }, [formData]);

  return (
    <View style={styles.container}>
      {/* Simple Table */}
      <Table borderStyle={styles.borderStyle}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.textStyle}
        />
        {data.map((rowData, index) => (
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

      {/* Table with scroll view */}
      {/* <Table borderStyle={styles.borderStyle}>
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
      </ScrollView> */}
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
