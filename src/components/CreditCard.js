function CreditCard(props) {

console.log(props)

let creditCardNumber = props.number.split('')

for(let i = 0; i < creditCardNumber.length -4; i++){
 creditCardNumber[i] = "*"
}

const visaURL = ".../assets/images/visa.png"
    
if(props.type === 'Visa') {
return <div>
<img src={visaURL} alt="Visa"></img>
<p>{creditCardNumber}</p>
</div>
      

}
     
   }
   
   export default CreditCard;