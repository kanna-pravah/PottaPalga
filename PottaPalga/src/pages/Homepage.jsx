import logo from '../assets/logo/logo.png';
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../styles/telugu-font.css';
import '../styles/theme.css';

const foodItems = [
  {
    id: 1,
    name: 'Spicy Chicken Curry',
    image: 'https://images.unsplash.com/photo-1617191517923-1a1a1a1a1a1a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Paneer Butter Masala',
    image: 'https://unsplash.com/photos/a-wooden-tray-filled-with-food-on-top-of-a-table-rH0zMql1sXQ',
  },
  {
    id: 3,
    name: 'Hyderabadi Biryani',
    image: 'https://images.unsplash.com/photo-1617191517923-1a1a1a1a1a1a?auto=format&fit=crop&w=800&q=80',
  },
];

const Homepage = () => {
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
        }}
      >
        {/* Logo image placeholder */}
        <img src={logo} alt="" style={{ maxWidth: '200px', height: 'auto', margin: '0 auto', display: 'block' }} />
        <Container className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <Button variant="warning" size="lg" style={{ minWidth: '150px' }}>
            Reserve
          </Button>
          <Button variant="success" size="lg" style={{ minWidth: '150px' }}>
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
              <h3>Order Online</h3>
              <p>Enjoy your favorite dishes delivered to your doorstep.</p>
              <Button variant="dark">Order Now</Button>
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
