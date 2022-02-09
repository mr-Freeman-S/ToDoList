import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string,
    setTitle: (title:string)=> void
}
const Input = (props:InputPropsType) => {
    function onChangeInputHandler(event:ChangeEvent<HTMLInputElement>) {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

export default Input;