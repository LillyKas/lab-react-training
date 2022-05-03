import { useState } from 'react'

const backgroundColorArr = ['purple','blue','green','yellow','orange','red']

function LikeButton(props) {
 
    const [count, setCount] = useState(0)
    const [colorCounter, setColorCounter] = useState(1)
    const [style, setStyle] = useState({"backgroundColor":backgroundColorArr[0] })
    
    



 function handleClick() {
    
if(colorCounter === backgroundColorArr.length -1) {
    setColorCounter(0)
    console.log("test")
    setCount(count + 1)
    console.log(colorCounter)
    setStyle({"backgroundColor": backgroundColorArr[colorCounter]})
}  else{
   setColorCounter(colorCounter + 1)
    setCount(count + 1)
    console.log(colorCounter)
    setStyle({"backgroundColor": backgroundColorArr[colorCounter]})
}
}

return <button style={style} onClick={handleClick}> Like {count}</button>
    
}
   
   export default LikeButton;