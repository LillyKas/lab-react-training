import '../Greetings.css';


function Random(props) {

 //console.clear()
//console.log(props)
const randomNumber = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
return  <div class="container">
        <h1>Random value between {props.min} and {props.max}  = {randomNumber}</h1>
        </div>

}

export default Random;