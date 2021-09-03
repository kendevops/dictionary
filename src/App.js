import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [lang, setLang] = useState("");
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const dictApi = async (lang, word) => {
    try {
      const api = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
      );
      setMeanings(api.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dictApi("en", "hello");
  }, []);

  return <div className="App">{meanings}</div>;
};

export default App;
