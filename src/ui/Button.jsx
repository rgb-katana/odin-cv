function Button({ content, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-400 font-semibold uppercase rounded-full hover:bg-yellow-300 px-2.5 py-0.5 active:bg-slate-400 transition-all duration-150 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
    >
      {content}
    </button>
  );
}

export default Button;
