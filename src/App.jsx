import './App.css'
import Counter from "./components/Counter.jsx";
import Controls from "./components/Controls.jsx";
import ResetControl from "./components/ResetControl.jsx";
import Users from './components/Users.jsx';

function App() {

	return (
		<div className="App">
			<h1>React + Zustand</h1>
			<Controls />
			<ResetControl />
			<Counter />
			<br/>
			<Users />
		</div>
	)
}

export default App;
