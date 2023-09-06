import Education from './Education';
import General from './General';
import Practical from './Practical';

function Editor() {
  return (
    <div className="bg-red-200 p-3 md:basis-1.5/3 w-full space-y-2">
      <General />
      <Education />
      <Practical />
    </div>
  );
}

export default Editor;
