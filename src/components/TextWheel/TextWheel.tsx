import { FC, useState, useEffect } from 'react';

const TextWheel: FC = () => {
    const [sentence, setSentence] = useState<string>("I'm Thomas, I'm a passionate full-stack engineer and much more");
    const preDefinedTexts = [
        "I'm also a fan of music",
        "I'm also a speleologist and cave enjoyer",
        // Add more texts as needed
    ];
    let counter = 0;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);


    const handleScroll = () => {
        console.log("scrolled")

        if (window.scrollY > 0) {
            counter = (counter + 1) % preDefinedTexts.length;
            setSentence(preDefinedTexts[counter]);
        }
    };
    return (
        <div>
            <p>{sentence}</p>
        </div>
    );
};

export default TextWheel;