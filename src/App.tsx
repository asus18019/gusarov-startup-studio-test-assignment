import './App.css';
import { useState } from 'react';
import InputGroup from './components/ui/input-group.tsx';

function App() {
	const [value, setValue] = useState<string>("");

	return (
		<div className="min-h-screen flex justify-center items-center">
			<InputGroup id="#address" labelText="Email" value={ value } onChange={ setValue } placeholder="Address" annotationText="Please enter your real address." />
		</div>
	);
}

export default App;
