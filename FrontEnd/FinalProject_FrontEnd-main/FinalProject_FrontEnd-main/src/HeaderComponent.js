import applogo from './applogo.png'
import bgimage from './bgimage.jpg'

function HeaderComponent(){
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src={applogo} />
                    </div>
                    <h1>FurnitureMart</h1>
                    <li><a href="home">Home</a></li>
                    <li><a href="about-us">About Us</a></li>
                    <li><a href="contact-us">Contact Us</a></li>
                </ul>
                
                <a href="home"><button class="btn btn-sm">Logout</button></a>
            </nav>
            
           
        </div>
    )


}
export default HeaderComponent;