// import './projects.css'
// const Projects = () => {
//     return (
//         <div className="bg-[#0a192f] min-h-screen flex flex-col items-center justify-center py-20">
//         <h1 className="text-4xl font-bold text-blue-300 mb-10">Projects</h1>
//         <div className="flex justify-center space-x-8">
//           <div className="w-64 h-72 bg-white rounded-lg shadow-lg animate-float flex align-middle justify-center">Weather App</div>
//           <div className="w-64 h-72 bg-white rounded-lg shadow-lg animate-float delay-100 align-middle justify-center">Product service backend</div>
//           <div className="w-64 h-72 bg-white rounded-lg shadow-lg animate-float delay-200 align-middle justify-center">portfolio</div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Projects;
import './projects.css';

const Projects = () => {
  return (
    <div className="bg-[#0a192f] min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-300 mb-10">Projects</h1>
      <ul className="space-y-6 text-center">
        <li className="text-2xl text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105">
          Recipe Discovery
        </li>
        <li className="text-2xl text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105">
          Vendor Portal System
        </li>
        <li className="text-2xl text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105">
          Expense Tracker App
        </li>
      </ul>
    </div>
  );
};

export default Projects;

