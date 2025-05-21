import React, { useState } from 'react';
import { Card, Row, Col, Tabs, Tab, Form, Button, ListGroup } from 'react-bootstrap';
import StatsChart from '../components/StatsChart';

const Stats = () => {
  // Mock data for stats
  const statsData = {
    tablesFilledToday: 25,
    vipGuestsToday: 5,
    reservationsThisWeek: 40,
  };

  // Mock previous ratings and compliments
  const [ratings, setRatings] = useState([
    { id: 1, rating: 3, compliment: 'Naatu kodi kallu baaga udikaay andi. kaani chepala chethule inka kaalalsindhi.' },
    { id: 2, rating: 1, compliment: 'Chef Dinesh anta evado.. vaaniki peethalaki, pitthulaki theda cheppandi.' },
    { id: 3, rating: 5, compliment: 'Sousheel! ni service bagundhi. malli ostha.' },
    { id: 4, rating: 4 , compliment: 'Aah Ah Aashish! aaakulo annam pettadam nerchuko.' },
  ]);

  const [newRating, setNewRating] = useState(0);
  const [newCompliment, setNewCompliment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRating > 0 && newCompliment.trim() !== '') {
      const newEntry = {
        id: ratings.length + 1,
        rating: newRating,
        compliment: newCompliment.trim(),
      };
      setRatings([newEntry, ...ratings]);
      setNewRating(0);
      setNewCompliment('');
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Statistics & Reports</h1>
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center shadow-sm p-3">
            <Card.Body>
              <Card.Title>Tables Filled Today</Card.Title>
              <Card.Text style={{ fontSize: '2rem', fontWeight: '700' }}>{statsData.tablesFilledToday}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm p-3">
            <Card.Body>
              <Card.Title>VIP Guests Today</Card.Title>
              <Card.Text style={{ fontSize: '2rem', fontWeight: '700' }}>{statsData.vipGuestsToday}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm p-3">
            <Card.Body>
              <Card.Title>Reservations This Week</Card.Title>
              <Card.Text style={{ fontSize: '2rem', fontWeight: '700' }}>{statsData.reservationsThisWeek}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="mb-3">Reservation Trends</h2>
      <StatsChart />

      {/* Tabs Section */}
      <Tabs defaultActiveKey="stats" id="stats-tabs" className="mt-5">
        <Tab eventKey="stats" title="Stats">
          {/* Existing content remains unchanged */}
        </Tab>
        <Tab eventKey="rateArt" title="Rate Our Art">
          <div className="mt-4">
            <h3>Rate Our Art</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="ratingSelect" className="mb-3">
                <Form.Label>Rating (1 to 5 stars)</Form.Label>
                <Form.Select
                  value={newRating}
                  onChange={(e) => setNewRating(parseInt(e.target.value))}
                  required
                >
                  <option value={0}>Select rating</option>
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="complimentText" className="mb-3">
                <Form.Label>Compliment</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newCompliment}
                  onChange={(e) => setNewCompliment(e.target.value)}
                  placeholder="Write your compliment here"
                  required
                />
              </Form.Group>
              <Button type="submit" variant="primary">Submit</Button>
            </Form>

            <h4 className="mt-5">Previous Ratings & Compliments</h4>
            <ListGroup>
              {ratings.map(({ id, rating, compliment }) => (
                <ListGroup.Item key={id}>
                  <strong>{'⭐'.repeat(rating)}</strong> - {compliment}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Stats;
