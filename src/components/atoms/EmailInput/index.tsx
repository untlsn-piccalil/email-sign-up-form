import './style.css';

interface EmailInputProps {
  onSubmit(value: string): void
}

function EmailInput(props: EmailInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="h-10 children:h-full flex items-center"
      onSubmit={(ev) => {
        ev.preventDefault();
        const input = inputRef.current!;
        const { value } = input;
        input.value = '';

        props.onSubmit(value);
      }}
    >
      <input
        className="shadow-gray-200 full-shadow border-(px gray-200) hocus:border-primary p-1"
        ref={inputRef}
      />
      <button
        type="submit"
        className="bg-secondary w-12 border-(px transparent) hocus:border-primary"
      >
        <i className="i-bi-arrow-right-short text-primary text-4xl" />
      </button>
    </form>
  );
}

export default EmailInput;
