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
            console.log(cart)
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
            
        return <div className="main">
            <div style={{display:"flex"}}>
            <h1>your bag</h1>
            <p style={{marginLeft:"150px"}}>total product={cart.reduce((a,b)=>a+b.amount,0)}</p>
            </div>
            
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
                      <p>{a.price}</p>  
                      <p><button onClick={()=>remove(i)}>remove</button></p>
                        </div>
                        <div style={{margin:"auto 50px"}}>
                        <button onClick={()=>add(i)}>+</button>
                        <p>{a.amount}</p>
                        <button onClick={()=>sub(i)}>-</button>
                        </div>
                      
                    </div>
                   
                </div>
             })  
                }
                <div>
                    <p>total price={cart.reduce((a,b)=>a+b.amount*b.price,0)}</p>
                    

                </div>
            
        </div>


}
export default Cart