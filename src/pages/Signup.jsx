import React, { useState } from 'react';
import { Tabs, Tab, Form, Button, InputGroup } from 'react-bootstrap';
import { FaUser, FaUserTie, FaUserShield } from 'react-icons/fa';

const Signup = () => {
  const [key, setKey] = useState('customer');
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const renderForm = (role) => (
    <Form className="p-4 shadow-sm rounded bg-white" style={{ maxWidth: '400px', margin: 'auto' }}>
      <Form.Group className="mb-3" controlId={`${role}-name`}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId={`${role}-email`}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId={`${role}-phone`}>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Enter phone number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId={`${role}-password`}>
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" />
          <Button variant="outline-secondary" onClick={togglePassword} tabIndex={-1}>
            {showPassword ? 'Hide' : 'Show'}
          </Button>
        </InputGroup>
      </Form.Group>

      {role === 'staff' && (
        <Form.Group className="mb-3" controlId="staff-role">
          <Form.Label>Job Role</Form.Label>
          <Form.Select>
            <option value="">Select role</option>
            <option value="waiter">Waiter</option>
            <option value="cook">Cook</option>
            <option value="owner">Owner</option>
          </Form.Select>
        </Form.Group>
      )}

      <Button variant="primary" type="submit" className="w-100 rounded-pill">
        Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
      </Button>
    </Form>
  );

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Sign Up</h1>
      <Tabs
        id="signup-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="customer" title={<><FaUser /> Customer</>}>
          {renderForm('customer')}
        </Tab>
        <Tab eventKey="staff" title={<><FaUserTie /> Staff</>}>
          {renderForm('staff')}
        </Tab>
        <Tab eventKey="admin" title={<><FaUserShield /> Admin</>}>
          {renderForm('admin')}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Signup;
