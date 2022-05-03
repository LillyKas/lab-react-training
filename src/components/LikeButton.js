
function LikeButton(props) {
    //console.log(props)


  
    function handleClick() {
     console.log("clicked")
    }


   return <button onClick={handleClick}>Click me 👇</button>
    
  

   }
   
   export default LikeButton;