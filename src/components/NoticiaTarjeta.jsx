import React from "react";
import { Card } from "react-bootstrap";

const NoticiaTarjeta = ({ noticia }) => {
  return (
    <Card
      style={{ width: "18rem" }}
      className="container text-center bg-dark text-light mt-3"
    >
      <Card.Body>
        <Card.Title>{noticia.author}</Card.Title>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Title>{noticia.urlToImage}</Card.Title>
        <Card.Text>{noticia.content}</Card.Text>
        <Card.Text>{noticia.description}</Card.Text>
        <Card.Text>{noticia.publishedAt}</Card.Text>
        <Card.Text>{noticia.source.title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NoticiaTarjeta;
