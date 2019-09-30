import React from "react";
import styled from "styled-components";
import WeatherIcon from "../../assets/svgs/WeatherIcon";

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = () => {
  return (
    <div>
      <StyledTitle>
        Weather <WeatherIcon />
      </StyledTitle>
    </div>
  );
};
export default Title;
