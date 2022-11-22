import './product.css';
import { useCart } from 'react-use-cart';
import {motion} from "framer-motion";

const Product = (props) => {
    let { image, price, name} = props.data;
    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
    }

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

    return (
        <div>
            <div className='product-container'>
                <div className='product-image-container'>
                    <img width="100%" src={image}/>
                </div>
                <div className='product-details-container'>
                    <h4>{name}</h4>
                    <h3>${price}</h3>
                </div>
                {getCookie("accessToken") &&
               <motion.button whileTap={{scale:1.2}} className='button-object' onClick={()=> addToCart()}  >Add to Cart</motion.button>}
                {!(getCookie("accessToken")) && 
                <a href='login'> <button className="button-object">Add to cart</button></a>}
            </div>
        </div>
    )
}

export default Product;