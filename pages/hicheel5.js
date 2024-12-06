import { useState } from "react";

 
export default function Home() {
    const [grid , setGrid] = useState(false);
    const [search, setSearch] = useState("");
    const data = [
        {
            id: 1,
            title: "Blitz",
            mail: "Blitz@example.com"
        }, 
        {
            id: 2,
            title: "Blitz",
            mail: "Blitz@example.com"
        }, 
        {
            id: 3,
            title: "Blitz",
            mail: "Blitz@example.com"
        }, 
        {
            id: 4,
            title: "Techno4k",
            mail: "Techno4k@example.com"
        }, 
        {
            id: 5,
            title: "Senzu",
            mail: "Senzu@example.com"
        }, 
        {
            id: 6,
            title: "Mzinhio",
            mail: "Mzinhio@example.com"
        },
        {
            id: 7,
            title: "910",
            mail: "910@example.com"
        },
        {
            id: 8,
            title: "Maaraa",
            mail: "Maaraa@example.com"
        },   
    ];
    console.log("setSearch", search);

    const filteredData = useState(true)

    return (
    <div className="p-6 max-w-4xlmx-auto bg-gray-300">
        <div className="flex items-center justify-center mb-6">
            <h1 className="text-3xl font-bold">Хэрэглэгчийн жагсаалт</h1>
        </div>
        <div className={grid == true ? "grid grid-cols-1 sm:grid-cols-2 gap-6 " : "space-y-4"
        }
        >
           <div className="flex items-center justify-center h-2 flex-col">
            <input 
            type="search"
            onChange={(test) => setSearch(test.target.value)}
            placeholder="хэрэглэгчийг нэрээр хайна уу..."
            className="border-2 border-black w-full p-2 rounded"/>
            
        </div>,
        <div className="grid">
            {filteredData.map((item) => (
                    <div 
                        key={item.id}
                        className="bg-white flex justify-center items-center">
                        
                    </div>
                
            ))},
        </div>
        []
            {data.map((items, index) => (
                <div
                key={items.id}
                className="border border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md transition p-4"
                >
                <h2 className="text-xl font-semibold mb-2">{items.title}</h2>
                <p className="text-gray-600">{items.mail}</p>
                </div>
            ))}
        </div>
    </div>
  );
}