import applogo from './applogo.png';
import bgimage from './bgimage.jpg';
import { Outlet, Link } from "react-router-dom";
import Header from './header';
import Background from './bg';
import Footer from './footer';
import Product from './Product';
import HeaderComponent from './HeaderComponent';
import './home.css';

function HomePage(){
    return (
        <>
        
        
        <HeaderComponent/>
        
        <div className='all-products-contain'>
                
                 <Product
                    imgSrc='https://images.unsplash.com/photo-1565791380713-1756b9a05343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                    productName="Table"
                    price="$150"
                />
                 <Product
                    imgSrc='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    productName="Sofa"
                    price="$200"
                />
                <Product
                    imgSrc='https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    productName="Sofa"
                    price="$250"
                />
                <Product
                    imgSrc='https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
                    productName="Chair"
                    price="$100"
                />
                <Product
                    imgSrc='https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
                    productName="Chair"
                    price="$120"
                />
                 <Product
                    imgSrc='https://images.unsplash.com/photo-1565791380713-1756b9a05343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                    productName="Table"
                    price="$150"
                />
                 <Product
                    imgSrc='https://cdn.pixabay.com/photo/2013/09/26/11/59/leather-sofa-186636__480.jpg'
                    productName="Sofa"
                    price="$200"
                />
                 <Product
                    imgSrc='https://cdn.pixabay.com/photo/2016/09/06/13/39/sofa-1649144__480.png'
                    productName="Sofa"
                    price="$250"
                />
                 <Product
                    imgSrc='https://cdn.pixabay.com/photo/2017/03/19/09/02/sofa-2155865__480.jpg'
                    productName="Sofa"
                    price="$275"
                />
                 <Product
                    imgSrc='https://cdn.pixabay.com/photo/2014/09/20/13/54/glowing-453783__480.jpg'
                    productName="Lamo"
                    price="$100"
                />
                 <Product
                    imgSrc='https://cdn.pixabay.com/photo/2014/12/21/23/41/chandelier-575852__480.png'
                    productName="Lamp"
                    price="$500"
                />
                 <Product
                    imgSrc='https://cdn.pixabay.com/photo/2015/09/27/16/47/table-lamp-960976__480.png'
                    productName="Lamp"
                    price="$150"
                />
                 <Product
                    imgSrc='https://cdn.pixabay.com/photo/2016/11/23/17/55/beach-1854072__480.jpg'
                    productName="Curtains"
                    price="$50"
                />
                 <Product
                    imgSrc='https://cdn.pixabay.com/photo/2018/03/24/00/39/clothing-3255414__480.jpg'
                    productName="Curtains"
                    price="$40"
                />
                 <Product
                    imgSrc='https://cdn.pixabay.com/photo/2017/02/05/23/12/background-2041638__480.png'
                    productName="Curtains"
                    price="$45"
                />
                 <Product
                    imgSrc='https://cdn.pixabay.com/photo/2017/10/19/17/49/chair-2868599__480.png'
                    productName="Chair"
                    price="$150"
                />
                 <Product
                    imgSrc='https://media.istockphoto.com/id/505973586/photo/grey-armchair-isolated.jpg?b=1&s=170667a&w=0&k=20&c=l3dhkVCslbv38phCRJFnRLJqRmv2v6WPayAUGFp7fZU='
                    productName="Chair"
                    price="$275"
                />
                <Product
                    imgSrc='https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037__480.jpg'
                    productName="Table"
                    price="$450"
                />
                <Product
                    imgSrc='https://cdn.pixabay.com/photo/2014/04/26/00/41/dining-room-332207__480.jpg'
                    productName="Table"
                    price="$350"
                />





               
            </div>
        <Footer/>
        </>
    );


}
export default HomePage;