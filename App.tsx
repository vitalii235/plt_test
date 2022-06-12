import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainNavigation from './navigation/MainNavigation';
import {OFFSET} from './theme/constants';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: OFFSET,
  },
});

export default App;
