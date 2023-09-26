import React from "react";

export const ActualList = ({ items }) => {
  console.log({ items });
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index} >{item}</li>
        ))}
      </ul>
    </>
  );
};
