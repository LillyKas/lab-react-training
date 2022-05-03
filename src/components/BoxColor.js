


function BoxColor(props) {

   

    const style = { backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
                    height: `20vh`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',}

                   let r = props.r.toString(16);
                   let  g = props.g.toString(16);
                   let  b = props.b.toString(16);
                  
                    if (r.length === 1)
                      r = "0" + r;
                    if (g.length === 1)
                      g = "0" + g;
                    if (b.length === 1)
                      b = "0" + b;

                    let hex = r + g + b;


return <div style ={style}>
    <h1>RGB:({props.r},{props.g},{props.b})</h1>
    <h1>#{hex}</h1>
</div>


}

export default BoxColor;