import { ModeToggle } from "@/components/theme-buttons/theme-button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="z-10 max-w-1xl w-full font-mono text-sm ">
        <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(#303030_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex justify-end">
            <ModeToggle />
          </div>
          {/* heading col */}
          <div className="h-96">
            <h1 className="text-9xl p-4 text-center font-bold from-blue-700 via-slate-500 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
              {" "}
              Webler
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
