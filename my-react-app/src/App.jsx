import { useState, useEffect } from 'react'

import breadImg from './assets/bread.jpg'
import bakerImg from './assets/baker.jpg'
import cookiesImg from './assets/cookies.jpg'
import coconutCakeImg from './assets/coconut_cake.jpg'
import vanillaCakeImg from './assets/vanilla_cake.jpg'
import vanillaCakeImg2 from './assets/vanilla_cake_2.jpg'
import mangoCakeImg from './assets/mango_cake.jpg'
import matchaCakeImg from './assets/matcha_cake.jpg'
import './App.css'

const slides = [
  {
    img: coconutCakeImg,
    alt: "Coconut Pineapple Cake",
    title: "Pineapple Coconut Cake",
    desc: "Classic white cake made with coconut milk, soaked in a homemade pineapple syrup. Frosted with a coconut swiss meringue buttercream. Topped and filled with a fresh pineapple jam."
  },
  {
    img: mangoCakeImg,
    alt: "Mango Chiffon Cake",
    title: "Mango Chiffon Cake",
    desc: "Light and airy chiffon cake with mango compote, topped with a mango gel and freshly sliced mangoes. Frosted with mascarpone whipped cream."
  },
  {
    img: vanillaCakeImg,
    alt: "Vanilla Gender Reveal Cake",
    title: "Classic Vanilla Cake",
    desc: "I made this one for a gender reveal party- notice how you can't see pink or blue from the outside? Rich and moist vanilla butter cake with real whole vanilla beans in the rich and smooth swiss meringue buttercream."
  },
  {
    img: vanillaCakeImg2,
    alt: "Vanilla Birthday Cake",
    title: "Classic Vanilla Cake again",
    desc: "This one is for a birthday party!"
  },
  {
    img: matchaCakeImg,
    alt: "Matcha Birthday Cake",
    title: "Matcha Vanilla Cake",
    desc: "Matcha Cake with a deep silky matcha ganache and delicate buttercream. I love piping buttercream roses like the ones seen here!"
  }
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (n) => {
    setCurrentIndex((prev) => {
      let newIndex = prev + n;
      if (newIndex >= slides.length) newIndex = 0;
      if (newIndex < 0) newIndex = slides.length - 1;
      return newIndex;
    });
  };

  const goToSlide = (n) => setCurrentIndex(n);

  useEffect(() => {
    const interval = setInterval(() => changeSlide(1), 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
          <img src={slide.img} alt={slide.alt} />
          <div className="slide-content">
            <h3>{slide.title}</h3>
            <p>{slide.desc}</p>
          </div>
        </div>
      ))}
      <a className="prev" onClick={() => changeSlide(-1)}>&lt;</a>
      <a className="next" onClick={() => changeSlide(1)}>&gt;</a>
      <div className="dots">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => goToSlide(index)}></span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="hero">
        <h1>Freshly Baked Goods</h1>
        <p>Made-to-order baked goods at fair prices</p>
        <a href="#order" className="cta-button">Place An Order</a>
      </section>

      <section id="menu" className="container">
        <h2>Menu</h2>
        <div className="menu-grid">

            <div className="menu-item">
                <h3>Chocolate Chip Cookies</h3>
                <img src={cookiesImg} alt="Chocolate Chip Cookies"/>
                <p>Browned Butter Chocolate Chip Cookies - crispy edges and chewy middle. Suitable for those that don't like thick doughy cookies.</p>
                <div className="price">$17/doz</div>
            </div>

            <div className="menu-item">
                <h3>Sourdough Bread</h3>
                <img src={breadImg} alt="Sourdough Bread"/>
                <p>Handmade sourdough bread with a crackly crust and soft pillowy interior. Available in white and 20% whole wheat.</p>
                <div className="price">$12</div>
            </div>

            <div className="menu-item">
                <h3>Cakes</h3>
                <p>Custom made cakes for birthdays and special occasions. Made with all-natural ingredients and decorated by request. I'll really do whatever flavor, size, or design you want.</p>
                <div className="price">Contact For Pricing</div>
            </div>
        </div>
      </section>
      <section id="slideshow" className="container">
        <h2>Cake Showcase</h2>
        <p>
            Any and all cakes decorations can be customized to your liking! Including styles, colors, and themes. <br/>
            Please note that any food dyes used are gel food coloring, which are not natural. <br/>
            Any other special colors would need to be achieved through fruit or vegetable ingredients, which will affect the flavor of the cake. <br/> 
        </p>
        <hr/>
        <Slideshow />
    </section>

    <section id="order" className="order-section">
        <div className="container">
            <h2>Place Your Order</h2>
            <p>Fill out and order form and I'll contact you with a confirmation of your order details.</p>
            <a href="https://forms.gle/AiqMmuk7GCiLHq8j7" target="_blank" className="cta-button">Order Now</a>
        </div>
    </section>

    <section id="about">
        <h2>About the Baker</h2>
        <div className="about-container">
        <img src={bakerImg} alt="Connor Foster" className="baker-photo"/>
        <p> 
            Hi! I'm Connor Foster. I'm a one man operation dedicated to creating delicious breads, pastries, and cakes. <br/>
            I have always had a passion for baking. After graduating college, I got my first "professional" gig decorating cakes at HyVee in Marion, Iowa.<br/>
            Though I since moved to Chicago in the summer of 2023 to pursue my current career as a Software Engineer, I started the process of creating this business in 2025 as a labor of love.<br/>
            I make all my products from sratch using as high quality ingredients as are readily available to me (thank you Costco for carrying 12 lb bags of King Arthur Flour). I love working with seasonal produce and experimenting with new flavors and developing new recipes.<br/>
            If you have a flavor or request that you don't see on the menu, just let me know and I will work to develop a recipe! I make a trial run of any new products before I sell the final version, so would be more than happy to make a sample for you to try and critique before giving you the final product! <br/>
        </p>
        </div>
        <hr/>
        <h2>About the Kitchen</h2>
        <p>
            I operate as a Cottage Food Operation in the state of Illinois. This means that all my products are made in a home kitchen that is not inspected by a health department. <br/>
            I take food safety very seriously and follow all guidelines for safe food handling and production, and am Serv Safe certified as a food safety manager. If you have any concerns about food safety, please contact your local health department for more information.<br/>
        </p>
        <hr/>
        <h2>About the Pricing</h2>
        <p>
            I strive to make all my prices fair and equitable for both myself and my customers. I am frequently scolded by friends for asking them what they think a fair price is, rather than just charging them a number. <br/>
            I want to keep my prices low enough to offer a fair level of entry for people who want to try my products, but high enough cover cost of ingredients and compensate me for my time, as well as my skills and how intricate the product is.<br/>
            Here's a breakdown of my price calculation:<br/>
            <ul>
                <li>Cost of Ingredients - For example, a two dozen cage-free eggs is $4.59 at Costco, so 6 eggs costs $1.15</li>
                <li>Labor - I charge the minimum wage of Chicago, which is $16.60/hr</li>
                <li>Packaging Costs</li>
            </ul>
        </p>
    </section>
    </>
  )
}

export default App
