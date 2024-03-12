import  { MouseEventHandler } from 'react';

import "./TextButton.scss";

interface TextButtonProps{
    value: string;
    onClickAction: MouseEventHandler;
};

const TextButton: React.FC<TextButtonProps> = ({value, onClickAction}) => {
    return(
        <div>
            <button onClick={onClickAction} className="textButton">{value}</button>
        </div>
    );
};

export default TextButton;
