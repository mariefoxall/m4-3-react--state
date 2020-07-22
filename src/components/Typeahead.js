import React from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <SearchField>
      <Input
        type="text"
        id="search"
        name="search"
        value={searchTerm}
        onChange={(ev) => setSearchTerm(ev.target.value)}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            console.log(suggestions);
            handleSelect(searchTerm);
          }
          //   setSearchTerm(searchTerm + ev.key);
        }}
      />
      <ClearButton onClick={() => setSearchTerm("")}>Clear</ClearButton>
    </SearchField>
  );
};

const SearchField = styled.div`
  margin: 30px;
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;
  outline: none;
`;

const ClearButton = styled.button`
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;
  background-color: blue;
  color: white;
  margin-left: 5px;
  outline: none;
`;

export default Typeahead;
