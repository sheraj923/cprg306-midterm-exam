import Image from "next/image";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
        <Welcome />
      </div>
    </main>
  );
}
