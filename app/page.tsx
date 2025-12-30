import BlockwithPhoto from "./components/Blocks/BlockWithPhoto";
import Container from "./components/Container/Container";
import TextBlock from "./components/Text/TextBlock";
import Button from "./components/UI/Button";
import { bethEllen } from "./fonts/fonts";

export default function Home() {
  return (
    <Container>
      <BlockwithPhoto 
        imageSrc="./images/background.png" 
        bethText="Saint-Peresburg" 
        bigshotText="PHOTOGRAPHER"
      />
      <div className="flex flex-col gap-[46px]">
        <TextBlock fontType={bethEllen.className}>
          Привет, я Соня - фотограф.<br />
          Сфотографирую тебя так, что ты влюбишься в себя!
        </TextBlock>
        <Button>
          Записаться на съемку
        </Button>
      </div>
    </Container>
  );
}
