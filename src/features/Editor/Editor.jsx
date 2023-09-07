import Education from './Education';
import General from './General';
import Practical from './Practical';

function Editor() {
  return (
    <div className="bg-yellow-400 p-3 md:basis-1.5/3 w-full space-y-2 overflow-scroll min-h-[500px] md:min-h-[80%] md:max-h-[900px]">
      <General />
      <Education />
      <Practical />
    </div>
  );
}

export default Editor;
