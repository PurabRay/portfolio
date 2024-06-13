// import {Carousel} from 'nuka-carousel';
// import ProjectBox from './Project.box.js';
// const projects = [
//     {
//         title: "Weather App",
//         description: "A weather application that provides real-time weather updates and forecasts.",
//         img: "https://images.unsplash.com/photo-1593642532505-20318eb1b73d",
//     },
//     {
//         title: "Product Service",
//         description: "A platform for selling and buying various products or services online.",
//         img: "https://images.unsplash.com/photo-1514222709107-60abb70a6fd0",
//     },
//     {
//         title: "Data Science Project",
//         description: "A data science project involving analysis, visualization, and interpretation of data.",
//         img: "https://images.unsplash.com/photo-1503431106284-49021f4f7287",
//     },
// ];

// function CarouselComponent() {
   
//     return (
//         <Carousel
//             autoplay
          
//             renderCenterLeftControls={({ previousSlide }) => (
//                 <button onClick={previousSlide} className="carousel-control">{"<"}</button>
//             )}
//             renderCenterRightControls={({ nextSlide }) => (
//                 <button onClick={nextSlide} className="carousel-control">{">"}</button>
//             )}
//         >
//             {projects.map((project, index) => (
//                 <ProjectBox
//                     key={index}
//                     title={project.title}
//                     description={project.description}
//                     img={project.img}
//                 />
//             ))}
//         </Carousel>
//     );
// }

// export default CarouselComponent;