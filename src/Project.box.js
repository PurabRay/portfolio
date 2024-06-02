function ProjectBox({ title, description, img }) {
    return (
        <div className="project-box p-4 bg-gray-200 min-w-800px rounded-lg shadow-md">
            <img src={img} alt={title} className="w-full h-40 object-cover rounded-t-lg mb-2" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default ProjectBox;