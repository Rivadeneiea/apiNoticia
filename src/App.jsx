import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import NoticiaTarjeta from "./components/NoticiaTarjeta";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("popularity");
  const [country, setCountry] = useState("ar");
  console.log(noticias);
  useEffect(() => {
    consultarApi();
  }, [categoria, country]);

  const consultarApi = async () => {
    try {
      const respuesta = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&from=2023-08-12&to=2023-08-12&sortBy=${categoria}domains=techcrunch.com,thenextweb.com&apiKey=41dab2aea4c447d6b9bd5929c9a11659`
      );
      const dato = await respuesta.json();
      setNoticias(dato.articles);
      console.log(dato);
    } catch (error) {
      console.log(error);
    }
  };
  const selector = (e) => {
    setCategoria(e.target.value);
  };
  const selectorCountry = (e) => {
    setCountry(e.traget.value);
  };
  return (
    <>
      {" "}
      <h1 className="container text-center text-danger">
        News of the world
      </h1>{" "}
      <section>
        <Form.Select
          className="container"
          aria-label="Default select example"
          onChange={selector}
        >
          <option>Open this select menu</option>
          <option value="popularity">popularity</option>
          <option value="relevancy">relevancy</option>
          <option value="publishedAt">publishedAt</option>
        </Form.Select>
      </section>
      <section>
        <Form.Select
          className="container"
          aria-label="Default select example"
          onChange={selectorCountry}
        >
          <option>News Country</option>
          <option value="ar">Argentina</option>
          <option value="il">Israel</option>
          <option value="br">Brazil</option>
        </Form.Select>
      </section>
      <section className="container d-flex flex-wrap">
        {noticias.map((noticia, index) => (
          <NoticiaTarjeta noticia={noticia} key={index} />
        ))}
      </section>
    </>
  );
}

export default App;
