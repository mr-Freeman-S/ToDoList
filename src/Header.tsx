import React from 'react';


type HeaderPropsType = {
    title: string
}

const Header = (props: HeaderPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>v</button>
            </div>
        </div>
    )
};


export default Header;