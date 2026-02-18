import React from "react";
import Title from "../components/layout/Title";
import NewArrivalsGrid from "../components/layout/NewArrivalsGrid";

const NewArrivals = () => {
  return (
    <div>
      <Title
        title="New Collection"
        desc="Shopping is a bit of a relaxing hobby for me which is sometimes troubling"
      />
      <NewArrivalsGrid />
    </div>
  );
};

export default NewArrivals;
