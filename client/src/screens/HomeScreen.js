import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const HomeScreen = ({ history }) => {
  // const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);

  const { user } = userInfo;

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [history, user]);

  return <h1>Welcome home</h1>;
};

export default HomeScreen;
