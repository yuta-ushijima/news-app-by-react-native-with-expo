import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react'
import ListItem from './components/ListItem';
import articles from './dummies/articles';
import Constants from 'expo-constants';
import axios from 'axios';

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=technology&apiKey=${Constants.manifest.extra.newsApiKey}`

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles()
  }, [articles])

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL)
       setArticles(response.data.articles)
    } catch(error) {
      console.log(error.response)
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
      data={articles}
      renderItem={(({item}) =>
        <ListItem imageUrl={item.urlToImage} title={item.title} author={item.author} />
        )}
        keyExtractor={(item, index) => index.toString()}
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
