import { createContext, useState } from "react";

export const FormDataContext = createContext({
  formData: [],
  addData: (data) => {},
});

export default function FormContextProvider({ children }) {
  const [formData, setFormData] = useState([]);

  function addFormData(data) {
    setFormData((prevData) => [...prevData, data]);
  }

  const value = {
    formData: formData,
    addData: addFormData,
  };

  return (
    <FormDataContext.Provider value={value}>
      {children}
    </FormDataContext.Provider>
  );
}
