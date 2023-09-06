import Button from '../../ui/Button';

function CategoryManager({ onClose }) {
  return (
    <div className="flex justify-around items-center py-2">
      <Button content="&#x2713;"></Button>
      <Button onClick={onClose} content="&uarr;"></Button>
    </div>
  );
}

export default CategoryManager;
