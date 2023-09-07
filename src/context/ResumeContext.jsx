import { createContext, useContext, useReducer } from "react";

const ResumeContext = createContext();

const initialState = {
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  phone: "",
  uni: "",
  field: "",
  studyFrom: "",
  studyTo: "",
  company: "",
  position: "",
  workFrom: "",
  workTo: "",
  haveWorked: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "set/firstName":
      return { ...state, firstName: action.payload };
    case "set/lastName":
      return { ...state, lastName: action.payload };
    case "set/age":
      return { ...state, age: action.payload };
    case "set/email":
      return { ...state, email: action.payload };
    case "set/phone":
      return { ...state, phone: action.payload };
    case "set/uni":
      return { ...state, uni: action.payload };
    case "set/field":
      return { ...state, field: action.payload };
    case "set/studyFrom":
      return { ...state, studyFrom: action.payload };
    case "set/studyTo":
      return { ...state, studyTo: action.payload };
    case "set/company":
      return { ...state, company: action.payload };
    case "set/position":
      return { ...state, position: action.payload };
    case "set/workFrom":
      return { ...state, workFrom: action.payload };
    case "set/workTo":
      return { ...state, workTo: action.payload };
    case "set/haveWorked":
      return { ...state, haveWorked: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

function ResumeProvider({ children }) {
  const [
    {
      firstName,
      lastName,
      age,
      email,
      phone,
      uni,
      field,
      studyFrom,
      studyTo,
      company,
      position,
      workFrom,
      workTo,
      haveWorked,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <ResumeContext.Provider
      value={{
        firstName,
        lastName,
        age,
        email,
        phone,
        uni,
        field,
        studyFrom,
        studyTo,
        company,
        position,
        workFrom,
        workTo,
        haveWorked,
        dispatch,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined)
    throw new Error("Context used outside of provider");
  return context;
}

export { ResumeProvider, useResume };
