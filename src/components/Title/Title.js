import React from "react";
import styled from "styled-components";
import WeatherIcon from "../../assets/svgs/WeatherIcon";

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = ({ title }) => {
  return (
    <div>
      <StyledTitle>
        <WeatherIcon /> {title && "Weather"}
      </StyledTitle>
    </div>
  );
};
export default Title;
