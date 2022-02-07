import React from 'react';
import {filterType} from "./App";
type ControlButtonsType = {
    changeFilter:(filter:filterType) => void
}

const ControlButtons = (props:ControlButtonsType) => {
    return (
        <div>
            <button onClick={() => props.changeFilter('all')}>All</button>
            <button onClick={() => props.changeFilter('active')}>Active</button>
            <button onClick={() => props.changeFilter('completed')}>Completed</button>
        </div>
    );
};

export default ControlButtons;