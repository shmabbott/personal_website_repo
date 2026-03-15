import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h1 className="text-5xl font-extrabold mb-4">
        Hi, I'm Sam.
      </h1>
      <p className="text-xl text-gray-400 max-w-2xl">
        I’m a videographer and DIY enthusiast. Welcome to my corner of the internet where I share my projects, from Sony camera rigs to automotive mods.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200">
          View My Work
        </button>
        <button className="border border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition">
          Contact Me
        </button>
      </div>
    </main>
  );
}