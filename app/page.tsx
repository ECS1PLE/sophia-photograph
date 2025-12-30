import BlockwithPhoto from "./components/Blocks/BlockWithPhoto";
import Container from "./components/Container/Container";

export default function Home() {
  return (
    <Container>
      <BlockwithPhoto 
        imageSrc="./images/background.png" 
        bethText="Saint-Peresburg" 
        bigshotText="PHOTOGRAPHER"
      />
    </Container>
  );
}
