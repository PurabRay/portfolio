import './serv.css';
function Services() {
    return (
      <section className="px-4 py-8">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-center">Skills</h1>
        </header>
        <div className="flex flex-wrap justify-center gap-4">
  <div className="service-wrapper">
    <div className="service border border-black bg-red-400 shadow-md p-6 rounded-lg text-center transform scale-110 hover:bg-blue-500 transition duration-300 cursor-pointer fade-in">
      HTML
    </div>
    <div className="tag bg-gray-300 text-gray-700 p-2 rounded-md mt-2">Frontend</div>
  </div>

  <div className="service-wrapper">
    <div className="service border border-black bg-red-400 shadow-md p-6 rounded-lg text-center hover:bg-blue-500 transition duration-300 cursor-pointer">
      CSS
    </div>
    <div className="tag bg-gray-300 text-gray-700 p-2 rounded-md mt-2">Frontend</div>
  </div>

  <div className="service-wrapper">
    <div className="service border border-black bg-red-400 shadow-md p-6 rounded-lg text-center hover:bg-blue-500 transition duration-300 cursor-pointer">
      JavaScript
    </div>
    <div className="tag bg-gray-300 text-gray-700 p-2 rounded-md mt-2">Frontend/Backend</div>
  </div>

  <div className="service-wrapper">
    <div className="service border border-black bg-red-400 shadow-md p-6 rounded-lg text-center hover:bg-blue-500 transition duration-300 cursor-pointer">
      React
    </div>
    <div className="tag bg-gray-300 text-gray-700 p-2 rounded-md mt-2">Frontend</div>
  </div>

  <div className="service-wrapper">
    <div className="service border border-black bg-red-400 shadow-md p-6 rounded-lg text-center hover:bg-blue-500 transition duration-300 cursor-pointer">
      Java
    </div>
    <div className="tag bg-gray-300 text-gray-700 p-2 rounded-md mt-2">Backend</div>
  </div>

  <div className="service-wrapper">
    <div className="service border border-black bg-red-400 shadow-md p-6 rounded-lg text-center hover:bg-blue-500 transition duration-300 cursor-pointer">
      Django
    </div>
    <div className="tag bg-gray-300 text-gray-700 p-2 rounded-md mt-2">Backend</div>
  </div>

  <div className="service-wrapper">
    <div className="service border border-black bg-red-400 shadow-md p-6 rounded-lg text-center hover:bg-blue-500 transition duration-300 cursor-pointer">
      Tailwind
    </div>
    <div className="tag bg-gray-300 text-gray-700 p-2 rounded-md mt-2">Frontend</div>
  </div>

  <div className="service-wrapper">
    <div className="service border border-black bg-red-400 shadow-md p-6 rounded-lg text-center hover:bg-blue-500 transition duration-300 cursor-pointer">
      Node.js
    </div>
    <div className="tag bg-gray-300 text-gray-700 p-2 rounded-md mt-2">Backend</div>
  </div>
</div>
      </section>
    );
  }
  
  export default Services;
 

