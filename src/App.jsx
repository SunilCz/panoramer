import ProgressIndicator from "./components/ProgressIndicator";

export default function App() {
  return (
    <>
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <ProgressIndicator />

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Something in the way, hmm-mmm
              <br />
              Something in the way, yeah, hmm-mmm
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
