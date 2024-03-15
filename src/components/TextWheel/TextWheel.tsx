import { useState, FC } from "react";

import TextButton from "../TextButton/TextButton";

import "./TextWheel.scss";

const TextWheel: FC = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  const toggleLeftDrawer = () => {
    setIsLeftOpen(!isLeftOpen);
  };

  const toggleRightDrawer = () => {
    setIsRightOpen(!isRightOpen);
  };

  const preDefinedTexts = [
    <>
      a young and passionate
      <TextButton
        onClickAction={toggleLeftDrawer}
        value="full-stack engineer "
      />
      and <TextButton onClickAction={toggleRightDrawer} value=" much more." />
    </>,
    <>a fan of music.</>,
    <>a speleologist and cave enjoyer.</>,
  ];

  const [sentence, setSentence] = useState<JSX.Element>(preDefinedTexts[0]);

  let counter = 0;

  const handleClick = () => {
    counter = (counter + 1) % preDefinedTexts.length;
    setSentence(preDefinedTexts[counter]);
  };

  return (
    <div>
      <button onClick={handleClick} />
      <div className="text">{sentence}</div>
    </div>
  );
};

export default TextWheel;
