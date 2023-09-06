import { useResume } from '../../context/ResumeContext';

function Resume() {
  const { firstName } = useResume();
  console.log(firstName);
  return (
    <div className="bg-teal-400 p-3 w-full md:min-w-[60%] ">
      <div>Top Part {firstName}</div>
      <div>Main Part</div>
      <div>Bottom Part</div>
    </div>
  );
}

export default Resume;
