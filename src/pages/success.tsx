import UpdateHead from '~/components/atoms/UpdateHead';

function Success() {
  return (
    <main className="flex flex-col items-center pt-60 gap-8 main">
      <div className="space-y-6 font-bold text-primary">
        <UpdateHead />
      </div>
      <article className="text-success border-(1 success) bg-bg-success p-3 flex gap-1 w-20rem">
        <i className="i-bi-check2 text-2xl" />
        <div>
          <header><b>Yay! Thank you</b></header>
          <p className="w-13rem text-sm">We've send a confirmation link to your inbox</p>
        </div>
      </article>
    </main>
  );
}

export default Success;
