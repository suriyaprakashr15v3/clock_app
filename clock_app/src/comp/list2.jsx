import React from "react";

type list2Props = {
};
const list2 = (props: list2Props) => {
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label"></h3>

      <div data-testid="list2-element"></div>

      <input data-testid="list2-input" />
      <button data-testid="list2-btn-append-end">
      </button>
      <button data-testid="list2-btn-pop-start">
      </button>
      <button data-testid="list2-btn-clear">
      </button>
      <button data-testid="list2-btn-reset">
      </button>
    </div>
  );
};

export default list2;
