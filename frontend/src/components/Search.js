import { useState } from "react";
import Notification from "./Notification";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Search = ({ handleSearch, refSearchValue }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchValueChange = (event) => {
    const limit = 35;
    const validator = /^[A-Za-z\s]*$/;

    if (
      event.target.value.length > limit &&
      !validator.test(event.target.value)
    )
      setErrorMessage(
        "Invalid input: only 35 characters allowed & only letters and spaces allowed "
      );
    else if (event.target.value.length > limit) {
      setErrorMessage("Invalid input: only 35 characters allowed ");
    } else if (!validator.test(event.target.value))
      setErrorMessage("Invalid input: only letters and spaces allowed ");
    else {
      setErrorMessage("");
    }
    setInputValue(event.target.value);
    refSearchValue.current = event.target.value;
  };
  return (
    <div className="search">
      <InputGroup
        as={"form"}
        className=""
        style={{ width: "80%", maxWidth: "500px", minWidth: "170px" }}
      >
        <Notification message={errorMessage} />

        <Form.Control
          isInvalid={errorMessage}
          placeholder="Enter company symbol..."
          value={inputValue}
          onChange={handleSearchValueChange}
        />
        <Button
          variant="primary"
          id="button-addon2"
          type="submit"
          onClick={handleSearch}
        >
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export { Search };
