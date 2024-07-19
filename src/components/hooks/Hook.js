import { useState } from "react";

function Hook() {
    let [name, setName] = useState("")

    return(
        <div>
            <h1>name: {name}</h1>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
    )
}
export default Hook;