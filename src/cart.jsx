import React from "react";
import './App.css';
function Cart(){
            var [cart,setcart] =React.useState( [
                {
                id: 1,
                title: 'Samsung Galaxy S7',
                price: 599.99,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4H6WNg6zKckgHDiYH7O1ZdgkrW2Cc5YC2PQ&usqp=CAU',
                amount: 1,
                },
                {
                id: 2,
                title: 'google pixel ',
                price: 499.99,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07DvC-ql_t8rhd89SpSE3WgXfMJgDQ35YBQ&usqp=CAU',
                amount: 1,
                },
                {
                id: 3,
                title: 'Xiaomi Redmi Note 2',
                price: 699.99,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_u57RHBWmIk04dg7t6rlwr-WmGidTCqSKqw&usqp=CAU',
                amount: 1,
                },
                {
                id: 4,
                title: 'Xiaomi 12pro | 5G',
                price: 799.99,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGykE1UOQ0W7W4e2Hh01BNZIwqh8JpFKZY9d3P8CX0aUwA-hG5JmVBdfmmQGdR90sKuQ&usqp=CAU',
                amount: 1,
                }
            ])
            if (cart.length===0)
            {
             document.getElementById("but").style.display="none"   
            }
            function add(i){
            cart[i].amount=cart[i].amount+1
            setcart([...cart])
            }

            function sub(i){
                if(cart[i].amount==1)
                {
                    cart.splice(i,1)
                    setcart([...cart])
                }
                else
                {
                    cart[i].amount=cart[i].amount-1
                    setcart([...cart])     
                }    
                }
            function remove(i){
                cart.splice(i,1)
                setcart([...cart])
            }
            function abrakadabra(){
                setcart([])
                document.getElementById("but").style.display="none"
               
            }
        return <div className="main">
            <div id="d1" style={{display:"flex"}}>
                <p>total product={cart.reduce((a,b)=>a+b.amount,0)}</p>
            </div>
            <h1>Your Bag</h1>
            {
             cart.map((a,i)=>{
                return <div className="hi">
                    
                    <div className="hi1">
                        <div>
                            <img className="img"src={a.img} alt="hi" />
                        </div>
                        <div style={{display:"flex",
                                    flexDirection:"column"
                                    ,margin:"0px 50px"}}>
                       <p>{a.title}</p>  
                      <p>$ {a.price}</p>  
                      <p><button onClick={()=>remove(i)} className="rem">remove</button></p>
                        </div>
                        <div style={{margin:"auto 50px"}}>
                        <button onClick={()=>add(i)}className="b1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg></button>
                        <p>&nbsp;{a.amount}</p>
                        <button onClick={()=>sub(i)} className="b1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg></button>
                        </div>
                      
                    </div>
                   
                </div>
             })  
                }
                <div style={{display:"flex"}}>
                    <div style={{marginRight:'450px',fontSize:'20px',fontWeight:'bold'}}>
                        <p>Total</p>
                    </div>
                    <div style={{marginRight:'20px'}}>
                        <p>=</p>
                    </div>
                    <div>
                        <p>$ {cart.reduce((a,b)=>a+b.amount*b.price,0)}</p>
                    </div>
                    

                </div>
               <button onClick={()=>abrakadabra()} id="but" className="abrakadabra">clear Cart</button> 
            
        </div>


}
export default Cart;