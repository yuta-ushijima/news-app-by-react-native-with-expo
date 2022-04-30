import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
      data={articles}
      renderItem={(({item}) =>
        <ListItem imageUrl={item.urlToImage} title={item.title} author={item.author} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
