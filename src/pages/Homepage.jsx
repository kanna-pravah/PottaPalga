import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/telugu-font.css';
import '../styles/theme.css';
import logo from '../assets/logo/logo.png';

const foodItems = [
  {
    id: 1,
    name: 'Kodi guddu kheema',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Chavan Prash pappu',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Kukka naakina bokka',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
  },
];

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Upper block with maroon background */}
      <div
        style={{
          backgroundColor: '#800000',
          color: '#ffd700',
          padding: '2rem 0',
          textAlign: 'center',
          fontFamily: "'Noto Serif Telugu', serif",
          overflowX: 'hidden',
        }}
      >
        {/* Logo image container */}
        <div className="logo-container" style={{ maxWidth: '100%', padding: '0 1rem', margin: '0 auto' }}>
          <img
            src={logo}
            alt="Potta Palga Logo"
            className="homepage-logo"
            style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
          />
        </div>
        <Container className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <Button
            variant="warning"
            size="lg"
            style={{ minWidth: '150px' }}
            onClick={() => navigate('/reservation')}
          >
            Reserve
          </Button>
          <Button
            variant="success"
            size="lg"
            style={{ minWidth: '150px' }}
            onClick={() => navigate('/orderonline')}
          >
            Order Online
          </Button>
        </Container>
      </div>

      {/* Horizontal scrollable food items */}
      <Container fluid className="my-5">
        <h2 className="text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Popular Dishes
        </h2>
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '1rem',
            paddingBottom: '1rem',
            scrollSnapType: 'x mandatory',
          }}
        >
          {foodItems.map((item) => (
            <Card
              key={item.id}
              style={{ minWidth: '250px', scrollSnapAlign: 'start' }}
              className="shadow-sm"
            >
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>

      {/* Order online and another section */}
      <Container className="mb-5">
        <Row>
          <Col md={6} className="mb-4">
            <div
              style={{
                backgroundColor: '#f0ad4e',
                padding: '2rem',
                borderRadius: '8px',
                color: '#333',
                textAlign: 'center',
                fontFamily: "'Noto Sans Telugu', sans-serif",
              }}
            >
              <h3>Ratings</h3>
              <p>Rate our art of hospitality and cooking.</p>
              <Button variant="dark" onClick={() => navigate('/stats')}>Rate now</Button>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div
              style={{
                backgroundColor: '#6c757d',
                padding: '2rem',
                borderRadius: '8px',
                color: '#fff',
                textAlign: 'center',
                fontFamily: "'Noto Sans Telugu', sans-serif",
              }}
            >
              <h3>Special Offers</h3>
              <p>Check out our latest discounts and combo deals.</p>
              <Button variant="warning">View Offers</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
