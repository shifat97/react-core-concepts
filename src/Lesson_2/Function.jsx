import './App.css'

function App() {
	
	function handleClick() {
		alert('Button clicked');
	}

	const add = number => {
		alert(number + 5);
	}

	return (
		<div>
			<h1>React Core Concepts</h1>
			<button onClick={handleClick}>Click Me</button>
			<button onClick={() => {alert('Click on button 2')}}>Click Me 2</button>
			<button onClick={() => add(10)}>Click Me 3</button>
		</div>
	)
}

export default App;
