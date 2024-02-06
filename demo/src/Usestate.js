import React, { useState } from "react"
function Usestate() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);

    function getdata(e) {
        e.preventDefault();
    }

    function getuser(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setError(true);
        }
        else {
            setError(false);
        }
    }
    function complete(){
        console.log("complete")
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={getdata}>
                <input type="text" placeholder="User ID" onChange={getuser}></input>{error ? <span>invalid name</span> : " "}<br /><br />
                
                <input type="password" placeholder="password"></input><br/><br/>

                <button onClick={complete}>submit</button>

            </form>
        </div>
    )
}
export default Usestate