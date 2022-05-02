import React, { useCallback, useReducer, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lists from "./Components/Lists";

function App() {
  interface Todo {
    id: Number;
    text: string;
    name: string;
  }

  type ActionType =
    | { type: "ADD"; name: string; text: string }
    | { type: "REMOVE"; id: number };

  function reducer(state: Todo[], action: ActionType) {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            name: action.name,
            text: action.text,
          },
        ];
      case "REMOVE":
        return state.filter((data) => data.id !== action?.id);
    }
  }

  const [todo, dispatch] = useReducer(reducer, []);
  const addRefValue = useRef<HTMLInputElement>(null);
  const addText = useRef<HTMLInputElement>(null);

  const addToDo = useCallback(() => {
    if (addRefValue?.current && addText.current) {
      dispatch({
        type: "ADD",
        name: addRefValue.current.value,
        text: addText.current.value,
      });
      addRefValue.current.value = "";
      addText.current.value = "";
    }
  }, []);
  const handleRemove = (id: number): void => {
    dispatch({ type: "REMOVE", id: id });
  };
  return (
    <div className="App">
      {/* <Lists /> */}

      <input type="text" placeholder="add Name" ref={addRefValue} />
      <input type="text" placeholder="Add Text" ref={addText} />
      <button onClick={addToDo}>Add</button>

      {todo.map((data, index) => (
        <div key={index}>
          <p> Name : {data?.name}</p>
          <p>Text : {data?.text}</p>
          <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;
