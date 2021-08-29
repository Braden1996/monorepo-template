import * as React from 'react';
import styled from 'styled-components';

import { Typography, TypographyTypes } from '@monorepo-template/web-components';

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  background-color: ${p => p.theme.colors.semantic.background.primary};
`;

const Main = styled.main`
  height: 100vh;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${p => p.theme.colors.semantic.background.primary};
`;

const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  margin: ${p => p.theme.dimensions.base.large}px;
`;

const HeaderText = styled(Typography).attrs(() => ({
  type: TypographyTypes.Royal,
}))`
  color: ${p => p.theme.colors.semantic.text.primary};
`;

const FooterContainer = styled.div`
  background-color: ${p => p.theme.colors.semantic.background.secondary};
`;

const StyledFooter = styled.div`
  max-width: ${p => p.theme.dimensions.use.breakpoints.large}px;
  padding-left: ${p => p.theme.dimensions.base.normal}px;
  padding-right: ${p => p.theme.dimensions.base.normal}px;
  margin: ${p => p.theme.dimensions.base.xLarge}px auto;
`;

const BasePage: React.FC = ({ children }) => (
  <Container>
    <Header>
      <HeaderText>Monorepo Template Website</HeaderText>
    </Header>

    <Main>{children}</Main>

    <FooterContainer>
      <StyledFooter />
    </FooterContainer>
  </Container>
);

export default BasePage;
