import './style.css';

function EmailInput() {
  return (
    <div className="h-10 children:h-full flex items-center">
      <input type="email" className="shadow-gray-200 full-shadow border-(px gray-200) hocus:border-primary p-1" />
      <button type="button" className="bg-secondary w-12 border-(px transparent) hocus:border-primary">
        <i className="i-bi-arrow-right-short text-primary text-4xl" />
      </button>
    </div>
  );
}

export default EmailInput;
