import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type FullInputPropsType={
    callback:(title:string)=>void

}

const FullInput = (props:FullInputPropsType) => {

    let [title, setTitle] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const addTask = () => {
        props.callback(title);
        setTitle("");
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }
    return (

            <div>
                <input value={title}
                       onChange={ onChangeHandler }
                       onKeyPress={ onKeyPressHandler }
                />
                <button onClick={addTask}>+</button>
            </div>

    );
};

export default FullInput;