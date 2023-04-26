import logo from './logo.svg';
import './App.css';

import './index.css'


function App() {


  const productDetails= [

    {
    productId : '1',
   productPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElfyXsUpTMlUUwhwSYi-j4JdfB_I-dLSeFQ&usqp=CAU',
    productName : 'shoos',
    Brand : 'adidas',
    productDescription:'RUNFALCON 3.0 Running Shoes For Men  (White)' ,
    Price : '₹4,255',
    Rating: '4.8'
  },
   {
    productId : '2',
    productPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1Xw3sYlu3Gsp_I7X2lJfgdxYfJPkc6YO9w&usqp=CAU',
    productName : 'T-Shirt',
    Brand : 'NIKE',
    productDescription:'Boys Solid Polycotton T Shirt  (Black, Pack of 1)',
    Price : '₹1,255',
    Rating: '4.4'
  },
  
   {
    productId : '3',
    productPic : 'https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/k/g/k/-original-imaghqqutzzeszhm.jpeg?q=70',
    productName : 'watch',
    Brand : 'Noise',
    productDescription:'Noise ColorFit Caliber Watch Faces Smartwatch  (Pink Strap, Regular)' ,
    Price : '₹1,299',
    Rating: '4.5'
  },
  {
    productId : '4',
    productPic : 'https://rukminim1.flixcart.com/image/312/312/xif0q/computer/y/u/w/15iah7-gaming-laptop-lenovo-original-imagkwgynhhrynkc.jpeg?q=70',
    productName : 'Laptop',
    Brand : 'Lenovo',
    productDescription:'Lenovo IdeaPad Gaming 3 Intel Core i5 12th Gen' ,
    Price : '₹74,990',
    Rating: '4'
  },
  {
    productId : '5',
    productPic : 'https://rukminim1.flixcart.com/image/832/832/xif0q/jean/i/q/r/-original-imaghgxzjkc5pfx3.jpeg?q=70',
    productName : 'Jense',
    Brand : 'KILLER',
    productDescription:'Men Slim Mid nice to looks and Rise Dark Blue Jeans' ,
    Price : '₹74,99',
    Rating: '4.6'
  }
  
  ]
  

  return (
   <>
     
  {
    productDetails.map((data)=>
    <div className='Css'>
    <img style={{width2:'200px',height:'100px'}} src={data.productPic}/>
    <div>{data.productId}</div>
    <h3>{data.productName}</h3>  
    <h4>{data.Brand}</h4>
    <h4>{data.Price}</h4>
    <p>{data.productDescription}</p>
    <h3>{data.Rating}</h3>
    <button style={{backgroundColor:'rgb(25, 186, 30)',width:'200px',height:'60px'}}>ADD TO CART</button>
    </div>
    )
    },
  
</>
  );
}

export default App;
