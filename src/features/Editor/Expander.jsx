import Button from '../../ui/Button';

function Expander({ onClick, content }) {
  return (
    <div className="bg-slate-100 flex justify-between px-5 py-2">
      <span>{content}</span>

      <Button onClick={onClick} content="&darr;"></Button>
    </div>
  );
}

export default Expander;
