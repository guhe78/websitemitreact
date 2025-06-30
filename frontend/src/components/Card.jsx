import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <Card className="projectCard mx-auto">
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <a href={props.linkName} target="blank">
          <Button variant="primary">Click</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default Cards;
