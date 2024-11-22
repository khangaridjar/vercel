import Image from "next/image";
import localFont from "next/font/local";



export default function Home() {
  return (
    <div className="bg-slate-900 text-black flex justify-center items-center h-full py-20">
      <div className="bg-gray-500 text-white flex justify-center items-center py-20 w-3/6 h-full rounded rounded-3xl border-8 border-white flex flex-col space-y-4">
      <Image scr="/khangarid.jpg" width={400} height={400} className="m-24 border-8 border-white rounded rounded-full"/>
      <div className="h-120 w-120 rounded rounded-xl border-8 border-white flex flex-col space-y-4 py-4">
      <p className="text-6xl hover:text-red-400 text-white italic text-center">Name: Khangarid</p>
      <p className="text-6xl hover:text-red-400 text-white italic text-center">School: Nest</p>
      <p className="text-6xl hover:text-red-400 text-white italic text-center">Class: 11b</p>
      <p className="text-6xl hover:text-red-400 text-white italic text-center">Age: 16</p>
      <p className="text-6xl hover:text-red-400 text-white italic text-center">Location: Mongolia</p>
      </div>
      
      </div>
      
    </div>
  );
}
