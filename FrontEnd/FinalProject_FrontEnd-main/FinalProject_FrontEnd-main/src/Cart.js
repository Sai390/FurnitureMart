import React from 'react';
// import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
// import { useThemeHook } from '../GlobalComponents/ThemeProvider';
// import { BsCartCheck, BsCartX} from 'react-icons/bs';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import Header from './header';
import Footer from './footer';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./checkout.css"
const Cart = () => {

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
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    const insertAction= (e)=>{ 
        navigate("/checkout");
     }
   
    return (
       <>
       <div className='check'>
        <Header />
       {getCookie("accessToken")&&  <Container className="py-4 mt-5">
        <h1 >The Cart</h1>
       
            
        <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover  className="mb-5">
               
                    <tbody>
                    {items.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src={item.image} style={{ width: '7rem'}} alt={item.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h3 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.name}
                                        </h3>
                                    </td>
                                    <td>$ {item.price} ,</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
                                    </td>
                                </tr>
                            )
                        })}
                                {/* <tr>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src="Product Image"style={{ width: '4rem'}} alt="Product Image" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                         "Product Name"
                                        </h6>
                                    </td>
                                    <td>Rs. 30</td>
                                    <td>Quantity </td>
                                    <td>
                                        <Button onClick={()=> updateItemQuantity()} className="ms-2">-</Button>
                                        <Button onClick={()=> updateItemQuantity()} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> removeItem()} className="ms-2">Remove Item</Button>
                                    </td>
                                </tr> */}
                            
              
                    </tbody>
                </Table>
                
                    <Row >
                        <Col className="py-2">
                            <h4>Total Price: $ {cartTotal}</h4>
                        </Col>
                        <Col className="p-0" md={4}>
                            
                            <Button variant="success"
                                className="m-2" onClick={(e)=>insertAction(e)}
                            >
                               
                                Check Out
                            </Button>
                        </Col>
                        
                    </Row>
            </Row>
        
            </Container>}

            {!(getCookie("accessToken")) && <center><h1>Page Not Found</h1></center>}
            </div>

                 
       </>
       
    );
};

export default Cart;