import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  useEffect(() => {
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "name": "Girls Painting the Town",
      "description": "Professional residential and commercial painting services in Raleigh, NC and surrounding areas. Quality interior and exterior painting with attention to detail.",
      "url": "https://girlspaintingthetown.com",
      "telephone": "+1-919-555-0123",
      "email": "info@girlspaintingthetown.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Raleigh",
        "addressRegion": "NC",
        "postalCode": "27601",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "35.7796",
        "longitude": "-78.6382"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Raleigh",
          "containedInPlace": {
            "@type": "State",
            "name": "North Carolina"
          }
        },
        {
          "@type": "City",
          "name": "Durham",
          "containedInPlace": {
            "@type": "State",
            "name": "North Carolina"
          }
        },
        {
          "@type": "City",
          "name": "Chapel Hill",
          "containedInPlace": {
            "@type": "State",
            "name": "North Carolina"
          }
        },
        {
          "@type": "City",
          "name": "Cary",
          "containedInPlace": {
            "@type": "State",
            "name": "North Carolina"
          }
        }
      ],
      "serviceType": "Painting Services",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Painting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Interior Painting",
              "description": "Professional interior painting services for homes and businesses"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Exterior Painting",
              "description": "Expert exterior painting and protection for all types of buildings"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Painting",
              "description": "Professional painting services for commercial properties and businesses"
            }
          }
        ]
      },
      "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Licensed and Insured",
          "description": "Fully licensed and insured painting contractor"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "BBB Accredited",
          "description": "Better Business Bureau accredited business"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "Mary Fox",
        "jobTitle": "Owner and Lead Painter"
      },
      "numberOfEmployees": "5",
      "yearEstablished": "2018"
    } );
    
    document.head.appendChild(schemaScript);

    return () => {
      if (document.head.contains(schemaScript)) {
        document.head.removeChild(schemaScript);
      }
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <header>Header</header>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/reviews" element={<div>Reviews</div>} />
          <Route path="/cleaning" element={<div>Cleaning</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
