import React from "react";
import styled from "styled-components";

const BCContainer = styled.div`
  height: 100%;
`;

const IconContainer = styled.div`
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: white;
    height: 50%;
    width: 50%;
  }
`;

const BCTwo = () => {
  return (
    <BCContainer>
      <h1>BC Two</h1>
      <IconContainer>
        <svg aria-label="gear icon" viewBox="0 0 24 24" role="img">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12c0-.377.026-.748.077-1.111L2.274 9.848a.5.5 0 01-.183-.683l2.5-4.33a.5.5 0 01.683-.183l1.804 1.041A7.988 7.988 0 019 4.581V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v2.082a7.99 7.99 0 011.922 1.112l1.805-1.042a.5.5 0 01.683.183l2.5 4.33a.5.5 0 01-.183.683l-1.804 1.042a8.063 8.063 0 010 2.22l1.804 1.042a.5.5 0 01.183.683l-2.5 4.33a.5.5 0 01-.683.183l-1.805-1.042A7.992 7.992 0 0115 19.418V21.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-2.081a7.985 7.985 0 01-1.923-1.112l-1.804 1.041a.5.5 0 01-.683-.183l-2.5-4.33a.5.5 0 01.183-.683l1.803-1.04A8.077 8.077 0 014 12zm9-8h-2v2.083a5.994 5.994 0 00-3.623 2.092L5.573 7.133l-1 1.732 1.803 1.04A5.986 5.986 0 006 12c0 .736.132 1.44.375 2.092l-1.803 1.041 1 1.732 1.804-1.041A5.993 5.993 0 0011 17.917V20h2v-2.083a5.994 5.994 0 003.625-2.094l1.805 1.042 1-1.732-1.805-1.042A5.987 5.987 0 0018 12a5.99 5.99 0 00-.375-2.093l1.804-1.042-1-1.732-1.806 1.042A5.994 5.994 0 0013 6.083V4zm-5 8a4 4 0 108 0 4 4 0 00-8 0zm4 2a2 2 0 100-4 2 2 0 000 4z"
          ></path>
        </svg>
      </IconContainer>
    </BCContainer>
  );
};

export default BCTwo;
