import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/cleaning" element={<Cleaning />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <h1>Girls Painting the Town</h1>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/contact" className="nav-link">Contact & Services</Link>
          <Link to="/reviews" className="nav-link">Reviews</Link>
          <Link to="/cleaning" className="nav-link">Cleaning</Link>
        </nav>
      </div>
    </header>
  )
}

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Professional House Painting & Cleaning Services</h2>
            <p>Transform your space with Girls Painting the Town - Delaware County & Main Line's trusted painting professionals</p>
            <Link to="/contact" className="cta-button">Get Your Free Quote</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About Girls Painting the Town</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Hi! I'm Donna, the proud owner and operator of Girls Painting The Town. With over 25 years of experience in the painting industry, I believe in delivering high-quality work and building strong relationships with my clients. Every project is personal to me, and I'm dedicated to bringing your vision to life, whether it's for your home or business.</p>
              
              <p>Girls Painting The Town specializes in both interior and exterior painting for residential and commercial properties, along with a wide range of services including power washing, deck staining, wallpaper removal, popcorn ceiling removal, drywall repair and installation, plaster repair, wood repair and installation, cabinet painting, roof coating, window capping, siding, stucco repair, and brick/stone pointing.</p>
              
              <p>Having my own business for over a decade and 25 years in the industry, our licensed and insured team has proudly served Delaware County and the Main Line and beyond. We are dedicated to transforming your space and bringing your vision to life, providing you with peace of mind and free estimates to get started.</p>
              
              <p><strong>Contact us today: 267-970-3160</strong></p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500" alt="Professional female house painter at work" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Interior Painting</h3>
              <p>Transform your indoor spaces with professional interior painting services</p>
            </div>
            <div className="service-card">
              <h3>Exterior Painting</h3>
              <p>Protect and beautify your home's exterior with quality paint and expert application</p>
            </div>
            <div className="service-card">
              <h3>Drywall & Plaster Repair</h3>
              <p>Professional repair and installation services for walls and ceilings</p>
            </div>
            <div className="service-card">
              <h3>Construction Cleaning</h3>
              <p>Complete cleaning and painting services for new construction and renovations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <h2>Our Work</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/beforeexterior.jpeg" alt="Before exterior painting" />
              <div className="gallery-overlay">
                <h4>Exterior Before</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/afterexterior.jpeg" alt="After exterior painting" />
              <div className="gallery-overlay">
                <h4>Exterior After</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/beforeplasterrepair.jpg" alt="Before plaster repair" />
              <div className="gallery-overlay">
                <h4>Plaster Repair Before</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/afterplasterrepair.jpg" alt="After plaster repair" />
              <div className="gallery-overlay">
                <h4>Plaster Repair After</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/Denisworking.jpeg" alt="Denis working on painting project" />
              <div className="gallery-overlay">
                <h4>Professional Work</h4>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/dennisonladder.jpeg" alt="Denis on ladder painting" />
              <div className="gallery-overlay">
                <h4>Exterior Work</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function Contact() {
  return (
    <main>
      <section className="contact-hero">
        <div className="container">
          <h2>Contact & Services</h2>
          <p>Get your free estimate today!</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <strong>Phone:</strong> 267-970-3160
              </div>
              <div className="contact-item">
                <strong>Service Areas:</strong> Delaware County & Main Line
              </div>
              <div className="contact-item">
                <strong>Website:</strong> housepaintermainline.com
              </div>
            </div>

            <div className="services-list">
              <h3>Our Complete Services</h3>
              <ul>
                <li>Interior Painting</li>
                <li>Exterior Painting</li>
                <li>Interior Trim or Molding Painting</li>
                <li>Exterior Trim or Molding Painting</li>
                <li>Drywall Installation or Replacement</li>
                <li>Drywall Repair</li>
                <li>Plaster Repair</li>
                <li>Cabinet Painting</li>
                <li>Power Washing</li>
                <li>Deck Staining</li>
                <li>Wallpaper Removal</li>
                <li>Popcorn Ceiling Removal</li>
                <li>Wood Repair and Installation</li>
                <li>Roof Coating</li>
                <li>Window Capping</li>
                <li>Siding</li>
                <li>Stucco Repair</li>
                <li>Brick/Stone Pointing</li>
                <li>Construction Clean and Paint</li>
                <li>Fix and Flip Cleaning and Painting</li>
              </ul>
            </div>
          </div>

          <div className="quote-form">
            <h3>Request Your Free Quote</h3>
        <form name="contact" method="POST" data-netlify="true">  
  <div className="form-group">
    <input type="text" placeholder="Your Name" name="name" required />
  </div>
  <div className="form-group">
    <input type="email" placeholder="Your Email" name="email" required />
  </div>
  <div className="form-group">
    <input type="tel" placeholder="Your Phone" name="phone" required />
  </div>
  <div className="form-group">
    <select name="service" required>
      <option value="">Select Service Type</option>
      <option value="interior">Interior Painting</option>
      <option value="exterior">Exterior Painting</option>
      <option value="drywall">Drywall Services</option>
      <option value="plaster">Plaster Repair</option>
      <option value="cleaning">Construction Cleaning</option>
      <option value="other">Other Services</option>
    </select>
  </div>
  <div className="form-group">
    <textarea placeholder="Project Details" name="details" rows="4"></textarea>
  </div>
  <Button type="submit" className="submit-btn">Get Free Quote</Button>
</form>
          </div>
        </div>
      </section>
    </main>
  )
}

