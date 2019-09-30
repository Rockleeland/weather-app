import React from "react";
import styled from "styled-components";

const StyledSVG = styled.svg`
  /*
** CLOUDS
*/
  @keyframes am-weather-cloud-1 {
    0% {
      -webkit-transform: translate(-5px, 0px);
      -moz-transform: translate(-5px, 0px);
      -ms-transform: translate(-5px, 0px);
      transform: translate(-5px, 0px);
    }

    50% {
      -webkit-transform: translate(10px, 0px);
      -moz-transform: translate(10px, 0px);
      -ms-transform: translate(10px, 0px);
      transform: translate(10px, 0px);
    }

    100% {
      -webkit-transform: translate(-5px, 0px);
      -moz-transform: translate(-5px, 0px);
      -ms-transform: translate(-5px, 0px);
      transform: translate(-5px, 0px);
    }
  }

  .am-weather-cloud-1 {
    -webkit-animation-name: am-weather-cloud-1;
    -moz-animation-name: am-weather-cloud-1;
    animation-name: am-weather-cloud-1;
    -webkit-animation-duration: 7s;
    -moz-animation-duration: 7s;
    animation-duration: 7s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  @keyframes am-weather-cloud-2 {
    0% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    50% {
      -webkit-transform: translate(2px, 0px);
      -moz-transform: translate(2px, 0px);
      -ms-transform: translate(2px, 0px);
      transform: translate(2px, 0px);
    }

    100% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
  }

  .am-weather-cloud-2 {
    -webkit-animation-name: am-weather-cloud-2;
    -moz-animation-name: am-weather-cloud-2;
    animation-name: am-weather-cloud-2;
    -webkit-animation-duration: 3s;
    -moz-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  /*
** STROKE
*/
  @keyframes am-weather-stroke {
    0% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    2% {
      -webkit-transform: translate(0.3px, 0px);
      -moz-transform: translate(0.3px, 0px);
      -ms-transform: translate(0.3px, 0px);
      transform: translate(0.3px, 0px);
    }

    4% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    6% {
      -webkit-transform: translate(0.5px, 0.4px);
      -moz-transform: translate(0.5px, 0.4px);
      -ms-transform: translate(0.5px, 0.4px);
      transform: translate(0.5px, 0.4px);
    }

    8% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    10% {
      -webkit-transform: translate(0.3px, 0px);
      -moz-transform: translate(0.3px, 0px);
      -ms-transform: translate(0.3px, 0px);
      transform: translate(0.3px, 0px);
    }

    12% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    14% {
      -webkit-transform: translate(0.3px, 0px);
      -moz-transform: translate(0.3px, 0px);
      -ms-transform: translate(0.3px, 0px);
      transform: translate(0.3px, 0px);
    }

    16% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    18% {
      -webkit-transform: translate(0.3px, 0px);
      -moz-transform: translate(0.3px, 0px);
      -ms-transform: translate(0.3px, 0px);
      transform: translate(0.3px, 0px);
    }

    20% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    22% {
      -webkit-transform: translate(1px, 0px);
      -moz-transform: translate(1px, 0px);
      -ms-transform: translate(1px, 0px);
      transform: translate(1px, 0px);
    }

    24% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    26% {
      -webkit-transform: translate(-1px, 0px);
      -moz-transform: translate(-1px, 0px);
      -ms-transform: translate(-1px, 0px);
      transform: translate(-1px, 0px);
    }

    28% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    40% {
      fill: orange;
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    65% {
      fill: white;
      -webkit-transform: translate(-1px, 5px);
      -moz-transform: translate(-1px, 5px);
      -ms-transform: translate(-1px, 5px);
      transform: translate(-1px, 5px);
    }

    61% {
      fill: orange;
    }

    100% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
  }

  .am-weather-stroke {
    -webkit-animation-name: am-weather-stroke;
    -moz-animation-name: am-weather-stroke;
    animation-name: am-weather-stroke;
    -webkit-animation-duration: 1.11s;
    -moz-animation-duration: 1.11s;
    animation-duration: 1.11s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  /*
** SUN
*/
  @keyframes am-weather-sun {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .am-weather-sun {
    -webkit-animation-name: am-weather-sun;
    -moz-animation-name: am-weather-sun;
    -ms-animation-name: am-weather-sun;
    animation-name: am-weather-sun;
    -webkit-animation-duration: 9s;
    -moz-animation-duration: 9s;
    -ms-animation-duration: 9s;
    animation-duration: 9s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  @keyframes am-weather-sun-shiny {
    0% {
      stroke-dasharray: 3px 10px;
      stroke-dashoffset: 0px;
    }

    50% {
      stroke-dasharray: 0.1px 10px;
      stroke-dashoffset: -1px;
    }

    100% {
      stroke-dasharray: 3px 10px;
      stroke-dashoffset: 0px;
    }
  }

  .am-weather-sun-shiny line {
    -webkit-animation-name: am-weather-sun-shiny;
    -moz-animation-name: am-weather-sun-shiny;
    -ms-animation-name: am-weather-sun-shiny;
    animation-name: am-weather-sun-shiny;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -ms-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  /*
** MOON
*/
  @keyframes am-weather-moon {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    50% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    100% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  .am-weather-moon {
    -webkit-animation-name: am-weather-moon;
    -moz-animation-name: am-weather-moon;
    -ms-animation-name: am-weather-moon;
    animation-name: am-weather-moon;
    -webkit-animation-duration: 6s;
    -moz-animation-duration: 6s;
    -ms-animation-duration: 6s;
    animation-duration: 6s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-transform-origin: 12.5px 15.15px 0;
    /* TODO FF CENTER ISSUE */
    -moz-transform-origin: 12.5px 15.15px 0;
    /* TODO FF CENTER ISSUE */
    -ms-transform-origin: 12.5px 15.15px 0;
    /* TODO FF CENTER ISSUE */
    transform-origin: 12.5px 15.15px 0;
    /* TODO FF CENTER ISSUE */
  }

  @keyframes am-weather-moon-star-1 {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .am-weather-moon-star-1 {
    -webkit-animation-name: am-weather-moon-star-1;
    -moz-animation-name: am-weather-moon-star-1;
    -ms-animation-name: am-weather-moon-star-1;
    animation-name: am-weather-moon-star-1;
    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;
    -ms-animation-delay: 3s;
    animation-delay: 3s;
    -webkit-animation-duration: 5s;
    -moz-animation-duration: 5s;
    -ms-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -ms-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  @keyframes am-weather-moon-star-2 {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .am-weather-moon-star-2 {
    -webkit-animation-name: am-weather-moon-star-2;
    -moz-animation-name: am-weather-moon-star-2;
    -ms-animation-name: am-weather-moon-star-2;
    animation-name: am-weather-moon-star-2;
    -webkit-animation-delay: 5s;
    -moz-animation-delay: 5s;
    -ms-animation-delay: 5s;
    animation-delay: 5s;
    -webkit-animation-duration: 4s;
    -moz-animation-duration: 4s;
    -ms-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -ms-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  /*
** RAIN
*/
  @keyframes am-weather-rain {
    0% {
      stroke-dashoffset: 0;
    }

    100% {
      stroke-dashoffset: -100;
    }
  }

  .am-weather-rain-1 {
    -webkit-animation-name: am-weather-rain;
    -moz-animation-name: am-weather-rain;
    -ms-animation-name: am-weather-rain;
    animation-name: am-weather-rain;
    -webkit-animation-duration: 8s;
    -moz-animation-duration: 8s;
    -ms-animation-duration: 8s;
    animation-duration: 8s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .am-weather-rain-2 {
    -webkit-animation-name: am-weather-rain;
    -moz-animation-name: am-weather-rain;
    -ms-animation-name: am-weather-rain;
    animation-name: am-weather-rain;
    -webkit-animation-delay: 0.25s;
    -moz-animation-delay: 0.25s;
    -ms-animation-delay: 0.25s;
    animation-delay: 0.25s;
    -webkit-animation-duration: 8s;
    -moz-animation-duration: 8s;
    -ms-animation-duration: 8s;
    animation-duration: 8s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  /*
** SNOW
*/
  @keyframes am-weather-snow {
    0% {
      -webkit-transform: translateX(0) translateY(0);
      -moz-transform: translateX(0) translateY(0);
      -ms-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }

    33.33% {
      -webkit-transform: translateX(-1.2px) translateY(2px);
      -moz-transform: translateX(-1.2px) translateY(2px);
      -ms-transform: translateX(-1.2px) translateY(2px);
      transform: translateX(-1.2px) translateY(2px);
    }

    66.66% {
      -webkit-transform: translateX(1.4px) translateY(4px);
      -moz-transform: translateX(1.4px) translateY(4px);
      -ms-transform: translateX(1.4px) translateY(4px);
      transform: translateX(1.4px) translateY(4px);
      opacity: 1;
    }

    100% {
      -webkit-transform: translateX(-1.6px) translateY(6px);
      -moz-transform: translateX(-1.6px) translateY(6px);
      -ms-transform: translateX(-1.6px) translateY(6px);
      transform: translateX(-1.6px) translateY(6px);
      opacity: 0;
    }
  }

  @keyframes am-weather-snow-reverse {
    0% {
      -webkit-transform: translateX(0) translateY(0);
      -moz-transform: translateX(0) translateY(0);
      -ms-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }

    33.33% {
      -webkit-transform: translateX(1.2px) translateY(2px);
      -moz-transform: translateX(1.2px) translateY(2px);
      -ms-transform: translateX(1.2px) translateY(2px);
      transform: translateX(1.2px) translateY(2px);
    }

    66.66% {
      -webkit-transform: translateX(-1.4px) translateY(4px);
      -moz-transform: translateX(-1.4px) translateY(4px);
      -ms-transform: translateX(-1.4px) translateY(4px);
      transform: translateX(-1.4px) translateY(4px);
      opacity: 1;
    }

    100% {
      -webkit-transform: translateX(1.6px) translateY(6px);
      -moz-transform: translateX(1.6px) translateY(6px);
      -ms-transform: translateX(1.6px) translateY(6px);
      transform: translateX(1.6px) translateY(6px);
      opacity: 0;
    }
  }

  .am-weather-snow-1 {
    -webkit-animation-name: am-weather-snow;
    -moz-animation-name: am-weather-snow;
    -ms-animation-name: am-weather-snow;
    animation-name: am-weather-snow;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -ms-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .am-weather-snow-2 {
    -webkit-animation-name: am-weather-snow;
    -moz-animation-name: am-weather-snow;
    -ms-animation-name: am-weather-snow;
    animation-name: am-weather-snow;
    -webkit-animation-delay: 1.2s;
    -moz-animation-delay: 1.2s;
    -ms-animation-delay: 1.2s;
    animation-delay: 1.2s;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -ms-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .am-weather-snow-3 {
    -webkit-animation-name: am-weather-snow-reverse;
    -moz-animation-name: am-weather-snow-reverse;
    -ms-animation-name: am-weather-snow-reverse;
    animation-name: am-weather-snow-reverse;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -ms-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  /*
** EASING
*/
  .am-weather-easing-ease-in-out {
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    -ms-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
`;

