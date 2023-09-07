import Education from "./Education";
import General from "./General";
import Practical from "./Practical";

function Editor() {
  return (
    <div className="bg-yellow-400 p-3 w-full space-y-2 overflow-auto max-h-[80%] md:min-h-[80%] md:max-w-md md:rounded-sm">
      <General />
      <Education />
      <Practical />
    </div>
  );
}

export default Editor;
