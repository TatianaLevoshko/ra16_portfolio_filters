import PropTypes from 'prop-types';

function Toolbar({ filters, selected, onSelectFilter }) {
    return (
    <div className="toolbar">
        {filters.map((filter, index) => (
        <button
            key={index}
            className={filter === selected ? 'selected' : ''}
            onClick={() => onSelectFilter(filter)}
        >
            {filter}
        </button>
        ))}
    </div>
    );
}

Toolbar.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;
