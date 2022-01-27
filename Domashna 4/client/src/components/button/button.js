import React from 'react';
import { useHistory } from 'react-router-dom';
import './button.css'

const Button = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/prebaruvajne");
    }

    return (
        <div className="something">
            <button onClick={handleClick} type="button">ПРОНЈАДЕТЕ РЕСТОРАН</button>
        </div>
    );
}

export default Button;