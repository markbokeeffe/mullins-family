import Image from "next/image";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:justify-between p-0">
      <Header isHome={true}><Navigation isHome={true} /></Header>
      <div className="home-container w-full max-w-4xl flex justify-evenly relative z-[-1] flex place-items-center flex-col sm:flex-row pb-32 lg:pb-12" >
            <Image
              src="/joper.png"
              alt="John Mullins"
              className="dark:invert border-4 border-black opacity-100 z-10 mt-10 mb-6 lg:mb-0"
              width={300}
              height={24}
              priority
            />
            <div className="flex-col text-center max-w-xs" style={{ color: '#052003', fontFamily: 'fantasy'}}>
              <h2 style={{ lineHeight: '60px'}} className="text-5xl font-extrabold">The Mullins Soldiers</h2>
              <h2 className="text-3xl font-bold">of Clonmel</h2>
              <p className="italic mt-4 text-2xl font-semibold" style={{ color: 'black'}}>~ A World War Family ~</p>
            </div>
      </div>

      <div className="mb-32 mt-14 hidden lg:grid text-center lg:mb-0 lg:w-full lg:max-w-7xl lg:grid-cols-6 lg:text-left  border-t-2 border-black">
        <a
          href="mullins-family"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            <span style={{fontFamily: 'fantasy'}}>Mullins Family{" "}</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            A Clonmel Family
          </p>
        </a>

        <a
          href="john-mullins"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
          <span style={{fontFamily: 'fantasy'}}>John Mullins{" "}</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Royal Irish Regiment
          </p>
        </a>

        <a
          href="tom-mullins"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            <span style={{fontFamily: 'fantasy'}}>Tom Mullins{" "}</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Home Guard
          </p>
        </a>

        <a
          href="johnny-mullins"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            <span style={{fontFamily: 'fantasy'}}>Johnny Mullins{" "}</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Royal Armoured Corps
          </p>
        </a>

        <a
          href="bill-mullins"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            <span style={{fontFamily: 'fantasy'}}>Bill Mullins{" "}</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Royal Norfolk Regiment
          </p>
        </a>




        <a
          href="jimmy-mullins"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            <span style={{fontFamily: 'fantasy'}}>Jimmy Mullins{" "}</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            British Overseas Army on the Rhine
          </p>
        </a>
      </div>
    </main>
  );
}
