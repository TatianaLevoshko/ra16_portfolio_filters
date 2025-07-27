import PropTypes from 'prop-types';

function ProjectList({ projects }) {
    return (
    <div className="project-list">
        {projects.map((project, index) => (
        <img key={index} src={project.img} alt={project.category} />
        ))}
    </div>
    );
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(
    PropTypes.shape({
        img: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    })
    ).isRequired,
};

export default ProjectList;
