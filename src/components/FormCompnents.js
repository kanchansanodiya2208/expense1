import { useState } from "react";

function FormCompnents(){
const [firstname, setName] = useState("");

const handlesubmit=(event)=>{
    event.preventDefault();

    alert(`firstname is : ${firstname}`);
}
    return (
        <div>
            <form onSubmit={handlesubmit}>
            <div>
           <label>Firstname</label>
           <input id="firstname" type="text" value={firstname} name="firstname" placeholder="Enter Your Firstname" onChange={(e)=>setName(e.target.value)}></input>
           </div>

           <div>
           <label >Lastname</label>
           <input id="lastname" name="lastname"  placeholder="Enter Your lastname"></input>
           </div>
            
            <div>
                <input type="submit" name="Submit" value="Submit"/>
            </div> 
           </form>
        </div>
    );
}
export default FormCompnents;