import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
  border: 2px solid black;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Parent = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-rows: 1fr 6fr;
  width: 100%;
  height: 100%;
  border: 2px solid yellow;
`;

const HeaderContainer = styled.div`
  grid-column: 1 / -1;
  border: 2px solid red;
`;

const Hero = styled.div`
  grid-column: 1 / -1;
  display: flex;
  border: 2px solid green;
`;

const Aside = styled.div`
  flex: 2;
  border: 2px solid blue;
`;

const MainParent = styled.div`
  flex: 8;
  border: 2px solid orange;
`;

const FooterContainer = styled.div`
  grid-column: 1 / -1;
  border: 2px solid darkcyan;
  min-height: 20vh;
`;

function App() {
  return (
    <>
      <Wrapper>
      <Parent>
        <HeaderContainer>
          this is the header
        </HeaderContainer>
        <Hero>
          <Aside>
            this is the sidebar
          </Aside>
          <MainParent>
            this is theh main content
          </MainParent>
        </Hero>
        <FooterContainer>
          this is the footer 
        </FooterContainer>
      </Parent>
    </Wrapper>
      
    </>
  )
}

export default App
