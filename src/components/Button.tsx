import React from 'react';
import ReactDOM from 'react-dom';


interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    title: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({title,onClick= ()=>{console.log('Default click')},...props}) => {
    return (
        <button type='button' onClick={onClick} {...props}>
            {title}
        </button>
    );
};

export default Button;
