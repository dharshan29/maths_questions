import { MathJaxContext } from "better-react-mathjax";
import "./App.css";
import Display from "./Components/Display";

function App() {
	return (
		<MathJaxContext>
			<Display />
		</MathJaxContext>
	);
}

export default App;
