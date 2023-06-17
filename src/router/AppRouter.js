import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams,Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Layout from "../layouts/Layout";
import Auth from "../views/auth/Auth";
import Profile from "../views/auth/Profile";
import GantiPassword from "../views/auth/GantiPassword";
import LupaPassword from "../views/auth/LupaPassword";
import Snowfall from 'react-snowfall'

// front
import FrontLayout from "../views/themes/layouts/FrontLayout";
import Index from "../views/themes/01/Index";

export default function AppRouter() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.authReducer);
  
  return (
    <BrowserRouter>         
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Auth />} /> 
          <Route path="/verif" element={<Verif />} /> 
          <Route path="/ganti-password/:id/:url" element={<GantiPassword />} /> 
          <Route path="/verif-success/:id/:url" element={<VerifSuccess />} />
          <Route path="/profile" element={
          <ProtectedRoute isAuth={state.isAuth}>
            <Profile />
          </ProtectedRoute>
            } /> 
          <Route path="/lupa-password" element={<LupaPassword />} /> 
        </Route>

        <Route path="/front" element={<FrontLayout />}>
          <Route index element={<Index />} />
        </Route>

      </Routes>
      {/* {JSON.stringify(state)} */}
    </BrowserRouter>
  );
}


function Verif() {
  
  const state = useSelector(state => state.authReducer);
  return (
    <div style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <center>
        <div style={{ width: '40%' }}>
          <h3 style={{ color: 'grey' }}>{state.msg}</h3>
        </div>

      </center>
    </div>
  )
}

function Home(){
  return(
    <div style={{ height: 400, width: 400, background: '#282c34', position: 'relative' }}>
    <Snowfall />
  </div>
  
  )
}


function VerifSuccess() {

  const params = useParams();

  const [vsuccess, setVsuccess] = useState(false);
  const req = () => {
    axios.get('http://shop.simpus-web.my.id/public/account-activation-process/' + params.id + '/' + params.url)
      .then(res => {
        setVsuccess(true)
      }).catch(err => {
        console.log(err)
        setVsuccess(false)
      })
  }

  const navigate = useNavigate();
  const state = useSelector(state => state);

  useEffect(() => {
    req();
  }, [])

  return (
    <div style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <center>
        <div style={{ width: '40%' }}>
          <h3 style={{ color: 'grey' }}>{!vsuccess ? 'Verifikasi gagal' : 'Verifikasi Sukses'}</h3>
        </div>

      </center>
    </div>
  )
}

export const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};