import { useResume } from '../../context/ResumeContext';

function Resume() {
  const { firstName, lastName, age, email, phone } = useResume();

  return (
    <div className="bg-teal-400 p-3 w-full md:min-w-[60%] md:h-auto h-screen min-h-[900px] md:max-h-[900px]">
      <div>
        <p>firstName: {firstName}</p>
        <p>lastName: {lastName}</p>
        <p>age: {age}</p>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
      </div>
      <div>Main Part</div>
      <div>Bottom Part</div>
    </div>
  );
}

export default Resume;
