import { flatten } from 'lodash';
import * as React from 'react';
import { Alert, ScrollView } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import Pressable from '../Pressable';

const SectionContainer = styled.View`
  width: 100%;
  background-color: ${p => p.theme.colors.semantic.background.secondary};
  margin: 8px;
  padding: 4px;
  border-radius: 3px;
`;

const SectionTitle = styled.Text`
  margin-left: 4px;
  color: ${p => p.theme.colors.semantic.text.primary};
  text-transform: capitalize;
`;

const SectionBlocks = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const ColorBlock = styled.View`
  width: 42px;
  margin: 4px;
`;

const Box = styled.View`
  width: 42px;
  height: 42px;
  border-radius: 4px;
  margin-top: 4px;
`;

const BlockTitle = styled.Text`
  max-width: 100%;
  overflow: hidden;
  color: ${p => p.theme.colors.semantic.text.secondary};
  text-transform: capitalize;
`;

// Recursively flatten the color palette object.
const flattenColors = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: string | Record<string, string> | any,
  name = '',
): Array<[string, string]> => {
  if (typeof colors === 'string') return [[name, colors]];

  const groupColors = Object.entries(colors).map(([innerName, innerColors]) =>
    flattenColors(
      innerColors,
      `${name}${innerName === '' ? '' : '/'}${innerName}`,
    ),
  );

  return flatten(groupColors);
};

// Demonstrates our color palette in a sectioned grid.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PaletteGrid: React.FC<{ sections: [string, any][] }> = ({ sections }) => {
  const renderedSections = React.useMemo(
    () =>
      sections.map(([section, colors]) => (
        <SectionContainer>
          <SectionTitle>{section}</SectionTitle>
          <SectionBlocks>
            {flattenColors(colors).map(([name, color]) => (
              <ColorBlock key={name}>
                {name !== '' && (
                  <BlockTitle ellipsizeMode="head" numberOfLines={1}>
                    {name}
                  </BlockTitle>
                )}
                <Pressable onPress={() => Alert.alert(name)}>
                  <Box style={{ backgroundColor: color }} />
                </Pressable>
              </ColorBlock>
            ))}
          </SectionBlocks>
        </SectionContainer>
      )),
    [sections],
  );

  return <ScrollView>{renderedSections}</ScrollView>;
};

export const Palette: React.FC = () => {
  const theme = useTheme();
  const sections = React.useMemo(
    () => Object.entries(theme.colors.palette),
    [theme],
  );

  return <PaletteGrid sections={sections} />;
};

export const SemanticPalette: React.FC = () => {
  const theme = useTheme();
  const sections = React.useMemo(
    () => Object.entries(theme.colors.semantic),
    [theme],
  );

  return <PaletteGrid sections={sections} />;
};
