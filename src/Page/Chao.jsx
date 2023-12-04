
// import React, { useState, useReducer } from 'react';

// const initialTodos = [
//     {
//         id: 1,
//         title: "Todo 1",
//         complete: false,
//     },
//     {
//         id: 2,
//         title: "Todo 2",
//         complete: false,
//     }

// ]

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "COMPLETE":
//             return state.map((check) => {
//                 if (check.id === action.id) {
//                     return { ...check, complete: !check.complete }
//                 } else {
//                     return check;
//                 }
//             })
//         default:
//             return state;
//     }
// }


// export default function Chao() {

//     const [todos, dispath] = useReducer(reducer, initialTodos);
//     const handleComplete = (check) => {
//         dispath({ type: "COMPLETE", id: check.id });

//     }
//     console.log(todos);

//     return (
//         <div>
//             {todos.map((check) => (
//                 <div key={check.id}>
//                     <input type="checkbox" checked={check.complete} onChange={() => handleComplete(check)} />
//                     {check.title}

//                 </div>
//             ))}
//         </div>
//     )
// }


import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'Taylor', age: 42 };

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
  }
  console.log(state);

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    }); 
  }

  return (
    <>
      <input
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Increment age
      </button>
      <p>Hello, {state.name}. You are {state.age}.</p>
    </>
  );
}

