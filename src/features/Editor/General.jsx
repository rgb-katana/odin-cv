import { useState } from "react";
import Expander from "./Expander";
import CategoryManager from "./CategoryManager";
import { useResume } from "../../context/ResumeContext";

function General() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { dispatch } = useResume();

  function toggleCategory(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (firstName) dispatch({ type: "set/firstName", payload: firstName });
    if (lastName) dispatch({ type: "set/lastName", payload: lastName });
    if (age) dispatch({ type: "set/age", payload: age });
    if (email) dispatch({ type: "set/email", payload: email });
    if (phone) dispatch({ type: "set/phone", payload: phone });
    setIsOpen(!isOpen);
  }

  if (!isOpen) return <Expander content="General" onClick={toggleCategory} />;

  return (
    <div className={"bg-slate-100 animate-slidedown"}>
      <form
        onSubmit={handleSubmit}
        className="my-2 divide-y border-b border-t flex flex-col justify-center items-stretch text-lg p-2"
      >
        <div className="flex justify-center pb-1 pt-1 mt-1">
          <label className="basis-36 my-2">First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="grow accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1  px-2"
          />
        </div>

        <div className="flex justify-center pb-1 pt-1 mt-1">
          <label className="basis-36 my-2">Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="grow accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1  px-2"
          />
        </div>

        <div className="flex justify-center pb-1 pt-1 mt-1">
          <label className="basis-36 my-2">Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="grow accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1  px-2"
          />
        </div>

        <div className="flex justify-center pb-1 pt-1 mt-1">
          <label className="basis-36 my-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="grow accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1  px-2"
          />
        </div>

        <div className="flex justify-center pb-1 pt-1 mt-1">
          <label className="basis-36 my-2">Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="grow accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1  px-2"
          />
        </div>

        <CategoryManager onClose={toggleCategory} />
      </form>
    </div>
  );
}

export default General;
