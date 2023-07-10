import './App.css'
import useCount from "./hooks/useCount.js";
import {Count1} from "./components/Count1.jsx";
import {Count2} from "./components/Count2.jsx";
function App() {
    const [count,increase] = useCount()
    return (
        <>
            <p>Count: {count}</p>
            <Count1 increase={()=>increase(1)}/>
            <Count2 increase={()=>increase(2)}/>
        </>
    )
}

export default App
