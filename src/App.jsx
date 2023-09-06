import Editor from './features/Editor/Editor';
import Resume from './features/Resume/Resume';

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen max-w-[1278px] mx-auto">
      <header>header</header>
      <main className="flex gap-3 justify-center p-0 flex-wrap md:p-2 md:flex-nowrap">
        <Editor />
        <Resume />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
