import {useEffect} from 'react'
import './App.css';
import './assets/css/all.css';
import './assets/css/Auth.css';
import './assets/css/Header.css';
import AppRouter from './router/AppRouter';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.authReducer);
  
  const timeout = () => {
    setTimeout(() => {
      console.log("Token telah berakhir")
      dispatch({
        type: 'SET_LOGOUT'
      })

    }, state.expires)
  }

  useEffect(() => {
    timeout() 
  }, [])
  return  <AppRouter/>
}

export default App;
