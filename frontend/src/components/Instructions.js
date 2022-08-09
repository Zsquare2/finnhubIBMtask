import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function PlacementMultiExample() {
  const position = "middle-end";
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const [showC, setShowC] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const toggleShowC = () => setShowC(!showC);

  return (
    <ToastContainer position={position}>
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <strong className="me-auto">Step 1</strong>
        </Toast.Header>
        <Toast.Body>
          To check companies` stock prices, first enter companies` symbol and
          click "Search".
        </Toast.Body>
      </Toast>
      <Toast show={showB} onClose={toggleShowB}>
        <Toast.Header>
          <strong className="me-auto">Step 2</strong>
        </Toast.Header>
        <Toast.Body>
          Now, select period of time for price history and click companies`
          name.
        </Toast.Body>
      </Toast>
      <Toast show={showC} onClose={toggleShowC}>
        <Toast.Header>
          <strong className="me-auto">Step 3</strong>
        </Toast.Header>
        <Toast.Body>To change time period, just repeat Step 2. </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default PlacementMultiExample;
