import '../CreditCard.css';


function CreditCard(props) {






let creditCardNumber = props.number.split('')

for(let i = 0; i < creditCardNumber.length -4; i++){
 creditCardNumber[i] = "*"
}


var visaURL = '';
var type = '';

if(props.type === "Visa") {
    visaURL = "/src/assets/images/visa.png"
    type = "visa"
} else if(props.type === "Master Card") {
    visaURL = "./assets/images/master-card.svg"
    type = "master card"
}


const style = { backgroundColor: props.bgColor,
                color: props.color}

    

return <div class="container-cards">

<div class="one-card" style={style}>

<div class="logo">
<img src={visaURL} alt={type}></img>
</div>
<h1 class="creditCardNumber">{creditCardNumber}</h1>

<div class="expire">
<p>Expires {props.expirationMonth} / {props.expirationYear}</p>
<p>{props.bank}</p>
</div>

<p>{props.owner}</p>

</div>
</div>
      

}
     

   
   export default CreditCard;