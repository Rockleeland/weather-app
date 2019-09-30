import React, { useState } from "react";
import EnhancedTable from "../Table";
import Title from "../Title";
import Form from "../Form";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import axios from "axios";

const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledNotFound = styled.div`
  display: flex;
  margin-top: 25%;
  justify-content: center;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const WeatherApp = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    setCity(city);
    try {
      setIsLoading(true);
      setError(false);
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIKEY}`;
      const response = await axios.get(url);
      if (response.data !== 200) {
        setIsLoading(false);
      }

      setData(response.data.list);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setData(null);
      setIsLoading(false);
      setError(true);
    }
  };

  return (
    <StyledContainer>
      <Title />
      <Form loadWeather={getWeather} />
      {error && (
        <StyledNotFound>
          Sorry, we couldn't find any results for {city}. Please Search again.
        </StyledNotFound>
      )}
      {isLoading ? (
        <StyledNotFound>
          <CircularProgress />
        </StyledNotFound>
      ) : (
        data !== undefined && <EnhancedTable rows={data} city={city} />
      )}
    </StyledContainer>
  );
};

export default WeatherApp;
