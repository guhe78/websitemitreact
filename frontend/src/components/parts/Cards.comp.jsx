import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Cards.style.scss";

function Cards({ imgUrl, title, text, linkName }) {
  return (
    <Card className="projectCard mx-auto">
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <a href={linkName} target="blank">
          <Button variant="primary">Click</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default Cards;
