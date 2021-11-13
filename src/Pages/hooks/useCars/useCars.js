import { useEffect, useState } from "react";

const useCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://murmuring-peak-37821.herokuapp.com/allCars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return { cars };
};

export default useCars;
