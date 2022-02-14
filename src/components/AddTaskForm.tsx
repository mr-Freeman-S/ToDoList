import React, {ChangeEvent, useState, KeyboardEvent} from 'react';

type AddTaskFormPropsType = {
    addNewTask:(task:string)=> void
    onClickButtonHandler:()=>void
}

const AddTaskForm = (props:AddTaskFormPropsType) => {
    const [title,setTitle] = useState('')

    const onClickAddTask = () => {
        props.addNewTask(title);
        setTitle('')
    }
    const onKeyPressSetTitle = (e:KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter'&& onClickAddTask()
    }
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        console.log(e.nativeEvent)
    }


    return (
        <div>
            <input
                value={title}
                onChange={onChangeSetTitle}
                type="text"
                onKeyPress={onKeyPressSetTitle}
            />
            <button onClick={onClickAddTask}>+</button>
        </div>
    );
};

export default AddTaskForm;