import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Time = () => {
  const time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);

  setInterval(() => {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  }, 1000);
  return (
    <Wrapper>
      <h1>{currentTime}</h1>
    </Wrapper>
  );
};

export default Time;

const Wrapper = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  align-items: center;
`;
