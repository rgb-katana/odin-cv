import { useState } from 'react';
import Expander from './Expander';
import CategoryManager from './CategoryManager';
import { useResume } from '../../context/ResumeContext';

function Education() {
  const [isOpen, setIsOpen] = useState(false);
  const [uni, setUni] = useState('');
  const [field, setField] = useState('');

  const { dispatch } = useResume();

  if (!isOpen) return <Expander content="Education" onClick={toggleCategory} />;

  function toggleCategory(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'set/uni', payload: uni });
    dispatch({ type: 'set/field', payload: field });
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
            onChange={e => setUni(e.target.value)}
            className="grow"
          />
        </div>

        <div className="flex justify-center">
          <label className="basis-36 my-2">Field of study:</label>
          <input
            type="text"
            value={field}
            onChange={e => setField(e.target.value)}
            className="grow"
          />
        </div>

        <CategoryManager onClose={toggleCategory} />
      </form>
    </div>
  );
}

export default Education;
