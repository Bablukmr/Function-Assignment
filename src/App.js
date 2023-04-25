import logo from './logo.svg';
import './App.css';
import './the-product-card'
import Card from './the-product-card';
import './index.css'


function App() {
const productDetails1 = {
  productId : '1',
  productPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElfyXsUpTMlUUwhwSYi-j4JdfB_I-dLSeFQ&usqp=CAU',
  productName : 'shoos',
  Brand : 'adidas',
  productDescription:'RUNFALCON 3.0 Running Shoes For Men  (White)' ,
  Price : '₹4,255',
  Rating: '4.8'
}
const productDetails2 = {
  productId : '2',
  productPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1Xw3sYlu3Gsp_I7X2lJfgdxYfJPkc6YO9w&usqp=CAU',
  productName : 'T-Shirt',
  Brand : 'NIKE',
  productDescription:'Boys Solid Polycotton T Shirt  (Black, Pack of 1)',
  Price : '₹1,255',
  Rating: '4.4'
}
const productDetails3 = {
  productId : '3',
  productPic : 'https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/k/g/k/-original-imaghqqutzzeszhm.jpeg?q=70',
  productName : 'watch',
  Brand : 'Noise',
  productDescription:'Noise ColorFit Caliber Watch Faces Smartwatch  (Pink Strap, Regular)' ,
  Price : '₹1,299',
  Rating: '4.5'
}
const productDetails4 = {
  productId : '4',
  productPic : 'https://rukminim1.flixcart.com/image/312/312/xif0q/computer/y/u/w/15iah7-gaming-laptop-lenovo-original-imagkwgynhhrynkc.jpeg?q=70',
  productName : 'Laptop',
  Brand : 'Lenovo',
  productDescription:'Lenovo IdeaPad Gaming 3 Intel Core i5 12th Gen' ,
  Price : '₹74,990',
  Rating: '4'
}
const productDetails5 = {
  productId : '5',
  productPic : 'https://rukminim1.flixcart.com/image/832/832/xif0q/jean/i/q/r/-original-imaghgxzjkc5pfx3.jpeg?q=70',
  productName : 'Jense',
  Brand : 'KILLER',
  productDescription:'Men Slim Mid nice to looks and Rise Dark Blue Jeans' ,
  Price : '₹74,99',
  Rating: '4.6'
}


  return (
    <>
    <div className="App">
      <Card 
      {...productDetails1}
      />
      <Card 
      {...productDetails2}
      />
      <Card 
      {...productDetails3}
      />
      </div>
      <div className='App2'>
      <Card 
      {...productDetails4}
      />
      <Card 
      {...productDetails5}
      />
      </div>
    </>
  );
}

export default App;
