import '../styles/Home.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home(){

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [notes, setNotes] = useState("");

    // api call to place order


    const [dishes, setDishes] = useState([{ dish: "", qty: 1}])
    
    const handleDishChange = (index, field, value) => {
        const updated = [...dishes];
        updated[index][field] = value;
        setDishes(updated);
    };

    const addDish = () => {
        setDishes([...dishes, { dish: "", qty: 1 }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order submitted:", dishes);
    };

    const removeDish = (index) =>{
        const updated = [...dishes];
        updated.splice(index, 1);
        setDishes(updated);
    }

    return (
        <div>
            <section id="home" className='home'>
                <h3 className='h3'>welcome to our delicious corner</h3>
                <h1 className='h1'>BEHIND THE DISHES</h1>
                <h2 className='h2'>Discover the stories and inspirations behind our culinary creations.</h2>
            </section>
            <section id="about" className='about'>
                <h3 className='h3About'>special moments</h3>
                <h1 className='h1LiteAbout'>ABOUT US</h1>
                <ul className='cardList'>
                    <li className='cardImg1'></li>
                    <li className='card'>
                        <h3 className='h3'>Taste perception</h3>
                        <h1 className='h1LiteTnM'>TRADITIONAL & MODERN</h1>
                        <h2 className='h2Card'>We blend traditional and modern culinary techniques that represents the essence of our diverse culture.</h2>
                        <button className='orangeButton'>Read more</button>
                    </li>
                    <li className='cardImg2'></li>
                </ul>
            </section>

            <section id="menu" className='menu'>
                <div className='menuPic'></div>
                <ul className='menuList'>
                    <li><h3 className='h3'>our healthy food</h3></li>
                    <li><h1 className='h1Lite'>OUR SPECIALS</h1></li>
                    <br/><br/><br/><br/>
                    <div className='menuBox'>
                        <li><h1 className='menuHead'>CHICKEN BIRYANI</h1></li>
                        <div className='orange-line'></div>
                        <div className='menuPrice'>$18.99</div>
                    </div>
                    <li><h2 className='menuItem'>Aromatic basmati rice layered with spiced chicken</h2></li>
                    <br/><br/>
                    <div className='menuBox'>
                        <li><h1 className='menuHead'>PANEER BUTTER MASALA</h1></li>
                        <div className='orange-line'></div>
                        <div className='menuPrice'>$12.99</div>
                    </div>
                    <li><h2 className='menuItem'>Creamy tomato gravy with paneer cubes</h2></li>
                    <br/><br/>
                    <div className='menuBox'>
                        <li><h1 className='menuHead'>VEGETABLE BIRYANI</h1></li>
                        <div className='orange-line'></div>
                        <div className='menuPrice'>$11.99</div>
                    </div>
                    <li><h2 className='menuItem'>Fragrant basmati rice with mixed vegetables</h2></li>
                    <br/><br/>
                    <div className='menuBox'>
                        <li><h1 className='menuHead'>CHICKEN ROGAN JOSH</h1></li>
                        <div className='orange-line'></div>
                        <div className='menuPrice'>$17.99</div>
                    </div>
                    <li><h2 className='menuItem'>Tender chicken cooked in a rich, spiced curry</h2></li>
                    <br/><br/>
                    <div className='menuBox'>
                        <li><h1 className='menuHead'>GOBI MANCHURIAN</h1></li>
                        <div className='orange-line'></div>
                        <div className='menuPrice'>$12.99</div>
                    </div>
                    <li><h2 className='menuItem'>Crispy cauliflower tossed in a tangy sauce</h2></li>
                    <br/>
                    <button className='orderButton'>View more</button>
                </ul>
            </section>
            
            <section id="order" className="order">
                <h3 className="h3Order">ready to order?</h3>
                <h1 className="h1Order">PLACE YOUR ORDER</h1>


                <form className="orderBox" onSubmit={handleSubmit}>
                    <div className="orderLabel">Name*:</div>
                    <input
                    type="text"
                    className="orderInput"
                    placeholder="Enter your name"
                    required
                    />

                    <div className="orderLabel">Phone Number*:</div>
                    <input
                    type="text"
                    className="orderInput"
                    placeholder="Enter your Phone Number"
                    required
                    />

                    <div className="orderLabel">Email Address:</div>
                    <input
                    type="text"
                    className="orderInput"
                    placeholder="Enter your Email Address"
                    required
                    />

                    {dishes.map((dish, index) => (
                    <div key={index} className="dishRow">
                        <div className='DishRowContainer'>
                            <label className="orderLabel">Dish {index + 1}*:</label>
                            <button type="button" className='removeDishButtonContainer' onClick={() => removeDish(index)}>
                                <div className="removeDishButton"></div>
                            </button>
                        </div>
                        <select
                        className="orderInput"
                        value={dish.dish}
                        onChange={(e) =>
                            handleDishChange(index, "dish", e.target.value)
                        }
                        required
                        >
                        <option value="">-- Choose Dish --</option>
                        <option value="Chicken Biryani">Chicken Biryani</option>
                        <option value="Paneer Butter Masala">Paneer Butter Masala</option>
                        <option value="Vegetable Biryani">Vegetable Biryani</option>
                        <option value="Chicken Rogan Josh">Chicken Rogan Josh</option>
                        <option value="Gobi Manchurian">Gobi Manchurian</option>
                        </select>

                        <label className="orderLabel">Quantity*:</label>
                        <input
                        type="number"
                        className="orderInput"
                        min={1}
                        value={dish.qty}
                        onChange={(e) =>
                            handleDishChange(index, "qty", e.target.value)
                        }
                        />
                    </div>
                    ))}

                    <button
                    type="button"
                    className="addDishButton"
                    onClick={addDish}
                    >
                    + Add another dish
                    </button>

                    <div className="orderLabel">Additional Notes:</div>
                    <input
                    type="text"
                    className="orderInput"
                    placeholder="Any additional comments/notes"
                    />

                    <button className="orderSubmitButton" type="submit">
                    Continue to payment
                    </button>
                </form>
            </section>
            
            <section id="contact" className='contact'>
                <br/>
                <h1 className='h1Lite'>CONTACT</h1>
                <br/>
                <div style={{display:'flex',gap:'10px'}}>
                    <div className='instagramIcon'></div>
                    <Link to={'https://www.instagram.com/the_symphonic_pirate/'} style={{textDecoration:'none', color:'inherit'}} target='_blank' rel='noopener noreferrer'>
                        Instagram
                    </Link>
                </div>
                <div style={{display:'flex',gap:'10px'}}>
                    <div className='mapIcon'></div>
                    <Link to={'https://maps.app.goo.gl/xgPcAYP6NpN7ictY8'} style={{textDecoration:'none', color:'inherit'}} target='_blank' rel='noopener noreferrer'>
                        Google Maps
                    </Link>
                </div>
                <div style={{display:'flex',gap:'10px'}}>
                    <div className='phoneIcon'></div>
                    <h2 className='h2Contact'>+1-234-567-8901</h2>
                </div>
                <br/>
            </section>
        </div>
    )
}