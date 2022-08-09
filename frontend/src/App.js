import Container from "react-bootstrap/esm/Container";
import Header from "./components/Header/Header";
import Stocks from "./components/Stocks/Stocks";
import "./App.scss";
import PlacementMultiExample from "./components/Instructions";
const App = () => {
  return (
    <div className="App">
      <PlacementMultiExample />

      <Header className="header" />

      <Container className="container">
        <Stocks />
      </Container>
    </div>
  );
};
export default App;
