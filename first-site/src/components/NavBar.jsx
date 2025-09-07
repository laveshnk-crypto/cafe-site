import "../styles/NavBar.css"

export default function NavBar() {
    return(
        <nav className="navBar">
            <div className="logo"></div>
            <ul className="navList">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#menu">Menu</a></li>
            </ul>
            <a href="#order"><button className="orderButton">Order Now</button></a>
        </nav>
    )
}