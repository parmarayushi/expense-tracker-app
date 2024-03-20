import { useContext, useState } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { FormDataContext } from "./context/form-context";

const demoForm = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address: "",
};

export default function DemoForm({ navigation }) {
  const formCtx = useContext(FormDataContext);
  const [input, setInputs] = useState(demoForm);

  function handleInputChange(inputs, enteredValue) {
    setInputs((prevInputs) => {
      return { ...prevInputs, [inputs]: enteredValue };
    });
  }

  const handleSubmit = () => {
    // Perform validation
    // if (
    //   !input.firstName ||
    //   !input.lastName ||
    //   !input.email ||
    //   !input.contact ||
    //   !input.address
    // ) {
    //   Alert.alert("Error", "Please fill in all fields");
    //   return;
    // }

    // If validation passes, add data to the list
    formCtx.addData(input);
    setInputs("");
    navigation.navigate("List");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="FirstName"
        onChangeText={handleInputChange.bind(this, "firstName")}
        value={input.firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="LastName"
        onChangeText={handleInputChange.bind(this, "lastName")}
        value={input.lastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleInputChange.bind(this, "email")}
        value={input.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact No."
        onChangeText={handleInputChange.bind(this, "contact")}
        value={input.contact}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={handleInputChange.bind(this, "address")}
        value={input.address}
        multiline={true}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: "rgb(255, 232, 221)f",
  },
  input: {
    width: "100%",
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
