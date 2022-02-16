import React from 'react';
import './App.css';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName: (name: string) => never;

// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: "Piyush",
// };

// let lostOfPeople: Person[];

// let personName: unknown;

interface Person extends X {
  name: string;
  age?: number;
}

type X = {
  a: string;
  b: number;
}

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
