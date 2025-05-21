import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Form, Button, InputGroup, Tabs, Tab } from 'react-bootstrap';
import { FaUser, FaUserTie, FaUserShield } from 'react-icons/fa';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [key, setKey] = useState('profile');
  const [role, setRole] = useState(user ? user.role : 'customer');
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState(user ? user.phone : '');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

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

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ role, name, email, phone });
    alert(`Logged in as ${role}`);
    setKey('profile');
  };

  const renderLoginForm = () => (
    <Form className="p-4 shadow-sm rounded bg-white" style={{ maxWidth: '400px', margin: 'auto' }} onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId={`${role}-email`}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId={`${role}-password`}>
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button variant="outline-secondary" onClick={togglePassword} tabIndex={-1} type="button">
            {showPassword ? 'Hide' : 'Show'}
          </Button>
        </InputGroup>
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100 rounded-pill">
        Login as {role.charAt(0).toUpperCase() + role.slice(1)}
      </Button>
    </Form>
  );

  const renderSignupForm = () => (
    <Form className="p-4 shadow-sm rounded bg-white" style={{ maxWidth: '400px', margin: 'auto' }}>
      <Form.Group className="mb-3" controlId="customer-name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter full name" value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="customer-phone">
        <Form.Label>Phone Number</Form.Label>
        <InputGroup>
          <Form.Control type="tel" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <Button variant="outline-primary" onClick={sendOtp} tabIndex={-1} type="button">
            Send OTP
          </Button>
        </InputGroup>
      </Form.Group>

      {otpSent && (
        <Form.Group className="mb-3" controlId="customer-otp">
          <Form.Label>Enter OTP</Form.Label>
          <InputGroup>
            <Form.Control type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <Button variant="outline-success" onClick={verifyOtp} tabIndex={-1} type="button">
              Verify OTP
            </Button>
          </InputGroup>
        </Form.Group>
      )}

      <Form.Group className="mb-3" controlId="customer-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="customer-password">
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button variant="outline-secondary" onClick={togglePassword} tabIndex={-1} type="button">
            {showPassword ? 'Hide' : 'Show'}
          </Button>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="customer-repassword">
        <Form.Label>Re-enter Password</Form.Label>
        <InputGroup>
          <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Re-enter Password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
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
      <h1 className="text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Your Profile</h1>
      {user ? (
        <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', margin: 'auto' }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      ) : (
        <p className="text-center">You are not logged in.</p>
      )}
      <Tabs
        id="auth-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="profile" title="Profile" disabled>
          {/* Profile tab content shown above */}
        </Tab>
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

export default Profile;
