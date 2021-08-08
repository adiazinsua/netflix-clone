import React from "react";
import { useContent } from "../hooks/index";

const Browse = () => {
  const { series } = useContent("series");
  const { films } = useContent("films");

  return (
    <div>
      <p>Hello from the browse!</p>
    </div>
  );
};

export default Browse;
