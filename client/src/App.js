import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/HomeScreen';
import Login from './screens/LoginScreen';
import ResetPassword from './screens/ResetPasswordScreen';
import ForgotPassword from './screens/ForgotPasswordScreen';
import Register from './screens/RegisterScreen';
import './App.scss';
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/reset-password' component={ResetPassword} />
          <Route path='/forgot-password' component={ForgotPassword} />

          <Route exact path='/' component={Home} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
