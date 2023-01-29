import "./styles.css";
import "./componenets/Navbar";
import React, { useState } from "react";

/*Exercise 6 done
var username = "tejas";
export default function App() {
  return (
    <>
      <h1>
        {" "}
        Welcome <span style={{ color: "Red" }}>{username}</span>
      </h1>
    </>
  );
}*/
/*Exercise 7 done
 var count = 0;
export default function App() {
  function likingcomment() {
    count = count + 1;
    console.log("Click", count);
  }
  return (
    <>
      <button onClick={likingcomment}>Like</button>
    </>
  );
}
*/
/*Exercise 8 done
export default function App() {
  const [count, setcount] = useState(1);

  function handler() {
    var counting = count + 1;
  setcount(counting)
  }

  return (
    <>
      <button onClick={handler}>Like</button> {count}
    </>
  );
}*/

/*Exercise 10 (through withouthooks)
export default function App() {
  function inputing(event) {
    console.log(event.target.value);
  }
  return (
    <>
      <label>tell something</label>
      <input onChange={inputing}></input>
    </>
  );
}
*/

/*Exercise 10 completed
export default function App(){
   const [inputing,setinputing] = useState("");

   function setting(event){

     setinputing(event.target.value);
   }

return (<>
<input onChange={setting}>
</input>
{inputing}</>)

}*/
/*Exercise 11
const dictionarymeaning = {
  "😘": "Love",
  "🥳": "Birthday",
  "🤣": "Laugh",
  "😊": "Smile",
  "😒": "Sad"
};
export default function App() {
  const [meaning, setmeaning] = useState("");
  const [inputted, setinputted] = useState("");

  function setting(event) {
    setinputted(event.target.value);
  }

  function emojimenaing(event) {
    var userinput = event.target.value;

    var meaning = dictionarymeaning[userinput];
    setmeaning(meaning);
  }
  return (
    <>
      <input
        onChange={(e) => {
          setting(e);
          emojimenaing(e);
        }}
      ></input>
      {inputted}
      {meaning}
    </>
  );
}*/

//Exefrcise 12 map and index
/*Map 1
var shoppinglist = ["milk", "banana", "orange", "apple", "salad", "oranges"];

export default function App() {
  return (
    <>
      <div>
        <h1> Print shopping list </h1>
        <ul>
          {shoppinglist.map(function (items) {
            return <li>{items}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
*/
/*
index 2


Excercise 12 :1 index , Conditional loops in reacr 
*/
/*
Only conditional logic implemented
var shoppinglist = ["milk", "banana", "orange", "apple", "salad", "oranges"];

var user = "tejas";
var userlogin = true;
export default function App() {
  function userdetail() {
    if (userlogin) {
      return <em>{user}</em>;
    }
    return "username";
  }

  return (
    <>
      <div>
        <h1> Print shopping list </h1>
        <h2>
          Welcome <span style={{ color: "red" }}>{userdetail()}</span>
        </h2>
        <ul>
          {shoppinglist.map(function (items) {
            return <li>{items}</li>;
          })}
        </ul>
      </div>
    </>
  );
}*/

//Index oprations
/*var shoppinglist = ["milk", "banana", "orange", "apple", "salad", "oranges"];

var user = "tejas";
var userlogin = true;
export default function App() {
  function userdetail() {
    if (userlogin) {
      return <em>{user}</em>;
    }
    return "username";
  }
  function getbg(index) {
    if (index % 2 === 0) {
      return "lightblue";
    }
    return "yellow";
  }

  function listHandeler(items) {
    console.log("clicked on :", items);
  }
  return (
    <>
      <div>
        <h1> Print shopping list </h1>
        <h2>
          Welcome <span style={{ color: "red" }}>{userdetail()}</span>
        </h2>
     
        <ul>
          {shoppinglist.map(function (items, index) {
            return (
              <li
                onClick={() => listHandeler(items)}
                key={index}
                style={{ backgroundColor: getbg(index) }}
              >
                {items}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}*/

const dictionarymeaning = {
  "😘": "Love",
  "🥳": "Birthday",
  "🤣": "Laugh",
  "😊": "Smile",
  "😒": "Sad"
};
export default function App() {
  const [meaning, setmeaning] = useState("");
  const [inputted, setinputted] = useState("");

  function setting(event) {
    setinputted(event.target.value);
  }

  function emojimenaing(event) {
    var userinput = event.target.value;

    var meaning = dictionarymeaning[userinput];

    if (meaning == undefined) {
      return "don't have this emoji yet";
    }
    setmeaning(meaning);
  }
  const emojiknown = Object.keys(dictionarymeaning);
  //  var objecttoarray = Object.keys(dictionarymeaning); {//objecttoarray}*/

  function emojiClicked(emoji) {
    var meaning = dictionarymeaning[emoji];

    setmeaning(meaning);
  }

  return (
    <>
      <h1> Print Meaning of emojis </h1>
      <input
        onChange={(e) => {
          setting(e);
          emojimenaing(e);
        }}
      ></input>
      <p>Meaning of this {inputted} is</p>
      <h3>{meaning}</h3>
      <h2>Total emojis</h2>
      {emojiknown.map((emoji) => (
        <span onClick={() => emojiClicked(emoji)} key={emoji}>
          {emoji}
        </span>
      ))}
    </>
  );
}
