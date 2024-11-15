import Image from "next/image";
import localFont from "next/font/local";



export default function Home() {
  return (
    <div className="bg-slate-900 text-black flex justify-center items-center h-screen">
      <div className="bg-blue-700 text-white flex justify-center items-center w-5/6 h-5/6 rounded rounded-2xl border-8 border-black flex flex-row space-y-4">
      <p className="text-6xl">Khangarid ID card</p>
      <Image scr="/khangarid.jpg" width={400} height={400} className="m-10 border-8 border-black rounded rounded-full"/>
      <div className="flex flex-col space-y-4">
      <p className="text-6xl hover:text-red-400 text-white">Name: Khangarid</p>
      <p className="text-6xl hover:text-red-400 text-white">School: Nest</p>
      <p className="text-6xl hover:text-red-400 text-white">Class: 11b</p>
      <p className="text-6xl hover:text-red-400 text-white">Age: 16</p>
      <p className="text-6xl hover:text-red-400 text-white">About me:</p>
      </div>
      
      </div>
      
    </div>
  );
}
