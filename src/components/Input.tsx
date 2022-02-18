import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputType = {
    title: string
    setTitle: (title: string) => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}
const Input = (props: InputType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        props.onKeyPressHandler(e)
    }
    return (
        <input value={props.title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPress}
        />
    );
};

export default Input;