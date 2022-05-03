import '../DriverCard.css';

function DriverCard(props) {
   console.log(props)

   var star = '';
   var rating = Math.round(props.rating)
  
  
   if(rating === 1) {
      star = "★☆☆☆☆"
   } else if(rating === 2) {
      star = "★★☆☆☆"
   } else if(rating === 3) {
      star = "★★★☆☆"
  }else if(rating === 4) {
      star = "★★★★☆"
  }else if(rating === 5) {
      star ="★★★★★"
  }


  

return <div class="container-driver">
<div>
<img class="driver-img" src={props.img} alt="DriversPicture"></img>
</div>

<div class="driver-info">
    <h1 class="driver-name">{props.name}</h1>
    <p class="driver-name">{star}</p>
    <p>{props.car.model} {props.car.licensePlate}</p>
</div>
</div>


}

export default DriverCard;