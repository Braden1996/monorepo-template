import * as React from 'react';
import styled from 'styled-components';

import { Typography } from '@monorepo-template/web-components';

import { BasePage } from '../components/templates';

const DescriptionText = styled(Typography)`
  color: ${p => p.theme.colors.semantic.text.primary};
`;

const Home: React.FC = () => (
  <BasePage>
    <DescriptionText>Coming soon</DescriptionText>
  </BasePage>
);

export default Home;
