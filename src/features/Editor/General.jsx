import { useState } from 'react';
import Expander from './Expander';
import CategoryManager from './CategoryManager';
import { useResume } from '../../context/ResumeContext';

function General() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const { dispatch } = useResume();

  function toggleCategory(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'set/firstName', payload: firstName });
  }

  if (!isOpen) return <Expander content="General" onClick={toggleCategory} />;

  return (
    <div className="bg-green-300">
      <form onSubmit={handleSubmit} className="my-2 divide-y border-b border-t">
        <div className="flex justify-center items-center">
          <label className="basis-72">First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className="grow"
          />
        </div>

        <div className="flex justify-center items-center">
          <label className="basis-72">Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className="grow"
          />
        </div>

        <div className="flex justify-center items-center">
          <label className="basis-72">Age:</label>
          <input
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
            className="grow"
          />
        </div>

        <div className="flex justify-center items-center">
          <label className="basis-72">Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="grow"
          />
        </div>

        <div className="flex justify-center items-center">
          <label className="basis-72">Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="grow"
          />
        </div>

        <CategoryManager onClose={toggleCategory} />
      </form>
    </div>
  );
}

export default General;
