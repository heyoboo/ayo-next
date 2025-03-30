import Image from "next/image";
import { OnClickComponent } from "./components/onClickComponent";

export default function Home() {
  return (
    <>
      <div className="p-8 font-[family-name:var(--font-geist-sans)] xs:h-[calc(100%-200px)] h-[calc(100%-100px)] overflow-auto">
        <main className="flex flex-col justify-center items-center m-auto h-full max-w-[500px]">
          <h1 className="py-8 text-6xl font-bold">
            Previous
            <span className="ps-1 text-xl font-medium">.JS</span>
          </h1>
          <ol className="list-inside list-decimal pb-8 text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">Get started by sleeping.</li>
            <li className="tracking-[-.01em]">
              Save and see your changes eternally.
            </li>
          </ol>
          <div className="flex gap-x-4 justify-center items-center pb-8 w-full">
            <a
              className="rounded-full border border-solid border-transparent transition-all flex items-center justify-center text-gray-950 bg-white gap-2 hover:shadow-2xl hover:shadow-zinc-600 font-medium text-sm whitespace-nowrap h-10 px-4 w-1/2"
              href=""
            >
              <Image
                className="rotate-180 invert"
                src="cervel.svg"
                alt="Cervel logomark"
                width={20}
                height={20}
              />
              Deploy tomorrow
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] border-white/[.145] transition-all flex items-center justify-center hover:shadow-2xl hover:shadow-zinc-600 hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm h-10 px-4 w-1/2"
              href=""
            >
              Read our dogs
            </a>
          </div>
          <OnClickComponent />
        </main>
      </div>
      <footer>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
        >
          <Image
            aria-hidden
            src="file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Lean
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
        >
          <Image
            aria-hidden
            src="window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Exams
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
        >
          <Image
            aria-hidden
            src="globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to previousjs.gro →
        </a>
      </footer>
    </>
  );
}
