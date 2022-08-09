import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="">
            <img
              alt=""
              src="https://www.nicepng.com/png/full/217-2175542_stock-market-png-hd-stock-market-icon-png.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            IBM Task
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
