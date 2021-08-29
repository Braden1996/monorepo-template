import * as React from 'react';
import { StyleSheet } from 'react-native';

import { palette } from '@monorepo-template/brand';
import { GhostButton } from '@monorepo-template/mobile-components';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <GhostButton>Hello</GhostButton>
      <View
        style={styles.separator}
        lightColor={palette.ios.lightGray6}
        darkColor={palette.ios.darkGray6}
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
