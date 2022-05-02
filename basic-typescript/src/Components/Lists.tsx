import React from "react";
import List from "./List";

const Lists = () => {
  const names: string[] = ["John", "Mark", "Jane"];
  const onclickFunction = (name: string): void => alert(name);

  return (
    <div>
      <h1>This is Lists Componets</h1>
      <List names={names} onclickFunction={onclickFunction} />
    </div>
  );
};

export default Lists;

// interface Todo {
//     id: Number;
//     text: string;
//   }

//   type ActionType =
//     | { type: "ADD"; text: string }
//     | { type: "REMOVE"; id: number };

//   function reducer(state: Todo[], action: ActionType) {
//     switch (action.type) {
//       case "ADD":
//         return [
//           ...state,
//           {
//             id: state.length,
//             text: action.text,
//           },
//         ];
//       case "REMOVE":
//         return state.filter((todo) => todo.id !== action.id);
//     }
//   }

//   const [todos, dispatch] = useReducer(reducer, []);
//   const newTodoRef = useRef<HTMLInputElement>(null);
//   const addTodo = useCallback(() => {
//     if (newTodoRef.current) {
//       dispatch({ type: "ADD", text: newTodoRef.current.value });
//       newTodoRef.current.value = "";
//     }
//   }, []);
//   const removeTodo = useCallback((id: number) => {
//     dispatch({ type: "REMOVE", id: id });
//     console.log(id);
//   }, []);
