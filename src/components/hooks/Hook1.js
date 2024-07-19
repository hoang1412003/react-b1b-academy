import { useState } from "react";
import "./hook1.css";

function Hook1() {
    let [a, setA] = useState(0);
    let [b, setB] = useState(0);
    let [result, setResult] = useState(0);

    return (
        <div className="hook1">
            <label>a</label>
            <input placeholder="a" value={a} onChange={(e)=>setA(e.target.value*1)}/> <br/>
            <label>b</label>
            <input placeholder="b" value={b} onChange={(e)=>setB(e.target.value*1)}/> <br/>
            <button onClick={()=>setResult(a + b)}>+</button>
            <button onClick={()=>setResult(a - b)}>-</button>
            <button onClick={()=>setResult(a * b)}>X</button>
            <button onClick={()=>setResult((a / b).toFixed(2))}>/</button>

            <p>result: {result}</p>
        </div>
    );
}

export default Hook1;
