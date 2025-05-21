import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ButtonGroup, ToggleButton } from 'react-bootstrap';

const vegIcon = (
  <span style={{ color: 'green', fontWeight: 'bold', marginRight: '5px' }} title="Vegetarian">&#9679;</span>
);

const nonVegIcon = (
  <span style={{ color: 'red', fontWeight: 'bold', marginRight: '5px' }} title="Non-Vegetarian">&#9679;</span>
);

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('/src/data/menu.json')
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error('Error loading menu data:', error));
  }, []);

  const filteredMenuData = menuData.map((cuisine) => {
    const filteredCategories = cuisine.categories.map((category) => {
      const filteredItems = category.items.filter((item) => {
        if (filter === 'all') return true;
        if (filter === 'veg') return item.veg === true;
        if (filter === 'nonveg') return item.veg === false;
        return true;
      });
      return { ...category, items: filteredItems };
    });
    return { ...cuisine, categories: filteredCategories };
  });

  return (
    <Container className="my-5">
      <h1 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", textAlign: 'center' }}>Menu</h1>

      <ButtonGroup className="mb-4 d-flex justify-content-center" aria-label="Veg Non-Veg Filter">
        <ToggleButton
          id="filter-all"
          type="radio"
          variant="outline-primary"
          name="filter"
          value="all"
          checked={filter === 'all'}
          onChange={(e) => setFilter(e.currentTarget.value)}
        >
          All
        </ToggleButton>
        <ToggleButton
          id="filter-veg"
          type="radio"
          variant="outline-success"
          name="filter"
          value="veg"
          checked={filter === 'veg'}
          onChange={(e) => setFilter(e.currentTarget.value)}
        >
          {vegIcon} Veg
        </ToggleButton>
        <ToggleButton
          id="filter-nonveg"
          type="radio"
          variant="outline-danger"
          name="filter"
          value="nonveg"
          checked={filter === 'nonveg'}
          onChange={(e) => setFilter(e.currentTarget.value)}
        >
          {nonVegIcon} Non-Veg
        </ToggleButton>
      </ButtonGroup>

      {filteredMenuData.map((cuisine, idx) => (
        <div key={idx} className="mb-5">
          <h2 style={{ fontFamily: "'Playfair Display', serif", borderBottom: '2px solid #800000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
            {cuisine.cuisine}
          </h2>
          {cuisine.categories.map((category, cidx) => (
            <div key={cidx} className="mb-4">
              <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#800000', marginBottom: '1rem' }}>{category.name}</h4>
              <Row xs={1} md={2} lg={3} className="g-4">
                {category.items.length === 0 ? (
                  <p style={{ fontStyle: 'italic', color: '#666' }}>No items available</p>
                ) : (
                  category.items.map((item, iidx) => (
                    <Col key={iidx}>
                      <Card className="h-100 shadow-sm">
                        <Card.Body>
                          <Card.Title style={{ fontWeight: '700' }}>
                            {item.veg ? vegIcon : nonVegIcon}
                            {item.name}
                            <span style={{ float: 'right', color: '#800000' }}>{item.price}</span>
                          </Card.Title>
                          <Card.Text style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>{item.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                )}
              </Row>
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
};

export default Menu;