const WeatherIcon = () => {
  return (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <path
        className="0"
        fill="#91C0F8"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="0.72"
        d="M18.62 15.24c0-2.76-2.22-4.92-4.92-4.92-.6 0-1.14.12-1.68.3-.18-2.04-1.86-3.72-3.96-3.72a4.02 4.02 0 00-4.02 4.02c0 .48.12.96.24 1.38-.18-.06-.42-.06-.6-.06a4.02 4.02 0 00-4.02 4.02c0 2.16 1.74 3.96 3.9 4.02h10.32c2.64-.3 4.74-2.4 4.74-5.04z"
        transform="translate(20 10)"
      />
      <path
        fill="#57A0EE"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        transform="translate(20 10)"
      />
      <path
        fill="orange"
        stroke="#fff"
        d="M14.3 -2.9L20.5 -2.9 16.4 4.3 20.3 4.3 11.5 14.6 14.9 6.9 11.1 6.9z"
        className="am-weather-stroke"
        transform="translate(20 10) matrix(1.2 0 0 1.2 -9 28)"
      />
      <g transform="translate(32 32)">
        <g className="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(45) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(90) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(135) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(180) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(225) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(270) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(315) translate(0 9)"
          />
        </g>
        <circle r="5" fill="orange" stroke="orange" strokeWidth="2" />
      </g>
      <path
        className="0"
        fill="orange"
        strokeMiterlimit="10"
        d="M3.3 1.5L4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7z"
        transform="translate(20 20)"
      />
      <path
        className="0"
        fill="orange"
        strokeMiterlimit="10"
        d="M3.3 1.5L4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7z"
        transform="translate(20 20) translate(20 10)"
      />
      <path
        className="0"
        fill="orange"
        stroke="orange"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-.5 5-1.3-3-1.7-5-5-5-8.7z"
        transform="translate(20 20)"
      />
      <g transform="translate(20 10) translate(0 16)">
        <g className="am-weather-sun">
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(45) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(90) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(135) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(180) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(225) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(270) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(315) translate(0 9)"
          />
        </g>
        <circle r="5" fill="orange" stroke="orange" strokeWidth="2" />
      </g>
      <path
        className="0"
        fill="#C6DEFF"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        transform="translate(20 10)"
      />
      <path
        className="0"
        fill="orange"
        strokeMiterlimit="10"
        d="M3.3 1.5L4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7z"
        transform="translate(20 10) matrix(.8 0 0 .8 16 4)"
      />
      <path
        className="0"
        fill="orange"
        strokeMiterlimit="10"
        d="M3.3 1.5L4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7z"
        transform="translate(20 10) matrix(.8 0 0 .8 16 4) translate(20 10)"
      />
      <path
        className="0"
        fill="orange"
        stroke="orange"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-.5 5-1.3-3-1.7-5-5-5-8.7z"
        transform="translate(20 10) matrix(.8 0 0 .8 16 4)"
      />
      <path
        className="0"
        fill="#C6DEFF"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        transform="translate(20 10)"
      />
      <g transform="translate(20 10) translate(0 16)">
        <g className="am-weather-sun">
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(45) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(90) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(135) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(180) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(225) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(270) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(315) translate(0 9)"
          />
        </g>
        <circle r="5" fill="orange" stroke="orange" strokeWidth="2" />
      </g>
      <path
        className="0"
        fill="#91C0F8"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        transform="translate(20 10)"
      />
      <path
        className="0"
        fill="orange"
        strokeMiterlimit="10"
        d="M3.3 1.5L4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7z"
        transform="translate(20 10) matrix(.8 0 0 .8 16 4)"
      />
      <path
        className="0"
        fill="orange"
        strokeMiterlimit="10"
        d="M3.3 1.5L4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7z"
        transform="translate(20 10) matrix(.8 0 0 .8 16 4) translate(20 10)"
      />
      <path
        className="0"
        fill="orange"
        stroke="orange"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-.5 5-1.3-3-1.7-5-5-5-8.7z"
        transform="translate(20 10) matrix(.8 0 0 .8 16 4)"
      />
      <path
        className="0"
        fill="#91C0F8"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        transform="translate(20 10)"
      />
      <g transform="translate(20 10) translate(0 16)">
        <g className="am-weather-sun">
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(45) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(90) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(135) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(180) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(225) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(270) translate(0 9)"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 3"
            transform="rotate(315) translate(0 9)"
          />
        </g>
        <circle r="5" fill="orange" stroke="orange" strokeWidth="2" />
      </g>
      <path
        className="0"
        fill="#57A0EE"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        transform="translate(20 10)"
      />
      <path
        className="0"
        fill="orange"
        strokeMiterlimit="10"
        d="M3.3 1.5L4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7z"
        transform="translate(20 10) matrix(.8 0 0 .8 16 4)"
      />
      <path
        className="0"
        fill="orange"
        strokeMiterlimit="10"
        d="M3.3 1.5L4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7z"
        transform="translate(20 10) matrix(.8 0 0 .8 16 4) translate(20 10)"
      />
      <path
        className="0"
        fill="orange"
        stroke="orange"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-.5 5-1.3-3-1.7-5-5-5-8.7z"
        transform="translate(20 10) matrix(.8 0 0 .8 16 4)"
      />
      <g className="am-weather-cloud-2">
        <path
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
      </g>
      <g>
        <path
          className="0"
          fill="#91C0F8"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="0.72"
          d="M18.62 13.24c0-2.76-2.22-4.92-4.92-4.92-.6 0-1.14.12-1.68.3-.18-2.04-1.86-3.72-3.96-3.72a4.02 4.02 0 00-4.02 4.02c0 .48.12.96.24 1.38-.18-.06-.42-.06-.6-.06a4.02 4.02 0 00-4.02 4.02c0 2.16 1.74 3.96 3.9 4.02h10.32c2.64-.3 4.74-2.4 4.74-5.04z"
          transform="translate(20 10)"
        />
        <path
          className="0"
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
      </g>
      <g>
        <g transform="translate(20 10) matrix(1.2 0 0 1.2 0 16)">
          <g className="am-weather-sun">
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(45) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(90) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(135) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(180) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(225) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(270) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(315) translate(0 9)"
            />
          </g>
          <circle r="5" fill="orange" stroke="orange" strokeWidth="2" />
        </g>
        <path
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.275"
          d="M25.545 25.09c0-3.91-3.145-6.97-6.97-6.97-.85 0-1.615.17-2.38.425-.255-2.89-2.635-5.27-5.61-5.27A5.695 5.695 0 004.89 18.97c0 .68.17 1.36.34 1.955-.255-.085-.595-.085-.85-.085a5.695 5.695 0 00-5.695 5.695c0 3.06 2.465 5.61 5.525 5.695h14.62c3.74-.425 6.715-3.4 6.715-7.14z"
          transform="translate(20 10)"
        />
        <g transform="rotate(10 -245.891 217.31)">
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-1"
            transform="translate(-6 1)"
          />
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-2"
            transform="translate(0 -1)"
          />
        </g>
      </g>
      <g>
        <g transform="translate(20 10) translate(0 16)">
          <g className="am-weather-sun">
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(45) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(90) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(135) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(180) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(225) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(270) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(315) translate(0 9)"
            />
          </g>
          <circle r="5" fill="orange" stroke="orange" strokeWidth="2" />
        </g>
        <path
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
        <g transform="rotate(10 -238.676 233.956)">
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-1"
            transform="translate(-6 1)"
          />
        </g>
      </g>
      <g>
        <g transform="translate(20 10) translate(0 16)">
          <g className="am-weather-sun">
            <path
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(45) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(90) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(135) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(180) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(225) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(270) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(315) translate(0 9)"
            />
          </g>
          <circle r="5" fill="orange" stroke="orange" strokeWidth="2" />
        </g>
        <path
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
        <g transform="rotate(10 -245.891 217.31)">
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-1"
            transform="translate(-6 1)"
          />
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-2"
            transform="translate(0 -1)"
          />
        </g>
      </g>
      <g>
        <path
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
        <path
          fill="none"
          stroke="#91C0F8"
          strokeDasharray="4,7"
          strokeLinecap="round"
          strokeWidth="2"
          d="M0 0L0 8"
          className="am-weather-rain-1"
          transform="rotate(10 -238.676 233.956) translate(-6 1)"
        />
      </g>
      <g>
        <path
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
        <g transform="rotate(10 -245.891 217.31)">
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-1"
            transform="translate(-6 1)"
          />
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-2"
            transform="translate(0 -1)"
          />
        </g>
      </g>
      <g>
        <path
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
        <g transform="rotate(10 -247.391 200.166)">
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,4"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-1"
            transform="translate(-4 1)"
          />
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,4"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-2"
            transform="translate(0 -1)"
          />
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,4"
            strokeLinecap="round"
            strokeWidth="2"
            d="M0 0L0 8"
            className="am-weather-rain-1"
            transform="translate(4)"
          />
        </g>
      </g>
      <g>
        <path
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
        <g transform="rotate(10 -247.391 200.166)">
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="0.1,7"
            strokeLinecap="round"
            strokeWidth="3"
            d="M0 0L0 8"
            className="am-weather-rain-1"
            transform="translate(-5 1)"
          />
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="0.1,7"
            strokeLinecap="round"
            strokeWidth="3"
            d="M0 0L0 8"
            className="am-weather-rain-2"
            transform="translate(0 -1)"
          />
          <path
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="0.1,7"
            strokeLinecap="round"
            strokeWidth="3"
            d="M0 0L0 8"
            className="am-weather-rain-1"
            transform="translate(5)"
          />
        </g>
      </g>
      <g>
        <g transform="translate(20 10) matrix(1.2 0 0 1.2 0 16)">
          <g className="am-weather-sun">
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(45) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(90) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(135) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(180) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(225) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(270) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(315) translate(0 9)"
            />
          </g>
          <circle r="5" fill="orange" stroke="orange" strokeWidth="2" />
        </g>
        <path
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.275"
          d="M25.545 25.09c0-3.91-3.145-6.97-6.97-6.97-.85 0-1.615.17-2.38.425-.255-2.89-2.635-5.27-5.61-5.27A5.695 5.695 0 004.89 18.97c0 .68.17 1.36.34 1.955-.255-.085-.595-.085-.85-.085a5.695 5.695 0 00-5.695 5.695c0 3.06 2.465 5.61 5.525 5.695h14.62c3.74-.425 6.715-3.4 6.715-7.14z"
          transform="translate(20 10)"
        />
        <g>
          <g
            className="0"
            fill="none"
            stroke="#57A0EE"
            strokeLinecap="round"
            transform="translate(20 9) translate(7 28)"
          >
            <path
              strokeWidth="1.2"
              d="M0 -2.5L0 2.5"
              transform="translate(0 9)"
            />
            <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
            <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
            <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
          </g>
          <g
            className="0"
            fill="none"
            stroke="#57A0EE"
            strokeLinecap="round"
            transform="translate(20 9) translate(16 28)"
          >
            <path
              strokeWidth="1.2"
              d="M0 -2.5L0 2.5"
              transform="translate(0 9)"
            />
            <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
            <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
            <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
          </g>
        </g>
      </g>
      <g>
        <g transform="translate(20 10) translate(0 16)">
          <g className="am-weather-sun">
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(45) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(90) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(135) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(180) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(225) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(270) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(315) translate(0 9)"
            />
          </g>
          <circle r="5" fill="orange" stroke="orange" strokeWidth="2" />
        </g>
        <path
          className="0"
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
        <g className="am-weather-snow-1">
          <g
            fill="none"
            stroke="#57A0EE"
            strokeLinecap="round"
            transform="translate(32 38)"
          >
            <path
              strokeWidth="1.2"
              d="M0 -2.5L0 2.5"
              transform="translate(0 9)"
            />
            <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
            <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
            <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
          </g>
        </g>
      </g>
      <g>
        <g transform="translate(20 10) translate(0 16)">
          <g className="am-weather-sun">
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(45) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(90) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(135) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(180) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(225) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(270) translate(0 9)"
            />
            <path
              fill="none"
              stroke="orange"
              strokeLinecap="round"
              strokeWidth="2"
              d="M0 0L0 3"
              transform="rotate(315) translate(0 9)"
            />
          </g>
          <circle r="5" fill="orange" stroke="orange" strokeWidth="2" />
        </g>
        <path
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
        <g
          className="0"
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="translate(20 10) translate(7 28)"
        >
          <path
            strokeWidth="1.2"
            d="M0 -2.5L0 2.5"
            transform="translate(0 9)"
          />
          <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
        </g>
        <g
          className="0"
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="translate(20 10) translate(16 28)"
        >
          <path
            strokeWidth="1.2"
            d="M0 -2.5L0 2.5"
            transform="translate(0 9)"
          />
          <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
        </g>
      </g>
      <g>
        <path
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
        <g
          className="0"
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="translate(20 10) translate(11 28)"
        >
          <path
            strokeWidth="1.2"
            d="M0 -2.5L0 2.5"
            transform="translate(0 9)"
          />
          <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
        </g>
      </g>
      <g>
        <path
          className="0"
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
        <g
          className="0"
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="translate(20 10) translate(7 28)"
        >
          <path
            strokeWidth="1.2"
            d="M0 -2.5L0 2.5"
            transform="translate(0 9)"
          />
          <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
        </g>
        <g
          className="0"
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="translate(20 10) translate(16 28)"
        >
          <path
            strokeWidth="1.2"
            d="M0 -2.5L0 2.5"
            transform="translate(0 9)"
          />
          <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
        </g>
      </g>
      <g>
        <path
          className="0"
          fill="#57A0EE"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M27.7 24.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
          transform="translate(20 10)"
        />
        <g
          className="0"
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="translate(20 10) translate(3 28)"
        >
          <path
            strokeWidth="1.2"
            d="M0 -2.5L0 2.5"
            transform="translate(0 9)"
          />
          <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
        </g>
        <g
          className="0"
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="translate(20 10) translate(11 28)"
        >
          <path
            strokeWidth="1.2"
            d="M0 -2.5L0 2.5"
            transform="translate(0 9)"
          />
          <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
        </g>
        <g
          className="0"
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="translate(20 10) translate(20 28)"
        >
          <path
            strokeWidth="1.2"
            d="M0 -2.5L0 2.5"
            transform="translate(0 9)"
          />
          <path d="M0 -2.5L0 2.5" transform="rotate(45 -10.864 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(90 -4.5 4.5)" />
          <path d="M0 -2.5L0 2.5" transform="rotate(135 -1.864 4.5)" />
        </g>
      </g>
    </StyledSVG>
  );
};

export default WeatherIcon;
