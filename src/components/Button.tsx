import React from 'react';

type ButtonPropType = {
    name: string
    callback: () => void

}

export const Button = (props: ButtonPropType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button onClick={onClickHandler}>
            {props.name}
        </button>
    )
};
