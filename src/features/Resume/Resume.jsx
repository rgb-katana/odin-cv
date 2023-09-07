import { useResume } from '../../context/ResumeContext';

function Resume() {
  const { firstName, lastName, age, email, phone } = useResume();

  return (
    <div className="bg-teal-400 p-3 w-full md:min-w-[60%] md:h-auto h-[99%] min-h-[80%] md:max-h-[900px] grid grid-rows-[1fr_2fr_1fr] gap-y-3">
      <div className="bg-teal-100">
        <p>firstName: {firstName}</p>
        <p>lastName: {lastName}</p>
        <p>age: {age}</p>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
      </div>
      <div className="bg-teal-200">Main Part</div>
      <div className="bg-teal-300">Bottom Part</div>
    </div>
  );
}

export default Resume;
