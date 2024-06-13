import './projects.css'
const Projects = () => {
    return (
        <div className="bg-[#0a192f] min-h-screen flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-blue-300 mb-10">Projects</h1>
        <div className="flex justify-center space-x-8">
          <div className="w-64 h-72 bg-white rounded-lg shadow-lg animate-float flex align-middle justify-center">Weather App</div>
          <div className="w-64 h-72 bg-white rounded-lg shadow-lg animate-float delay-100 align-middle justify-center">Product service backend</div>
          <div className="w-64 h-72 bg-white rounded-lg shadow-lg animate-float delay-200 align-middle justify-center">portfolio</div>
        </div>
      </div>
    );
  };
  
  export default Projects;