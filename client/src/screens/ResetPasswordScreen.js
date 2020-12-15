import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import {
  resetPassword,
  clearPasswordState
} from '../redux/actions/userActions';
import parseQuery from '../utils/parseQueryParams';

const ResetPasswordScreen = ({ location, history }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();
  const passwordReset = useSelector(state => state.passwordReset);

  const { loading, error, message } = passwordReset;

  const query = location.search ? parseQuery(location.search) : {};
  const { token, email } = query;

  useEffect(() => {
    if (!token || !email) history.push('/');
    if (message) {
      setPassword('');
      setConfirmPassword('');
    }
    return () => {
      dispatch(clearPasswordState);
    };
  }, [history, token, email, dispatch, message]);

  const submitHandler = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passowrds don't match");
    } else {
      setPasswordError('');
      dispatch(resetPassword(token, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Reset Password</h1>
      {message ? (
        <Message variant='success'>
          {message}
          <Link to='/login' className='ml-2'>
            Sign In
          </Link>
        </Message>
      ) : (
        <>
          {passwordError && <Message variant='danger'>{passwordError}</Message>}
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={e => setPassword(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={e =>
                  setConfirmPassword(e.target.value)
                }></Form.Control>
            </Form.Group>

            <Button type='submit' variant={'primary'}>
              Reset Password
            </Button>
          </Form>
        </>
      )}
    </FormContainer>
  );
};

export default ResetPasswordScreen;
