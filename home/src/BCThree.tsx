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

const BCThree = () => {
  return (
    <BCContainer>
      <h1>BC Three</h1>
      <IconContainer>
        <svg aria-label="org icon" viewBox="0 0 24 24" role="img">
          <path d="M21 16.159v-2.184c0-1.654-1.346-3-3-3h-5v-3h6a1 1 0 001-1v-4a1 1 0 00-1-1H5a1 1 0 00-1 1v4a1 1 0 001 1h6v3H6c-1.654 0-3 1.346-3 3v2.184a2.996 2.996 0 00-2 2.816c0 1.654 1.346 3 3 3s3-1.346 3-3a2.996 2.996 0 00-2-2.816v-2.184c0-.551.449-1 1-1h5v3.184a2.996 2.996 0 00-2 2.816c0 1.654 1.346 3 3 3s3-1.346 3-3a2.996 2.996 0 00-2-2.816v-3.184h5c.552 0 1 .449 1 1v2.184a2.996 2.996 0 00-2 2.816c0 1.654 1.346 3 3 3s3-1.346 3-3a2.995 2.995 0 00-2-2.816zM6 3.975h12v2H6v-2zm-2 16a1.001 1.001 0 010-2 1.001 1.001 0 010 2zm8 0a1.001 1.001 0 010-2 1.001 1.001 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2z"></path>
        </svg>
      </IconContainer>
    </BCContainer>
  );
};

export default BCThree;
