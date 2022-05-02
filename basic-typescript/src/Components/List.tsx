import React from "react";

const List = ({
  names,
  onclickFunction,
}: {
  names: string[];
  onclickFunction: (name: string) => void;
}) => {
  return (
    <div>
      {/* {names.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))} */}
      {names.map((name, index) => (
        <li key={index} onClick={() => onclickFunction(name)}>
          {name}
        </li>
      ))}
    </div>
  );
};

export default List;
