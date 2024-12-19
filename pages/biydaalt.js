import React, { useState } from "react";

const students = [
  { name: "Ariunbayr Odbayar", school: "Nest education", age: 16, email: "ariuka@gmail.com", image: "/ariunbayr.jpg" },
  { name: "Badraa Tsogtbaatar", school: "Nest education", age: 16, email: "fat@gmail.com", image: "/badraa.jpg" },
  { name: "Bilguuntugs Amarbat", school: "Nest education", age: 16, email: "vietnam@gmail.com", image: "/bilguuntugs.jpg" },
  { name: "Gan-Erdene Undrakhtamir", school: "Nest education", age: 16, email: "itzganaa@gmail.com", image: "/ganerdene.jpg" },
  { name: "Gunbilig Bat-Enkh", school: "Nest education", age: 16, email: "gunbe@gmail.com", image: "/gunbilig.jpg" },
  { name: "Delgermurun Erdenebold", school: "Nest education", age: 16, email: "zebra@gmail.com", image: "/degi.jpg" },
  { name: "Jargal Bayandalai", school: "Nest education", age: 16, email: "jagi@gmail.com", image: "/jargal.jpg" },
  { name: "Munkhbaysgalan Chinbat", school: "Nest education", age: 16, email: "crit@gmail.com", image: "/mugi.jpg" },
  { name: "Munkhnaran Ulziibayr", school: "Nest education", age: 16, email: "muna@gmail.com", image: "/munkhnaran.jpg" },
  { name: "Nomindari Enkhtur", school: "Nest education", age: 16, email: "nomio@gmail.com", image: "/nomindari.jpg" },
  { name: "Siilen Batsaikhan", school: "Nest education", age: 16, email: "siilen@gmail.com", image: "/siilen.jpg" },
  { name: "Tuvshin Bulgan", school: "Nest education", age: 16, email: "tuvshu@gmail.com", image: "/tuvshin.jpg" },
  { name: "Temuugei Teluun", school: "Nest education", age: 16, email: "temugei@gmail.com", image: "/temuugei.jpg" },
  { name: "Temuulen Temuujin", school: "Nest education", age: 16, email: "temka@gmail.com", image: "/temuulen.jpg" },
  { name: "Undrakh Sukhbaatar", school: "Nest education", age: 16, email: "290@gmail.com", image: "/undrakh.jpg" },
  { name: "Khangarid Jargalsaikhan", school: "Nest education", age: 16, email: "khangaridjar@gmail.com", image: "/khangarid.jpg" },
  { name: "Chinbiligt Dovchinbazar", school: "Nest education", age: 16, email: "chinbe@gmail.com.com", image: "/chinbiligt.jpg" },
  { name: "Erdenebold Erdenetugs", school: "Nest education", age: 16, email: "monkey123@gmail.com", image: "/bold.jpg" },
  { name: "Erdenejargal Batragchaa", school: "Nest education", age: 16, email: "Erdek@gmail.com", image: "/erdenejargal.jpg" },
];

export default function StudentGrid() {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-white text-center">11b Students</h1>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search students..."
          className="w-2/3 sm:w-1/2 lg:w-1/3 p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-lg bg-white text-gray-900 hover:scale-105 transition-transform duration-200 h-160"
          >
            <img
              src={student.image}
        
              className="w-full object-cover rounded-md mb-4 h-80"
            />
            <h2 className="text-xl font-semibold mb-2">{student.name}</h2>
            <p className="text-md">School: {student.school}</p>
            <p className="text-md">Age: {student.age}</p>
            <p className="text-md">Email: <a href={`${student.email}`} className="text-purple-600 hover:underline">{student.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}
