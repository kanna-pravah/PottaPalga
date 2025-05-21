import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const orderItems = [
  {
    id: 1,
    name: 'Kodi guddu kheema',
    description: 'Spicy minced chicken with traditional spices.',
    price: '₹250',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Chavan Prash pappu',
    description: 'Healthy lentil dish with chavanprash flavor.',
    price: '₹180',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Kukka naakina bokka',
    description: 'Tender chicken cooked with aromatic herbs.',
    price: '₹300',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
  },
];

const OrderOnline = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Order Online</h1>
      <Row className="g-4">
        {orderItems.map((item) => (
          <Col key={item.id} xs={12} md={6} lg={4}>
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src={item.image} alt={item.name} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span style={{ fontWeight: '700', fontSize: '1.2rem' }}>{item.price}</span>
                  <Button variant="success">Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OrderOnline;
