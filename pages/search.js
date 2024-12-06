import { useState } from "react";

export default function Task2() {
    const [search, setSearch] = useState("");

    console.log("search utga --->", search);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
                    Search
                </h1>
                <input 
                    type="search"
                    onChange={(e) => setSearch(e.target.value)} 
                    className="w-full p-3 border-2 border-indigo-500 rounded-lg text-black focus:outline-none focus:border-indigo-700 mb-6"
                    
                    value={search}  
                />
                <div className="text-center text-lg text-gray-800">
                    <div className="font-medium text-indigo-600">Search:</div> 
                    <div className="font-semibold text-indigo-800">{search}</div>
                </div>
                <div className="mt-6 text-center">
                    <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200">
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}