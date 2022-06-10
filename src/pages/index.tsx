import logo from '~/assets/images/logo.svg';
import EmailInput from '~/components/atoms/EmailInput';

export default function App() {
  return (
    <main className="flex flex-col items-center pt-60">
      <div className="space-y-6 font-bold text-primary">
        <h1 className="text-3xl max-w-70">
          Sing up for the latest updates
        </h1>
        <p className="uppercase">
          email address
        </p>
      </div>
      <EmailInput />
    </main>
  );
}
