import "./TextButton.scss";

interface TextButton{
    value: string;
};

const TextButton: React.FC<TextButton> = ({value}) => {

    return(
        <div>
            <button >{value}</button>
        </div>
    );
};

export default TextButton;
