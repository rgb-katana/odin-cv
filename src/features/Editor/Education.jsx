import { useState } from 'react';
import Expander from './Expander';
import CategoryManager from './CategoryManager';

function Education() {
  const [isOpen, setIsOpen] = useState(false);
  const [uni, setUni] = useState('');
  const [field, setField] = useState('');

  if (!isOpen) return <Expander content="Education" onClick={toggleCategory} />;

  function toggleCategory(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-blue-500">
      <form onSubmit={handleSubmit} className="my-2 divide-y border-b border-t">
        <div className="flex justify-center items-center">
          <label className="basis-72">University:</label>
          <input
            type="text"
            value={uni}
            onChange={e => setUni(e.target.value)}
            className="grow"
          />
        </div>

        <div className="flex justify-center items-center">
          <label className="basis-72">Field of study:</label>
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
