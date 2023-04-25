import './index.css'

export default function Card({productId,productPic,productName,Brand,productDescription,Price,Rating}) {

const clickOn=()=>{
alert(productId+productName+Brand+Price+' please proceed to pay !!!')

}

  return (
    <div className="Product" >
   <img style={{width2:'200px',height:'100px'}} src={productPic}/>
   <p>productId: {productId}</p>
   <h2> {productName}</h2>
   <h3> {Brand}</h3>
   <p>{productDescription}</p>
   <p>{Price}</p>
   <p>{Rating}</p>
   <button style={{backgroundColor:'rgb(6, 95, 10)',width:'200px',height:'60px'}} onClick={clickOn}>ADD TO CART</button>
    </div>
  )
}
