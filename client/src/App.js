import Header from "./components/Header";
import HomePage from "./components/HomePage"
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";

const App = () => {
    return (
      <BrowserRouter>
          <GlobalStyle />
          <Header />

          <Wrapper>
            <Routes>

            <Route exact path="/" element={<HomePage/>} />

            </Routes>
          </Wrapper>
      </BrowserRouter>
    );
}






const Wrapper = styled.div`
`








export default App;
