import { useResume } from "../../context/ResumeContext";

function Resume() {
  const {
    firstName,
    lastName,
    age,
    email,
    phone,
    uni,
    field,
    studyFrom,
    studyTo,
    company,
    position,
    workFrom,
    workTo,
    haveWorked,
  } = useResume();

  return (
    <div className="bg-yellow-400 p-3 w-full overflow-auto md:max-h-[80%] md:min-h-[80%] grid grid-rows-[1fr_2fr_1fr] gap-3 max-h-[99%] min-h-[99%] md:max-w-xl md:rounded-sm my-1 md:my-0">
      <div className="bg-slate-100 grid grid-row-[1fr_1fr_1fr] py-3 px-2">
        <p className="flex items-center">First name: {firstName}</p>
        <p className="flex items-center">Last Name: {lastName}</p>
        <p className="flex items-center">Age: {age}</p>
      </div>
      <div className="bg-slate-100 grid grid-row-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] py-3 px-2">
        <p className="flex items-center">University: {uni}</p>
        <p className="flex items-center">Field: {field}</p>
        <p className="flex items-center">Studied from: {studyFrom}</p>
        <p className="flex items-center">Until the year: {studyTo}</p>
        <p className="flex items-center">Email: {email}</p>
        <p className="flex items-center">Phone: {phone}</p>
      </div>
      {haveWorked ? (
        <div className="bg-slate-100 grid grid-row-[1fr_1fr_1fr_1fr] py-3 px-2">
          <p className="flex items-center">Company: {company}</p>
          <p className="flex items-center">Position: {position}</p>
          <p className="flex items-center">Worked from: {workFrom}</p>
          <p className="flex items-center">Until the year: {workTo}</p>
        </div>
      ) : (
        <div className="bg-slate-100 flex justify-center items-center">
          <p>Did not have any work experience</p>
        </div>
      )}
    </div>
  );
}

export default Resume;
