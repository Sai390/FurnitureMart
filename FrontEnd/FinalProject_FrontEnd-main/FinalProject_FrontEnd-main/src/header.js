import applogo from './applogo.png'
import bgimage from './bgimage.jpg'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from "react-use-cart";
function Header(){

    const {
        isEmpty,
        totalItems,
    } = useCart();

    const username = sessionStorage.getItem("username");

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


    const signoutHandler = () => {
        console.log("logout")
        console.log(window.location);
        document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '/';
    }
    return (
        <div>
            {getCookie("accessToken") &&
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src={applogo} />
                    </div>
                    <a className='h1-title' href="home"><h1>FurnitureMart</h1></a>
                    <li><a href="home">Home</a></li>
                    <li><a href="about-us">About Us</a></li>
                    
                   <li> <label className='username'>Welcome {username} ! </label></li>
                </ul>
                {/* <label>Welcome {username}</label> */}
                <a href="cart"><button class="btn btn-sm">Cart({totalItems})</button></a>
                <a href="home"><button class="btn btn-sm" onClick={signoutHandler}>Logout</button></a>  
            </nav>
}
{!(getCookie("accessToken")) &&
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src={applogo} />
                    </div>
                    <a className='h1-title' href="home"><h1>FurnitureMart</h1></a>
                    <li><a href="home">Home</a></li>
                    <li><a href="about-us">About Us</a></li>
                    
                </ul>
                
                <a href="register"><button class="btn btn-sm">Register</button></a>
                <a href="login"><button class="btn btn-sm">Login</button></a>
            </nav>
}
           
        </div>
    )


}
export default Header;