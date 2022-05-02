import '../Greetings.css';


function Greetings(props) {

 //console.clear()

 if(props.lang === "de") {
    return <div class="container"><h1>Hallo {props.children}</h1></div>

 } else if( props.lang === "fr") {
    return <div class="container"><h1>Bonjour {props.children}</h1></div>

 } else if( props.lang === "es") {
    return <div class="container"><h1>Hola {props.children}</h1></div>

 } else if( props.lang === "en") {
    return <div class="container"><h1>Hello {props.children}</h1></div>

 }



return <p>I dont know this languange</p>


}

export default Greetings;