import React from "react";
import styled from "styled-components";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  let matchArray = [];
  if (searchTerm.length > 1) {
    matchArray = suggestions.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <SearchField>
      <InputClear>
        <Input
          type="text"
          id="search"
          name="search"
          value={searchTerm}
          onChange={(ev) => setSearchTerm(ev.target.value)}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              handleSelect(searchTerm);
            }
            //   setSearchTerm(searchTerm + ev.key);
          }}
        />
        <ClearButton onClick={() => setSearchTerm("")}>Clear</ClearButton>
      </InputClear>
      <SuggestionBox>
        {matchArray.map((book) => {
          // if(matchArray.length > 0)
          return (
            <SuggestedBook
              key={book.id}
              onClick={() => handleSelect(book.title)}
            >
              {book.title}
            </SuggestedBook>
          );
        })}
      </SuggestionBox>
    </SearchField>
  );
};

const SuggestionBox = styled.ul`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15),
    0px 1px 0.5px rgba(0, 0, 0, 0.075);
  padding: 10px;
  width: 455px;
`;

const SearchField = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputClear = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;
  outline: none;
  width: 350px;
`;

const ClearButton = styled.button`
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;
  background-color: blue;
  color: white;
  margin-left: 5px;
  outline: none;
  width: 100px;
`;

const SuggestedBook = styled.li`
  margin: 5px 0;
  padding: 10px;
  &:hover {
    background-color: lightgoldenrodyellow;
  }
`;

export default Typeahead;
