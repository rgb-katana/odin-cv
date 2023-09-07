import { useState } from "react";
import Expander from "./Expander";
import CategoryManager from "./CategoryManager";
import { useResume } from "../../context/ResumeContext";

function Education() {
  const [isOpen, setIsOpen] = useState(false);
  const [uni, setUni] = useState("");
  const [field, setField] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const { dispatch } = useResume();

  if (!isOpen) return <Expander content="Education" onClick={toggleCategory} />;

  function toggleCategory(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "set/uni", payload: uni });
    dispatch({ type: "set/field", payload: field });
    dispatch({ type: "set/studyFrom", payload: from });
    dispatch({ type: "set/studyTo", payload: to });
    setIsOpen(!isOpen);
  }

  return (
    <div className={`bg-slate-100 animate-slidedown`}>
      <form
        onSubmit={handleSubmit}
        className="my-2 divide-y border-b border-t flex flex-col justify-center items-stretch text-lg p-2"
      >
        <div className="flex justify-center">
          <label className="basis-36 my-2">University:</label>
          <input
            type="text"
            value={uni}
            onChange={(e) => setUni(e.target.value)}
            className="grow accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1 px-2"
          />
        </div>

        <div className="flex justify-center pb-1 pt-1 mt-1">
          <label className="basis-36 my-2">Field of study:</label>
          <input
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
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
              className="basis-2 w-24 text-center accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1"
              placeholder="2020"
            />
            <label className="basis-2 my-2">To:</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="basis-2 text-center  w-24 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1"
              placeholder="2024"
            />
          </div>
        </div>

        <CategoryManager onClose={toggleCategory} />
      </form>
    </div>
  );
}

export default Education;
