import { useState } from 'react';
import Expander from './Expander';
import CategoryManager from './CategoryManager';
import { useResume } from '../../context/ResumeContext';

function Practical() {
  const [isOpen, setIsOpen] = useState(false);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const { dispatch } = useResume();

  if (!isOpen) return <Expander content="Practical" onClick={toggleCategory} />;

  function toggleCategory(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'set/company', payload: company });
    dispatch({ type: 'set/position', payload: position });
  }

  return (
    <div className={`bg-slate-100 animate-slidedown`}>
      <form
        onSubmit={handleSubmit}
        className="my-2 divide-y border-b border-t flex flex-col justify-center items-stretch text-lg p-2"
      >
        <div className="flex justify-center">
          <label className="basis-36 my-2">Company:</label>
          <input
            type="text"
            value={company}
            onChange={e => setCompany(e.target.value)}
            className="grow"
          />
        </div>

        <div className="flex justify-center">
          <label className="basis-36 my-2">Position:</label>
          <input
            type="text"
            value={position}
            onChange={e => setPosition(e.target.value)}
            className="grow"
          />
        </div>

        <div className="flex flex-col justify-center">
          <label className="basis-2 my-2 text-center">Years:</label>
          <div className="flex justify-center gap-4">
            <label className="basis-2 my-2">From:</label>
            <input
              type="text"
              value={position}
              onChange={e => setPosition(e.target.value)}
              className="basis-2 w-24 text-center "
              placeholder="2020"
            />
            <label className="basis-2 my-2">To:</label>
            <input
              type="text"
              value={position}
              onChange={e => setPosition(e.target.value)}
              className="basis-2 text-center  w-24"
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
