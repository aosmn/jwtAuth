import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import {
  sendRecoverEmail,
  clearPasswordState
} from '../redux/actions/userActions';

const ForgotPasswordScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const passwordReset = useSelector(state => state.passwordReset);

  const { loading, error, message } = passwordReset;

  const redirect = location.search ? location.search.split('=')[1] : '/';
  useEffect(() => {
    return () => {
      dispatch(clearPasswordState);
    };
  }, [dispatch]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(sendRecoverEmail(email));
  };

  return (
    <FormContainer>
      <h1>Forgot Password</h1>
      {message && <Message variant='success'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={e => setEmail(e.target.value)}></Form.Control>
        </Form.Group>

        <Button type='submit' variant={'primary'}>
          Reset Password
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Cancel
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default ForgotPasswordScreen;
