import '../IdCard.css';


function IdCard(props) {

 console.clear()
console.log(props)
  
 return <div class="container">
    <div class="img-container">
        <img src={props.picture}  alt="profilPicture"></img>
    </div>

    <div class="info-container">
        <h1>Firstname: <p>{props.firstName}</p></h1>
        <h1>Lastname: <p>{props.lastName}</p></h1>
        <h1>Gender: <p> {props.gender}</p></h1>
        <h1>Height:<p> {props.height}</p></h1>
        <h1> Birth:<p> {props.birth.toLocaleDateString()}</p></h1>
    </div>
 </div>
}

export default IdCard;