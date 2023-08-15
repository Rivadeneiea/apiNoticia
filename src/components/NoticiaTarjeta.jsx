import React from "react";
import { Card } from "react-bootstrap";

const NoticiaTarjeta = ({ noticia }) => {
  return (
    <Card
      style={{ width: "18rem" }}
      className="container text-center bg-dark text-light mt-3"
    >
      <Card.Img variant="top" src={noticia.url} alt={noticia.title} />
      <Card.Body>
        <Card.Title>{noticia.author}</Card.Title>
        <Card.Title>{noticia.title}</Card.Title>

        <Card.Text>{noticia.content}</Card.Text>
        <Card.Text>{noticia.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NoticiaTarjeta;
