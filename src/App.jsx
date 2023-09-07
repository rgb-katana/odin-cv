import Editor from "./features/Editor/Editor";
import Resume from "./features/Resume/Resume";

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen mx-auto">
      <header className="text-center flex items-center justify-center py-2 font-bold uppercase bg-yellow-400 border--yellow-900 border-b-2">
        Create a resume
      </header>
      <main className="flex gap-3 md:justify-center p-0 flex-wrap md:p-2 md:flex-nowrap overflow-auto items-center">
        <Editor />
        <Resume />
      </main>
      <footer className="text-center flex items-center justify-center py-2 font-bold uppercase bg-yellow-400 border--yellow-900 border-t-2">
        Footer
      </footer>
    </div>
  );
}

export default App;
