import { useState } from 'react';
import './button.css';

const Button = ({ text, setSelectedButtons }) => {
    const [active, setActive] = useState(false);

    const onClick = (text) => {
        setSelectedButtons(text);
        setActive(!active);
    };

    return <div className={active ? 'extra activeBtn' : 'extra'} onClick={() => onClick(text)}>{text}</div>
};

export default Button;