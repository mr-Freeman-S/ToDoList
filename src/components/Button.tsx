import React from 'react';
import {FilterValuesType} from "../App";

type ButtonPropType = {
    name: string
    callback: () => void
    classStyle?: string
}

export const Button = (props: ButtonPropType) => {
    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button className={props.classStyle}  onClick={onClickHandler}>
            {props.name}
        </button>
    )
};
