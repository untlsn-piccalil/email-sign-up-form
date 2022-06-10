import './style.css';

interface EmailErrorProps {
  onClose(): void
}

function EmailError(props: EmailErrorProps) {
  useEffect(() => {
    setTimeout(() => {
      props.onClose();
    }, 10000);
  }, []);

  return (
    <article
      aria-hidden
      className="flex gap-2 border-(1 error) bg-bg-error text-error p-3 w-70 fade-in relative"
      onClick={props.onClose}
    >
      <i className="i-bi-exclamation-triangle text-xl" />
      <header>
        <b>Please use a valid email</b>
        <p className="text-sm">Like: person@inbox.com</p>
      </header>
      <hr className="absolute bottom-0 left-0 w-full border-1 shrink" />
    </article>
  );
}

export default EmailError;
