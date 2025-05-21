import React, { useState, useContext } from 'react';
import { Form, Button, InputGroup, Tabs, Tab } from 'react-bootstrap';
import { FaUser, FaUserTie, FaUserShield } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [key, setKey] = useState('login');
  const [role, setRole] = useState('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const sendOtp = () => {
    if (phone) {
      setOtpSent(true);
      alert(`OTP sent to ${phone}`);
    } else {
      alert('Please enter phone number');
    }
  };

  const verifyOtp = () => {
    if (otp === '1234') {
      alert('OTP verified! You can now sign up.');
    } else {
      alert('Invalid OTP');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // For demo, accept any input as valid login
    // Set user in context with role
    setUser({ role });
    // Redirect based on role
    if (role === 'staff') {
      navigate('/tables'); // or staff dashboard
    } else if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  const renderLoginForm = () => (
    <Form onSubmit={handleLoginSubmit} className="p-4 shadow-sm rounded bg-white" style={{ maxWidth: '400px', margin: 'auto' }}>
      <Form.Group className="mb-3" controlId={`${role}-email`}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId={`${role}-password`}>
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Button variant="outline-secondary" onClick={togglePassword} tabIndex={-1} type="button">
            {showPassword ? 'Hide' : 'Show'}
          </Button>
        </InputGroup>
      </Form.Group>

      {role === 'staff' && (
        <div className="mb-3 text-info">
          Staff login: Please use your staff credentials.
        </div>
      )}

      <Button variant="primary" type="submit" className="w-100 rounded-pill">
        Login as {role.charAt(0).toUpperCase() + role.slice(1)}
      </Button>
    </Form>
  );

  const renderSignupForm = () => (
    <Form className="p-4 shadow-sm rounded bg-white" style={{ maxWidth: '400px', margin: 'auto' }}>
      <Form.Group className="mb-3" controlId="signup-customer-name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="signup-customer-phone">
        <Form.Label>Phone Number</Form.Label>
        <InputGroup>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button variant="outline-primary" onClick={sendOtp} tabIndex={-1} type="button">
            Send OTP
          </Button>
        </InputGroup>
      </Form.Group>

      {otpSent && (
        <Form.Group className="mb-3" controlId="signup-customer-otp">
          <Form.Label>Enter OTP</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Button variant="outline-success" onClick={verifyOtp} tabIndex={-1} type="button">
              Verify OTP
            </Button>
          </InputGroup>
        </Form.Group>
      )}

      <Form.Group className="mb-3" controlId="signup-customer-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="signup-customer-password">
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outline-secondary" onClick={togglePassword} tabIndex={-1} type="button">
            {showPassword ? 'Hide' : 'Show'}
          </Button>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="signup-customer-repassword">
        <Form.Label>Re-enter Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Re-enter Password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <Button variant="outline-secondary" onClick={togglePassword} tabIndex={-1} type="button">
            {showPassword ? 'Hide' : 'Show'}
          </Button>
        </InputGroup>
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100 rounded-pill">
        Sign Up as Customer
      </Button>
    </Form>
  );

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Welcome to Potta Palga</h1>
      <Tabs
        id="auth-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="login" title="Login">
          <div className="d-flex justify-content-center mb-3">
            <Button
              variant={role === 'customer' ? 'primary' : 'outline-primary'}
              className="me-2"
              onClick={() => setRole('customer')}
            >
              <FaUser /> Customer
            </Button>
            <Button
              variant={role === 'staff' ? 'primary' : 'outline-primary'}
              className="me-2"
              onClick={() => setRole('staff')}
            >
              <FaUserTie /> Staff
            </Button>
            <Button
              variant={role === 'admin' ? 'primary' : 'outline-primary'}
              onClick={() => setRole('admin')}
            >
              <FaUserShield /> Admin
            </Button>
          </div>
          {renderLoginForm()}
        </Tab>
        <Tab eventKey="signup" title="Sign Up">
          {renderSignupForm()}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Login;
