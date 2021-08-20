import React,{useState} from 'react';


function App() {
   const[num, setnum] = useState(1);
   
  return (
    
    <>
    <div className="main">
    <h2 className="zain">Welcome back, <span className="span">Zain!!</span></h2>

    <div className="icediv">
      <img src="https://media.istockphoto.com/photos/chocolate-ice-cream-in-a-glass-cup-picture-id936205772?k=6&m=936205772&s=612x612&w=0&h=aiNPzuKqw8mpNIxnqtjo5kM_i-p5cWPWvzKlJ_WSx6k=" alt="iceimg" className="ice"/>
    </div>
      <h2 className="name">Chocolate Therapy</h2>
      <span className="price"> ₹ 300</span>
      <p className="para">Sweet and creamy with subtle hints of chocolate nuttiness and diced marshmallows..</p>
      <button className="btn" onClick={() =>{setnum(num+1)}}>+ {num} </button>
      <button className="cart" onClick={()=>{alert("Order accepted")}}>Add To Cart 🛒</button>
    </div>

    </>
  );
}

export default App;
