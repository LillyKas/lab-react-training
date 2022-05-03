

function Rating(props) {
 //console.log(props)

 var star = '';
 var rating = Math.round(props.children)


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


const style = {
    fontSize: "48px" 
}

return <div><h1 style={style}>{star}</h1></div>


}

export default Rating;