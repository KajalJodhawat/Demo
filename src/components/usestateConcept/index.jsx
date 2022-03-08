
import React, { useState , useEffect} from "react";

function Index() {
    const [count, setCount] = useState(0)
    
    //console.log("count1",count);
    const counter = ()=>{
        var a=count+1;
        setCount(a)
    }
    const decrement = ()=>{
        var b =count-1
        setCount(b)
    }
    useEffect(() => {
        console.log("Hello world")
        setCount(10)
    }, []);
    
    console.log("count",count);
    return (
        <>
            <div>
                
                <h4 style={{color:"blue",fontFamily:"cursive"}}>counter:{count}</h4>
                <button type="submit" onClick={counter} style={{backgroundColor:"burlywood", marginLeft:8,fontFamily:"cursive"}}> Increment </button>
                <button type="submit" onClick={decrement} style={{backgroundColor:"burlywood",marginLeft:8, fontFamily:"cursive"}}>Decrement</button>
            </div>
            
            
                
    
        </>
    )
}
export default Index