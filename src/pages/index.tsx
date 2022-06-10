import { Suspense } from 'react';
import validateEmail from '~/helpers/validateEmail';
import UpdateHead from '~/components/atoms/UpdateHead';
import EmailInput from '~/components/atoms/EmailInput';

const EmailError = lazy(() => import('~/components/molecules/EmailError'));

export default function App() {
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center pt-60 gap-3 main">
      <div className="space-y-6 font-bold text-primary">
        <UpdateHead />
        <p className="uppercase">
          email address
        </p>
      </div>
      <EmailInput onSubmit={(email) => {
        const isValid = validateEmail(email);

        if (isValid) {
          navigate('/success');
        } else {
          setShowError(true);
        }
      }}
      />
      {
        showError && (
          <Suspense>
            <EmailError onClose={() => setShowError(false)} />
          </Suspense>
        )
      }
    </main>
  );
}
