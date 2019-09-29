import React, { useState } from "react";
import EnhancedTable from "../Table";
import Title from "../Title";
import Form from "../Form";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledNotFound = styled.div`
  display: flex;
  margin-top: 50%;
`;

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getWeather = async e => {
    try {
      e.preventDefault();
      const city = e.target.elements.city.value;
      setIsLoading(true);
      const apiCall = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIKEY}`
      );
      const response = await apiCall.json();
      if (response.cod !== 200) {
        setIsLoading(false);
      }
      setCity(city);
      setData(response.list);
      setIsLoading(false);
    } catch (error) {
      throw error;
    }
    setIsLoading(false);
  };
  return (
    <StyledContainer>
      <Title />
      <Form loadWeather={getWeather} />
      {isLoading ? (
        <StyledNotFound>
          <CircularProgress />
        </StyledNotFound>
      ) : data !== undefined ? (
        <EnhancedTable rows={data} city={city} />
      ) : (
        <StyledNotFound>City not found</StyledNotFound>
      )}
    </StyledContainer>
  );
}

export default App;
