import React from 'react';
type ButtonPropsType = {
    name: string,
    callBack:()=> void
}


const Button = (props:ButtonPropsType) => {
    const onClickButton = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickButton}>{props.name}</button>
    );
};

export default Button;