import BlockwithPhoto from "./components/Blocks/BlockWithPhoto";
import IntroBlock from "./components/Blocks/IntroBlock";
import PhotosBlock from "./components/Blocks/PhotosBlock";
import ServiceBlocks from "./components/Blocks/ServicesBlock";
import Container from "./components/Container/Container";
import Header from "./components/Text/Header";
import TextBlock from "./components/Text/TextBlock";
import { unna } from "./fonts/fonts";

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
      <TextBlock fontType={unna.className}>
        я проффесионально занимаюсь фотографией <br />
        мой уникальный навык - <br />
        передавать энергию людей через снимки, это отличает меня от остальных фотографов.
      </TextBlock>
      <PhotosBlock img1="./images/photo1.png" img2="./images/photo1.png" img3="./images/photo1.png"/>
      <Header textRu="УСЛУГИ" textEn="services" />
      <ServiceBlocks />
      <Header textRu="ПОРТФОЛИО" textEn="photos" />
      <PhotosBlock img1="./images/photo1.png" img2="./images/photo1.png" img3="./images/photo1.png"/>
      <Header textRu="КОНТАКТЫ" textEn="contacts" />
    </Container>
  );
}
