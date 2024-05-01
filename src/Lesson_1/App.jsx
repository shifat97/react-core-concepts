// import Actor from './Actor';
import './App.css'
import Singer from './Lesson_1/Singer';
import Todo from './Lesson_1/Todo'

function App() {
	// const actors = ['John Snow', 'Donal Trump', 'Joe Biden'];
	const singers = [
		{id: 1, name: "Singer 1", age: 40},
		{id: 2, name: 'Singer 2', age: 30},
		{id: 3, name: 'Singer 3', age: 25},
		{id: 4, name: 'Singer 4', age: 55},
		{id: 5, name: 'Singer 5', age: 34},
	]
	return (
		<>
			{
				singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
			}
			{/* {
				actors.map(actor => <Actor key={'x'} name={actor}></Actor>)
			} */}
			<Todo task='Learn React' isDone={true}></Todo>
			<Todo task='Explore NextJS' isDone={false}></Todo>
			<Todo task='Deep dive into backend development' isDone={true}></Todo>
			<Device name="Desktop" price="50000"></Device>
			<Device name="Laptop" price="40000"></Device>
			<Device name="MacBook" price="90000"></Device>
			<Person></Person>
			<Student></Student>
			<Developer></Developer>
		</>
	)
}

// Person Component
function Person() {
	const person = {
		name: 'John Snow',
		age: 25
	}

	return <h1>I am {person.name} with age {person.age}</h1>
}

// Student Component
function Student() {
	const student = {
		name: 'Donal Trump',
		age: 30,
		university: 'Stamford University'
	}

	return (
		<div>
			<h2>Student Name: {student.name}</h2>
			<h3>Student Age: {student.age}</h3>
			<h4>Graduated from {student.university}</h4>
		</div>
	)
}

// Developer Component
function Developer() {
	const developerStyle = {
		margin: '20px',
		padding: '20px',
		border: '2px solid purple',
		borderRadius: '5px'
	}

	return (
		<div style={developerStyle}>
			<h2>Hello React Developers!!</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo possimus iure obcaecati veritatis! Doloribus id dignissimos praesentium? Quibusdam, pariatur.</p>
		</div>
	)
}

function Device(props) {
	return <h2>This device: {props.name}, Price: {props.price}</h2>
}

export default App;
