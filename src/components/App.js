import React from "react";
import data from "../data";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import Typeahead from "./Typeahead";

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
          categories={categories}
          suggestions={data.books}
          handleSelect={(suggestion) => {
            window.alert(`Selected: ${suggestion}`);
          }}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
