import GlobalStyle from "../../assets/styles/GlobalStyle";
import Result from "../Result";
import Summary from "../Summary";
import { Container, Wrapper } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
      <Container>
        <Result />
        <Summary />
      </Container>
      </Wrapper>
    </>
  );
}

export default App;
