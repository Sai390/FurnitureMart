import Footer from "./footer";
import Header from "./header";
import './About.css'
import { Link } from "@material-ui/core";

function AboutUs(){
    return(<div>
        <Header/>
        
        <div className="about">
      
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Our company  FurnitureMart provides the product with much quality and with reasonable price .
        we have different items available here.
         
        </p>
        <div className="table">
    <table>
    <tr>
          <th>If u have any queries please free to contact us !!!!!!</th>
        </tr> 
        <tr>
            <th className="logo">
              <img src="https://cdn-icons-png.flaticon.com/128/6244/6244710.png"/>
            </th>
          </tr>
        <tr>
          
          <th>
          <p>Gmail at us @ <Link to='https://mail.google.com/mail/u/0/?tab=rm&ogbl'>FurnitureMart@gmail.com</Link></p>
          </th>
        </tr>


        <tr>
            <th className="logo">
              <img src="https://cdn-icons-png.flaticon.com/128/13/13936.png"/>
            </th>
          </tr>
          
          <tr>

          <th>
          <p>Connect with us through contact number@ <Link to=''>8919239150</Link></p>
          </th>
        </tr>


    </table>
    </div>
      </div>
     
    </div>
    
        <Footer/>
    </div>);
}

export default AboutUs;