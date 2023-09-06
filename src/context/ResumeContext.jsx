import { createContext, useContext, useReducer } from 'react';

const ResumeContext = createContext();

const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  email: '',
  phone: '',
  uni: '',
  field: '',
};

function reducer(state, action) {
  console.log(action.payload);
  switch (action.type) {
    case 'set/firstName':
      return { ...state, firstName: action.payload };
    default:
      throw new Error('Unknown action type');
  }
}

function ResumeProvider({ children }) {
  const [{ firstName, lastName, age, email, phone, uni, field }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <ResumeContext.Provider
      value={{ firstName, lastName, age, email, phone, uni, field, dispatch }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined)
    throw new Error('Context used outside of provider');
  return context;
}

export { ResumeProvider, useResume };
