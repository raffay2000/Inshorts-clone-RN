import { StyleSheet, Text, View } from 'react-native'
import react,{createContext,useState,useEffect} from 'react'
import { getNewsAPI, getSourceAPI } from './api';
import axios from 'axios';
export const NewsContext = createContext()
const Context = ({children}) => {
    const [category, setCategory] = useState("general");
    const [source, setSource] = useState();
    const [news, setNews] = useState([]);
    const [darkTheme, setDarkTheme] = useState(false)
    const [index, setIndex] = useState(1);
    const fetchNews = async () => {
        const { data } = await axios.get(getNewsAPI(category));
        setNews(data);
        setIndex(1);
      };
      // const fetchNewsfromSource = async () => {
      //   try {
      //     const { data } = await axios.get(getSourceAPI(source));
      //     setNews(data);
      //     setIndex(1);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
    
    const fetchNewsSource = async()=>{
      try {const {data} =  await axios.get(getSourceAPI(source))
      setSource(data)
      setIndex(1)
    }catch(error){
      console.log(error)
    }
    }
      useEffect(() => {
        fetchNews();
      }, [category]);
      useEffect(() => {
        fetchNewsSource();
      }, [source]);
  return (
    <NewsContext.Provider value={{news,index,setIndex,fetchNews,category,setCategory,setSource,setDarkTheme,darkTheme}}>
        {children}
    </NewsContext.Provider>
  )
}

export default Context

// const styles = StyleSheet.create({})