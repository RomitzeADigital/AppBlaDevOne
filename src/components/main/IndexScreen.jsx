/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { startGoogleLogin, startFacebookLogin, removeRedirectIndex, startLoginEmailPassword } from '../../redux/actions/authActions';

import JsonData from '../../data/data.json';

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

import './main.css';
import { useForm } from '../../hooks/useForm';

export const IndexScreen = () => {
  // declare dispatch
  const dispatch = useDispatch();

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    dispatch(removeRedirectIndex());
  }, []);

  // --------------- login de usuario ------------------------
  // login por correo y contraseña
  const [formValues, handleImputChange] = useForm({
    email: '',
    password: '',
  });
  const { email, password } = formValues;
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };
  // login por gmail
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  // login por facebook
  const handleFacebookLogin = () => {
    dispatch(startFacebookLogin());
  };

  return (
    <>
      <Navigation data={landingPageData.Header} />
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 intro-text'>

                  <div className='form-group-email'>
                    <form onSubmit={handleLogin}>
                      <input type='email' id='email' name='email' onChange={handleImputChange} className='form-control-emal' placeholder='Correo Electrónico' />
                      <p className='help-block text-danger' />
                      <input type='password' id='password' name='password' onChange={handleImputChange} className='form-control-emal' placeholder='Contaseña' />
                      <p className='help-block text-danger' />
                      <button type='submit' className=''>
                        Login
                      </button>
                    </form>
                    <Link to='/auth/forgot-password' className='txt-a'>¿OLVIDASTE LA CONTRASEÑA?</Link>
                    <div className='col-md-6'>
                      <span onClick={handleFacebookLogin} className='rs_home'>
                        <img src='./img/svg/fb.svg' alt='' width={36} height={36} />
                      </span>
                      <span onClick={handleGoogleLogin} className='rs_home'>
                        <img src='./img/svg/gmail.svg' alt='' width={36} height={36} />
                      </span>
                      <p className='txt-a'>INICIAR SESIÓN CON FACEBOOK O GMAIL</p>

                    </div>
                    <Link to='/auth/register'>
                      <img src='./img/svg/btn_no_cuenta.svg' alt='' width={356} height={91} />
                    </Link>
                    <Link to='/auth/register' className='txt-a' style={{ color: '#2EC5F9' }}>registrate aquí</Link>
                    <p className='txt-a'>Y empieza a usar la versión gratuita</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id='services' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <img src='img/svg/title-br.svg' alt='' width={70} height={40} />
            <h2>ELIGE LA VERSIÓN</h2>
            <p>
              QUE DESEAS USAR
            </p>
          </div>
          <div className='row'>
            {landingPageData.Services ?
              landingPageData.Services.map((d, i) => (
                <div key={d.name} className='col-md-3'>
                  {' '}
                  <img src={d.img} alt='' width={220} height={213} />
                  {' '}
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <img src={d.icon} alt='' width={176} height={88} />
                    {' '}

                  </div>

                </div>

              )) :
              'loading'}
          </div>
          <div className='row'>
            <div className='col-md-3'>
              <p className='btn btn-custom btn-lg page-scroll'>ELEGIR</p>
              <div className='btn-img-price'>
                <a href='#services'>
                  <img src='img/svg/200mxn.svg' alt='' width={200} height={64} />
                </a>
              </div>
            </div>
            <div className='col-md-3'>
              <p className='btn btn-custom btn-lg page-scroll'>ELEGIR</p>
              <div className='btn-img-price'>
                <a href='#services'>
                  <img src='img/svg/150mxn.svg' alt='' width={200} height={64} />
                </a>
              </div>
            </div>
            <div className='col-md-3'>
              <p className='btn btn-custom btn-lg page-scroll'>ELEGIR</p>
              <div className='btn-img'>
                <a href='#services'>
                  <img src='img/svg/btn_continuar.png' alt='' width={463} height={50} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer data={landingPageData.Contact} />
    </>
  );
};
