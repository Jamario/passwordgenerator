import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1 className="theme-heading-lg">Heading 1</h1>
            <p className="read-the-docs">Hello World!</p>
        </div>
    );
}

export default App;
