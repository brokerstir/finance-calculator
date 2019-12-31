import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

	const [ personsState, setPersonsState ] = useState({
	  	persons: [
	  	    { name: 'Bob', age: 29 },
	  	    { name: 'Joe', age: 33 },
	  	    { name: 'Doug', age: 40 }
	  	],
	  	otherPerson: 'Fred'
	});

	const [otherState, setOtherState] = useState('foo bar');

	console.log(personsState, otherState)

	const switchNameHandler = () => {
		setPersonsState({
		  persons: [
		  	  { name: 'Hank', age: 33 },
		  	  { name: 'Tom', age: 25 },
		  	  { name: 'Doug', age: 40 }
			  ]
		});

		setOtherState(
		  'Hello, world!'
		);
	};

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
}

export default App;


