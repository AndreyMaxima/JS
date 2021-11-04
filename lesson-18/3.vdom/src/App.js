import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [arr, setArr] = useState([1,2,3,4,5,6,7])
  return (
    //-----------------------------Изменяется весь список при вставке элемента в начало-------------------------------------------------------

    // <div className="App">
    //   <header className="App-header">
    //     <ul>
    //       {arr.map((elem, index) => <li>{elem}</li>)}
    //     </ul>
    //     <button onClick={()=>setArr([arr.length, ...arr])}>Click</button>
    //   </header>
    // </div>

    //-----------------------------Изменяется весь список при вставке элемента в начало-------------------------------------------------------
    // <div className="App">
    //   <header className="App-header">
    //     <ul>
    //       {arr.map((elem, index) => <li key={index}>{elem}</li>)}
    //     </ul>
    //     <button onClick={()=>setArr([arr.length, ...arr])}>Click</button>
    //   </header>
    // </div>
    <div className="App">
      <header className="App-header">
        <ul>
          {arr.map((elem) => <li key={elem}>{elem}</li>)}
        </ul>
        <button onClick={()=>setArr([arr.length+1, ...arr])}>Click</button>
      </header>
    </div>
  );
}

export default App;



//-----------Примерный virtual DOM-------------------------------
// const vdom = {
//   tagName: "html",
//   attributes: {
//     "lang": "en"
//   },
//   children: [
//     { tagName: "head" },
//     {
//       tagName: "body",
//       children: [
//         {
//           tagName: "ul",
//           attributes: { "class": "list" },
//           children: [
//             {
//               tagName: "li",
//               attributes: { "class": "list__item" },
//               textContent: "List item"
//             } // end li
//           ]
//         } // end ul
//       ]
//     } // end body
//   ]
// } // end html
