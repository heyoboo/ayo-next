import Image from "next/image";
import { OnClickComponent } from "./components/onClickComponent";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="mb-3 text-6xl font-bold">
          Previous
          <span className="ps-1 text-xl font-medium">
            .JS
          </span>
        </h1>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by sleeping.
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes eternally.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-all flex items-center justify-center bg-foreground text-background gap-2 hover:shadow-2xl hover:shadow-zinc-600 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href=""
          >
            <Image
              className="dark:invert rotate-180"
              src="cervel.svg"
              alt="Cervel logomark"
              width={20}
              height={20}
            />
            Deploy tomorrow
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-all flex items-center justify-center hover:bg-[#f2f2f2] hover:shadow-2xl hover:shadow-zinc-600 dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href=""
          >
            Read our dogs
          </a>
        </div>
        <OnClickComponent />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
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
    </div>
  );
}
