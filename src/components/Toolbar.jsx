import React from "react";
import cn from "classnames";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
    return (
    <div className="toolbar">
        <ul className="toolbar-list">
        {filters.map((filter, idx) => (
            <li className="toolbar-list-elem" key={idx}>
            <button
                className={cn(
                "btn-category",
                filter === selected && "btn-category_selected"
                )}
              onClick={() => onSelectFilter(filter)} // при клике передаём filter наверх
            >
                {filter}
            </button>
            </li>
        ))}
        </ul>
    </div>
    );
};

export default Toolbar;
