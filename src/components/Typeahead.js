import React from "react";
import styled from "styled-components";

const Typeahead = ({ categories, suggestions, handleSelect }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(
    0
  );

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
            switch (ev.key) {
              case "Enter": {
                handleSelect(matchArray[selectedSuggestionIndex].title);
                return;
              }
              case "ArrowUp": {
                setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                return;
              }
              case "ArrowDown": {
                setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                return;
              }
            }
          }}
        />
        <ClearButton onClick={() => setSearchTerm("")}>Clear</ClearButton>
      </InputClear>
      {matchArray.length > 0 && (
        <SuggestionBox>
          {matchArray.map((book, index) => {
            const searchTermIndex = book.title.toLowerCase().search(searchTerm);
            const secondHalfIndex = searchTermIndex + searchTerm.length;
            console.log(secondHalfIndex);
            const secondHalf = book.title.slice(secondHalfIndex);
            const firstHalf = book.title.slice(0, secondHalfIndex);
            let isSelected = false;
            if (index === selectedSuggestionIndex) {
              isSelected = true;
            }
            // const isSelected = index === selectedSuggestionIndex;
            return (
              <SuggestedBook
                key={book.id}
                style={{
                  background: isSelected
                    ? "hsla(50deg, 100%, 80%, 0.25)"
                    : "transparent",
                }}
                onClick={() => handleSelect(book.title)}
                onMouseEnter={() => setSelectedSuggestionIndex(index)}
              >
                <span>
                  {firstHalf}
                  <Prediction>{secondHalf}</Prediction>
                  <Italics> in </Italics>
                  <SuggestionCategory>{book.categoryId}</SuggestionCategory>
                </span>
              </SuggestedBook>
            );
          })}
        </SuggestionBox>
      )}
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
`;

const Prediction = styled.span`
  font-weight: bold;
`;

const SuggestionCategory = styled.span`
  color: purple;
  font-style: italic;
`;

const Italics = styled.span`
  font-style: italic;
`;

export default Typeahead;
