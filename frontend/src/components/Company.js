import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Company = ({ company, handleCandle }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        onClick={handleCandle}
        variant="top"
        src={company.logo}
        style={{ width: "50%", margin: "2rem auto", cursor: "pointer" }}
      />
      <Card.Body onClick={handleCandle} style={{ cursor: "pointer" }}>
        <Card.Title>{company.name}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          Country: <b>{company.country}</b>
        </ListGroup.Item>
        <ListGroup.Item>
          Currency: <b>{company.currency}</b>
        </ListGroup.Item>
        <ListGroup.Item>
          Exchange: <b>{company.exchange}</b>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{company.weburl}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Company;
