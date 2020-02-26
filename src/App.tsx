import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TextField} from './TextField'
import {Counter} from './Counter'
import {numArray, strArray, Person, personArray} from './Types'

function App() {
  const [nums, setNums] = useState<numArray>([2])
  const [moreNums, setMoreNums] = useState<Array<number>>([])
  const [strings, setStrings] = useState<strArray>([''])
  const [person, setPerson] = useState<Person>({firstName: 'test', lastName: 'person'})
  const [people, setPeople] = useState<personArray>([person])
  setPerson({firstName: 'test 2', lastName: 'person 2'})

  setStrings(['test', 'test 2'])
  setNums([2, 3, 4])
  return (
    <div className="App">
      <Counter>
        {(count, setCount) => (
        <div>
          {count}
          <button onClick = {() => setCount(count + 1)}>+</button>
        </div>)}
      </Counter>
      <TextField text='awef' obj={{person: {firstName: 'test', lastName: 'person'}}}/>
    </div>
  );
}

export default App;



const last = (arr: Array<any>) => {
  return arr[arr.length - 1]
}

const l = last([1, 2, 3])