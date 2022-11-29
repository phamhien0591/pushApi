// import React, { Component } from "react";
// import { createStore } from "redux";
// import App from "./App";
// import { Provider } from "react-redux";

// const defaultState = { value: 0 };
// const reducer = (state = defaultState, action) => {
//     if (action.type === 'UP') return { value: state.value + 1 }
//     if (action.type === 'DOWN') return { value: state.value - 1 }
//     return state;
// }
// import React, { Component } from "react";
import { createStore } from "redux";


const defaultState = { value: 10 };
const reducer = (state = defaultState, action) => {
  if (action.type === 'UP') return { value: state.value + 1 };
  if (action.type === 'DOWN') return { value: state.value - 1 };
  return state;
}
 const store = createStore(reducer);
// class Controll extends Component {
//     render() {
//         return <div>
       
//     </div> ;

//     }
// }
export default (store);