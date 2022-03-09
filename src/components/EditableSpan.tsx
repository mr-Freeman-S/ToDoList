import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    oldTitle: string
    callback: (title:string)=> void
}
export const EditableSpan = (props: EditableSpanPropsType) => {
    let [newTitle,setNewTitile] = useState(props.oldTitle)
    const [edit, setEdit] = useState<boolean>(false)
    const onDubleClickHandler = () => {
        setEdit(true)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(newTitle)
        setNewTitile(e.currentTarget.value)
    }
    const onBlurHandler = () => {
        props.callback(newTitle)
        setEdit(false)
    }
    return (
        edit
            ? <input onChange={onChangeHandler} value={newTitle} autoFocus onBlur={onBlurHandler}/>
            : <span onDoubleClick={onDubleClickHandler}>{props.oldTitle}</span>
    );
};

