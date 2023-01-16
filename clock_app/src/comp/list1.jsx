import React from "react";

type List1Props = {
};
const list1 = (props: List1Props) => {
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label"></h3>
      <div data-testid="list1-element"></div>
      

      
      <input data-testid="list1-input" />
      <button data-testid="list1-btn-append-start">
      </button>
      <button data-testid="list1-btn-pop-end">
      </button>
      <button data-testid="list1-btn-clear">
      </button>
      <button data-testid="list1-btn-reset">
      </button>
    </div>
  );
};

export default list1;
