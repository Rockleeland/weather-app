import React from "react";
import PartlyCloudyIcon from "../../assets/svgs/PartlyCloudyIcon";
import CloudyIcon from "../../assets/svgs/CloudyIcon";
import RainyIcon from "../../assets/svgs/RainyIcon";
import SunnyIcon from "../../assets/svgs/SunnyIcon";
import SnowIcon from "../../assets/svgs/SnowIcon";
import ThunderIcon from "../../assets/svgs/ThunderIcon";

export const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
};

export const getSorting = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
};

export const descriptionsToIcons = des => {
  switch (des) {
    case "Clouds":
      return <CloudyIcon />;
    case "Rain":
      return <RainyIcon />;
    case "Clear":
      return <SunnyIcon />;
    case "Snow":
      return <SnowIcon />;
    case "Thunder":
      return <ThunderIcon />;
    default:
      return <PartlyCloudyIcon />;
  }
};
