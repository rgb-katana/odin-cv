import { useState } from "react";
import Expander from "./Expander";
import CategoryManager from "./CategoryManager";
import { useResume } from "../../context/ResumeContext";

function Practical() {
  const [isOpen, setIsOpen] = useState(false);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [haveWorked, setHaveWorked] = useState(false);

  const { haveWorked: haveWorkedContext, dispatch } = useResume();

  if (!isOpen) return <Expander content="Practical" onClick={toggleCategory} />;

  function toggleCategory(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "set/company", payload: company });
    dispatch({ type: "set/position", payload: position });
    dispatch({ type: "set/workFrom", payload: from });
    dispatch({ type: "set/workTo", payload: to });
    setIsOpen(!isOpen);
  }

  function toggleWorked(e) {
    setHaveWorked(e.target.checked);
    dispatch({ type: "set/haveWorked", payload: e.target.checked });
  }

  return (
    <div className={`bg-slate-100 animate-slidedown`}>
      <form
        onSubmit={handleSubmit}
        className="my-2 divide-y border-b border-t flex flex-col justify-center items-stretch text-lg p-2"
      >
        <div className="flex items-center justify-center gap-x-2">
          <input
            className="h-4 w-4 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1"
            type="checkbox"
            name="haveWorked"
            id="haveWorked"
            checked={haveWorkedContext}
            value={haveWorked}
            onChange={(e) => {
              toggleWorked(e);
            }}
          />
          <label htmlFor="haveWorked" className="font-medium">
            I have worked before
          </label>
        </div>

        <div className="flex justify-center pb-1 pt-1 mt-1">
          <label className="basis-36 my-2">Company:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="grow accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1  px-2"
          />
        </div>

        <div className="flex justify-center pb-1 pt-1 mt-1">
          <label className="basis-36 my-2">Position:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="grow accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1  px-2"
          />
        </div>

        <div className="flex flex-col justify-center pb-1 pt-1 mt-1">
          <label className="basis-2 my-2 text-center">Years:</label>
          <div className="flex justify-center gap-4">
            <label className="basis-2 my-2">From:</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="basis-2 w-24 text-center accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1  px-2"
              placeholder="2020"
            />
            <label className="basis-2 my-2">To:</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="basis-2 text-center  w-24 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1  px-2"
              placeholder="2024"
            />
          </div>
        </div>

        <CategoryManager onClose={toggleCategory} />
      </form>
    </div>
  );
}

export default Practical;
