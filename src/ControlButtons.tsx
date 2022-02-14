import React from 'react';
import {filterType} from "./App";
type ControlButtonsType = {
    changeFilter: (filter:filterType) => void
}

const ControlButtons = (props:ControlButtonsType) => {

    const onClickSetFilter = (filter:filterType) => () => {
        props.changeFilter(filter)
    }
    return (
        <div>
            <button onClick={onClickSetFilter('all')}>All</button>
            <button onClick={onClickSetFilter('active')}>Active</button>
            <button onClick={onClickSetFilter('completed')}>Completed</button>
        </div>
    );
};

export default ControlButtons;