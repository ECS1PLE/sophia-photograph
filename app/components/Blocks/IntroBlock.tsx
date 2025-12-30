import { bethEllen } from "@/app/fonts/fonts";
import TextBlock from "../Text/TextBlock";
import Button from "../UI/Button";
import React from "react";

interface IntroBlock{
    text: string;
    buttonText:string;
}

const IntroBlock: React.FC<IntroBlock> = ({text, buttonText}) => {
  return (
    <div className="flex flex-col gap-[46px]">
    <TextBlock fontType={bethEllen.className}>
    {text.split("\n").map((line, idx) => (
        <React.Fragment key={idx}>
        {line}
        <br />
        </React.Fragment>
    ))}
    </TextBlock>
      <Button>
        {buttonText}
      </Button>
    </div>
  );
};

export default IntroBlock;
