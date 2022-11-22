import applogo from './applogo.png';
import bgimage from './bgimage.jpg';
import { Outlet, Link } from "react-router-dom";
import { useEffect,useState } from 'react';
import Header from './header';
import Background from './bg';
import Footer from './footer';
import Product from './Product';
import './home.css';
export default function Home(){
    const [items, setItems] = useState("");
    

    useEffect(() => {
      fetch("http://localhost:8080/api/auth/product_list")
        .then(res => res.json())
        .then(
          (result) => {
            console.log('called get items')
            console.log(result)
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
        //   (error) => {
        //     setError(error);
        //   }
        )
    }, [])
    return (
        <>
        <Header/>
        <div className='all-products-contain'>
          <div className='menu'>
            <h1 className='menuTitle'></h1>
          </div>
              {items && items.map((item,i)=>(  <Product
                    data={item}
                    key={i}
                />))}

            </div>
        <Footer/>
        </>
    );


}
 