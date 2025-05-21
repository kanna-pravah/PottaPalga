import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Button, Form, Row, Col, Card } from 'react-bootstrap';

const initialControls = [
  { id: 1, name: 'Max Reservation Limit', value: 50, enabled: true },
  { id: 2, name: 'Allow Walk-ins', value: 'Yes', enabled: true },
  { id: 3, name: 'Special Event Mode', value: 'Off', enabled: false },
  { id: 4, name: 'Multi-location Management', value: 'Enabled', enabled: true },
  { id: 5, name: 'Guest Data Sharing', value: 'Enabled', enabled: true },
];

const IncreaseControl = () => {
  const [controls, setControls] = useState(initialControls);
  const [key, setKey] = useState('controls');
  const [menuData, setMenuData] = useState([]);
  const [newCuisineName, setNewCuisineName] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [selectedCuisineIndex, setSelectedCuisineIndex] = useState(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  useEffect(() => {
    fetch('/src/data/menu.json')
      .then((res) => res.json())
      .then((data) => setMenuData(data))
      .catch((err) => console.error('Failed to load menu data:', err));
  }, []);

  const toggleControl = (id) => {
    setControls((prev) =>
      prev.map((control) =>
        control.id === id ? { ...control, enabled: !control.enabled } : control
      )
    );
  };

  const updateValue = (id, newValue) => {
    setControls((prev) =>
      prev.map((control) =>
        control.id === id ? { ...control, value: newValue } : control
      )
    );
  };

  // Menu modification handlers
  const updateCuisineName = (index, newName) => {
    const updatedMenu = [...menuData];
    updatedMenu[index].cuisine = newName;
    setMenuData(updatedMenu);
  };

  const addCuisine = () => {
    if (newCuisineName.trim() === '') return;
    setMenuData([...menuData, { cuisine: newCuisineName.trim(), categories: [] }]);
    setNewCuisineName('');
  };

  const deleteCuisine = (index) => {
    const updatedMenu = [...menuData];
    updatedMenu.splice(index, 1);
    setMenuData(updatedMenu);
  };

  const addCategory = () => {
    if (selectedCuisineIndex === null || newCategoryName.trim() === '') return;
    const updatedMenu = [...menuData];
    updatedMenu[selectedCuisineIndex].categories.push({ name: newCategoryName.trim(), items: [] });
    setMenuData(updatedMenu);
    setNewCategoryName('');
  };

  const updateCategoryName = (cuisineIndex, categoryIndex, newName) => {
    const updatedMenu = [...menuData];
    updatedMenu[cuisineIndex].categories[categoryIndex].name = newName;
    setMenuData(updatedMenu);
  };

  const deleteCategory = (cuisineIndex, categoryIndex) => {
    const updatedMenu = [...menuData];
    updatedMenu[cuisineIndex].categories.splice(categoryIndex, 1);
    setMenuData(updatedMenu);
  };

  const addItem = (cuisineIndex, categoryIndex) => {
    const updatedMenu = [...menuData];
    updatedMenu[cuisineIndex].categories[categoryIndex].items.push({
      name: '',
      price: '',
      description: '',
      veg: true,
    });
    setMenuData(updatedMenu);
  };

  const updateItem = (cuisineIndex, categoryIndex, itemIndex, field, value) => {
    const updatedMenu = [...menuData];
    updatedMenu[cuisineIndex].categories[categoryIndex].items[itemIndex][field] = value;
    setMenuData(updatedMenu);
  };

  const deleteItem = (cuisineIndex, categoryIndex, itemIndex) => {
    const updatedMenu = [...menuData];
    updatedMenu[cuisineIndex].categories[categoryIndex].items.splice(itemIndex, 1);
    setMenuData(updatedMenu);
  };

  return (
    <div className="container my-4">
      <h1>Increase Control</h1>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="controls" title="Control Settings">
          <p>Manage reservations from the back-office or any location. Control multiple restaurants and share guest data.</p>
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>Control</th>
                <th>Value</th>
                <th>Enabled</th>
              </tr>
            </thead>
            <tbody>
              {controls.map((control) => (
                <tr key={control.id}>
                  <td>{control.name}</td>
                  <td>
                    <input
                      type="text"
                      value={control.value}
                      onChange={(e) => updateValue(control.id, e.target.value)}
                      disabled={!control.enabled}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={control.enabled}
                      onChange={() => toggleControl(control.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Tab>
        <Tab eventKey="menu" title="Modify Menu Card">
          <p>Modify the menu card here.</p>
          <div className="mb-3">
            <h5>Add New Cuisine</h5>
            <input
              type="text"
              className="form-control"
              value={newCuisineName}
              onChange={(e) => setNewCuisineName(e.target.value)}
              placeholder="Cuisine name"
            />
            <Button className="mt-2" onClick={addCuisine}>Add Cuisine</Button>
          </div>
          {menuData.map((cuisine, cIndex) => (
            <Card key={cIndex} className="mb-3">
              <Card.Body>
                <Row className="align-items-center mb-2">
                  <Col md={8}>
                    <Form.Control
                      type="text"
                      value={cuisine.cuisine}
                      onChange={(e) => updateCuisineName(cIndex, e.target.value)}
                    />
                  </Col>
                  <Col md={4} className="text-end">
                    <Button variant="danger" size="sm" onClick={() => deleteCuisine(cIndex)}>Delete Cuisine</Button>
                  </Col>
                </Row>
                <div className="mb-3">
                  <h6>Categories</h6>
                  <Row className="mb-2">
                    <Col md={8}>
                      <Form.Control
                        type="text"
                        value={selectedCuisineIndex === cIndex ? newCategoryName : ''}
                        onChange={(e) => {
                          setSelectedCuisineIndex(cIndex);
                          setNewCategoryName(e.target.value);
                        }}
                        placeholder="New category name"
                      />
                    </Col>
                    <Col md={4}>
                      <Button onClick={addCategory}>Add Category</Button>
                    </Col>
                  </Row>
                  {cuisine.categories.map((category, catIndex) => (
                    <Card key={catIndex} className="mb-2 p-2">
                      <Row className="align-items-center">
                        <Col md={8}>
                          <Form.Control
                            type="text"
                            value={category.name}
                            onChange={(e) => updateCategoryName(cIndex, catIndex, e.target.value)}
                          />
                        </Col>
                        <Col md={4} className="text-end">
                          <Button variant="danger" size="sm" onClick={() => deleteCategory(cIndex, catIndex)}>Delete Category</Button>
                        </Col>
                      </Row>
                      <div className="mt-2">
                        <h6>Items</h6>
                        {category.items.map((item, itemIndex) => (
                          <Card key={itemIndex} className="mb-2 p-2">
                            <Row className="align-items-center">
                              <Col md={3}>
                                <Form.Control
                                  type="text"
                                  placeholder="Name"
                                  value={item.name}
                                  onChange={(e) => updateItem(cIndex, catIndex, itemIndex, 'name', e.target.value)}
                                />
                              </Col>
                              <Col md={2}>
                                <Form.Control
                                  type="text"
                                  placeholder="Price"
                                  value={item.price}
                                  onChange={(e) => updateItem(cIndex, catIndex, itemIndex, 'price', e.target.value)}
                                />
                              </Col>
                              <Col md={4}>
                                <Form.Control
                                  type="text"
                                  placeholder="Description"
                                  value={item.description}
                                  onChange={(e) => updateItem(cIndex, catIndex, itemIndex, 'description', e.target.value)}
                                />
                              </Col>
                              <Col md={2}>
                                <Form.Check
                                  type="checkbox"
                                  label="Veg"
                                  checked={item.veg}
                                  onChange={(e) => updateItem(cIndex, catIndex, itemIndex, 'veg', e.target.checked)}
                                />
                              </Col>
                              <Col md={1} className="text-end">
                                <Button variant="danger" size="sm" onClick={() => deleteItem(cIndex, catIndex, itemIndex)}>Delete</Button>
                              </Col>
                            </Row>
                          </Card>
                        ))}
                        <Button size="sm" onClick={() => addItem(cIndex, catIndex)}>Add Item</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))}
        </Tab>
      </Tabs>
    </div>
  );
};

export default IncreaseControl;