function Reviews() {
  const reviews = [
    {
      name: "Carol Ponzio",
      text: "Donna is highly recommended for any job. She is serious about the work she does and professional. I would recommend her over all others. She won't disappoint.",
      rating: 5
    },
    {
      name: "MaryBeth Rymanski-Russell", 
      text: "I've used Donna and girls painting the town from painting my house twice now. They did the exterior of my house and then I had her come back and do the interior. I can't say enough good things about Donna and her business. She was professional. Her work is impeccable and she's very clean and neat. Her prices are great. She really went above and beyond for me. At the time she painted the house, I had an arm injury and needed help rehanging my artwork back on the walls. She took the time to help me do this. I highly recommend girls painting the town.",
      rating: 5
    },
    {
      name: "Kenneth Trifaro",
      text: "I've used Donna for both commercial and residential painting, and she never disappoints! Donna is so easy to work with, listens to everything you have to say and is extremely professional. I highly recommend her for your residential painting or commercial painting.",
      rating: 5
    },
    {
      name: "Rick Molner",
      text: "Donna did a great job for us and we would highly recommend her.",
      rating: 5
    },
    {
      name: "Jennifer M.",
      text: "Donna is amazing. Great, clean, perfect and quick job each and every time. From painting our house to our rentals I can always count on Donna. Thanks so much. Having a talented and reliable person to complete important jobs, when you need it done, is sometimes very difficult to come by. Thanks for always being both!",
      rating: 5
    },
    {
      name: "Irene P.",
      text: "Beautiful job on cabinets and walls etc. Professional, friendly and neat! Love my kitchen! Great value! Donna and Sarah did an excellent job. Just what I wanted.",
      rating: 5
    },
    {
      name: "Jeff T.",
      text: "Wow! their team did some magic on our back porch area. Their attention to detail was superb, above and beyond what anyone would expect. We were given a start date and they stuck to it and completed the work quickly, efficiently, and professionally. These are really nice people and talented painters. I never would have considered all the details and techniques the painters employ on a project such as ours with new construction combined with 150 year old farmhouse; new wood and old, patches of stucco needing repair and 11 windows and both inside and outside work needing to be done. When complete, they cleaned up incredibly well. I highly recommend them to anyone looking for great work at a great price. Real talent!",
      rating: 5
    }
  ];

  return (
    <main>
      <section className="reviews-hero">
        <div className="container">
          <h2>Customer Reviews</h2>
          <p>See what our satisfied customers have to say about Girls Painting the Town</p>
        </div>
      </section>

      <section className="reviews-content">
        <div className="container">
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <p className="review-author">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function Cleaning() {
  return (
    <main>
      <section className="cleaning-hero">
        <div className="container">
          <h2>Construction Clean, Paint & Fix & Flip Services</h2>
          <p>Let us clean and paint your new build or renovation</p>
        </div>
      </section>

      <section className="cleaning-content">
        <div className="container">
          <div className="cleaning-intro">
            <h3>Professional Construction & Renovation Services</h3>
            <p>We work closely with contractors to ensure a seamless transition from construction to a beautifully finished space. Our comprehensive cleaning and painting services transform construction sites into move-in ready properties.</p>
          </div>

          <div className="cleaning-services">
            <div className="service-section">
              <h3>From Construction Chaos to Move-In Ready</h3>
              <div className="before-after-images">
                <div className="image-container">
                  <img src="/images/construction-before-after.jpeg" alt="Before and after construction cleaning transformation" />
                  <p>Before & After: Construction to move-in ready transformation</p>
                </div>
              </div>
              <ul>
                <li>Complete debris and construction material removal</li>
                <li>Deep cleaning of all surfaces, windows, and fixtures</li>
                <li>Dust removal from HVAC systems and vents</li>
                <li>Surface preparation for painting</li>
                <li>Fresh coat of paint for new builds</li>
                <li>Floor cleaning and polishing</li>
                <li>Move-in ready deep cleaning</li>
              </ul>
            </div>

            <div className="service-section">
              <h3>Fix & Flip Cleaning Excellence</h3>
              <p>Maximize your return on investment with our specialized fix and flip cleaning and painting services. We understand the importance of presenting properties in their best light for maximum market appeal.</p>
              <ul>
                <li>Kitchen and bathroom sanitization</li>
                <li>Window cleaning inside and out</li>
                <li>Market-ready presentation for flips</li>
                <li>Professional contractor partnerships</li>
                <li>Timeline coordination with property investors</li>
                <li>Final touch-ups and staging preparation</li>
              </ul>
            </div>

            <div className="service-section">
              <h3>Estate Cleanouts</h3>
              <p>Compassionate and thorough estate cleanout services to help families during difficult times. We handle the complete clearing and cleaning of properties with respect and professionalism.</p>
              <ul>
                <li>Complete property cleanout services</li>
                <li>Respectful handling of personal belongings</li>
                <li>Donation coordination for usable items</li>
                <li>Deep cleaning after item removal</li>
                <li>Preparation for sale or rental</li>
                <li>Flexible scheduling to meet family needs</li>
                <li>Professional and compassionate service</li>
              </ul>
            </div>
          </div>

          <div className="cleaning-cta">
            <h3>Ready to Transform Your Property?</h3>
            <p>Contact us today for a free cleaning and painting quote!</p>
            <p><strong>Call: 267-970-3160</strong></p>
          </div>
        </div>
      </section>
    </main>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Girls Painting the Town</h3>
            <p>Professional painting and cleaning services</p>
            <p>Licensed & Insured</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Phone: 267-970-3160</p>
            <p>Phoenixville, PA</p>
            <p>Palace Ave, Claymont, DE</p>
          </div>
          
          <div className="footer-section">
            <h4>Service Areas</h4>
            <p>Delaware County</p>
            <p>Main Line</p>
            <p>Phoenixville, PA</p>
            <p>Claymont, DE</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Girls Painting the Town. All rights reserved.</p>
          <div className="footer-links">
            <a href="#terms">Terms of Use</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App

