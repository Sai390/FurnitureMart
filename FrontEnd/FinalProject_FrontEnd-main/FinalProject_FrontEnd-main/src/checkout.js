import React from "react"
import Footer from "./footer";
import Header from "./header";
import { useCart } from 'react-use-cart';
import { useNavigate } from "react-router-dom";
import "./checkout.css"

function Checkout(){

    const getCookie = (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const navigate=useNavigate();

    const {
        emptyCart,
    } = useCart();

    const PlaceOrder=()=>{

        alert("ordered succesfully");
        emptyCart();
        navigate("/home")
    }
return(
    <div className="check">
        <Header/>
       {getCookie("accessToken") ?  <div><h1>Enter Card details</h1>
            <input className='register-form-element'  placeholder="Card Name" required type='text'></input><br></br>
            <input className='register-form-element'  placeholder="Card Number" required type='number'></input><br></br>
        
            <input className='register-form-element'  placeholder="Cvv" required type='password'></input><br></br>
            <button onClick={e => PlaceOrder(e)}>Submit</button></div> : <div><center><h1>Page Not Found</h1></center></div>}
        <Footer/>
    </div>
)
} 

export default Checkout;