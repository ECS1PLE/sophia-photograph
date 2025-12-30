import BlockwithPhoto from "./components/Blocks/BlockWithPhoto";
import IntroBlock from "./components/Blocks/IntroBlock";
import Container from "./components/Container/Container";
import Header from "./components/Text/Header";

export default function Home() {
  return (
    <Container>
      <BlockwithPhoto 
        imageSrc="./images/background.png" 
        bethText="Saint-Peresburg" 
        bigshotText="PHOTOGRAPHER"
      />
      <IntroBlock 
        text={`Привет, я Соня - фотограф.
        Сфотографирую тебя так, что ты влюбишься в себя!`}      
        buttonText="Записаться на съемку"
      />
      <Header textRu="ОБО МНЕ" textEn="about me" />
    </Container>
  );
}
