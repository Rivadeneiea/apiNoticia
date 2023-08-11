import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [noticias, setNoticias] = useState([]);
  console.log(noticias);
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const respuesta = await fetch(
        `https://newsapi.org/v2/top-headlines?country=ar&apiKey=41dab2aea4c447d6b9bd5929c9a11659`
      );
      const dato = await respuesta.json();
      setNoticias(dato.articles);
      console.log(dato);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
