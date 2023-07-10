import {useState} from "react";

function useCount(){
    let [count,setCount] = useState(0)
    let increase = (increment)=>{
        setCount(count+increment)
    }
    return [count,increase]
}
export default useCount