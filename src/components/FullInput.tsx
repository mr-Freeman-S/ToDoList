import React, {ChangeEvent, useState} from 'react';


type FullInputPropsType = {
    addedNewTask:(task:string) => void
}

const FullInput = (props:FullInputPropsType) => {
    let [title, setTitle] = useState<string>('')
    function onChangeInputHandler(event:ChangeEvent<HTMLInputElement>) {
        setTitle(event.currentTarget.value)

    }

    function onClickButtonHandler() {
        props.addedNewTask(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={()=>{onClickButtonHandler()}}>+</button>
        </div>
    );
};

export default FullInput;