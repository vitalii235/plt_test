import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import useActionCreator from '../../hooks/useActionCreator';
import generalSelector from '../../store/generalReducer/selectors';
import {useSelector} from 'react-redux';
import {OFFSET} from '../../theme/constants';
import NavCard from '../../components/NavCard';

export default function Groups() {
  const navigation = useSelector(generalSelector.navigation);
  const {getNavigation} = useActionCreator();

  useEffect(() => {
    getNavigation();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {navigation.map(item => (
        <NavCard {...item} key={item.category} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: OFFSET,
  },
});
