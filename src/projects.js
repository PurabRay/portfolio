
// import './projects.css';

// const Projects = () => {
//   return (
//     <div className="bg-[#0a192f] min-h-screen flex flex-col items-center justify-center py-20 px-4">
//       <h1 className="text-4xl md:text-6xl font-bold text-blue-300 mb-10">Projects</h1>
//       <ul className="space-y-6 text-center">
//         <li className="text-2xl text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105">
//           Recipe Discovery
//         </li>
//         <li className="text-2xl text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105">
//           Vendor Portal System
//         </li>
//         <li className="text-2xl text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105">
//           Expense Tracker App
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Projects;
import './projects.css';

const Projects = () => {
  return (
    <div className="bg-[#0a192f] min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold text-blue-400 mb-16 tracking-widest">
        Projects
      </h1>
      <ul className="space-y-16 text-center">
        <li className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-110 tracking-widest">
          Recipe Discovery
        </li>
        <li className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-110 tracking-widest">
          Vendor Portal System
        </li>
        <li className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-110 tracking-widest">
          Expense Tracker App
        </li>
      </ul>
    </div>
  );
};

export default Projects;

