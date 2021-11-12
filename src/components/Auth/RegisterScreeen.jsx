import React, { useEffect, useState } from 'react';

import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import JsonData from '../../data/data.json';

import { removeError, setError } from '../../redux/actions/uiActions';
import { starRegisterWithEmailPasswordName } from '../../redux/actions/authActions';

import { useForm } from '../../hooks/useForm';

import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

import Asset8 from '../../img/svg/Asset 8.svg';
import btn_iniciar_sesion from '../../img/svg/btn_iniciar_sesion.svg';

import './register.css';

export const RegisterScreeen = () => {

  const dispatch = useDispatch();

  const [redirctTo, setRedirctTo] = useState(false);

  const { msgError } = useSelector((state) => state.ui);
  const { redirectIndex } = useSelector((state) => state.redirect);

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    if (redirectIndex) {
      setRedirctTo(redirectIndex);
    }
  }, [redirectIndex]);

  const [formValues, handleImputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
    listContrie: '',
  });

  const { name, email, password, password2, listContrie } = formValues;

  const isFormValid = () => {
    if (name.trim().length < 2) {
      dispatch(setError('El nombre debe contener mas de dos caracteres'));
      return false;
    } if (!validator.isEmail(email)) {
      dispatch(setError('El email no es valido'));
      return false;
    } if (password !== password2 || password.length < 5) {
      dispatch(setError('La contraseña no corresponde o el numero de caracteres debe ser mayor a 5 caracteres'));
      return false;
    }

    dispatch(removeError());
    return true;

  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(starRegisterWithEmailPasswordName(email, password, name, listContrie));
    }
  };

  if (redirctTo) {
    return <Redirect to='/' />;
  }
  return (
    <div>
      <Navigation data={landingPageData.Header} />
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>

                <div className='col-md-6 col-md-offset-2 intro-text'>
                  <form onSubmit={handleRegister} autoComplete='off'>
                    {msgError && (
                      <div className='auth__alert-error'>
                        {msgError}
                      </div>
                    )}
                    <div className='form-group-email'>
                      <input
                        type='name'
                        id='name'
                        name='name'
                        className='form-control-emal'
                        placeholder='Nombre Completo'
                        value={name}
                        onChange={handleImputChange}
                      />
                      <p className='help-block text-danger' />
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control-emal'
                        placeholder='Correo Electrónico'
                        value={email}
                        onChange={handleImputChange}
                      />
                      <p className='help-block text-danger' />
                      <input
                        type='name'
                        id='lista-paises'
                        name='listContrie'
                        className='form-control-emal'
                        placeholder='Lista de paises'
                        value={listContrie}
                        onChange={handleImputChange}
                      />
                      <p className='help-block text-danger' />
                      <input
                        type='password'
                        id='password'
                        name='password'
                        className='form-control-emal'
                        placeholder='Contraseña'
                        value={password}
                        onChange={handleImputChange}
                      />
                      <p className='help-block text-danger' />
                      <input
                        type='password'
                        id='password2'
                        name='password2'
                        className='form-control-emal'
                        placeholder='Confirma tu Contraseña'
                        value={password2}
                        onChange={handleImputChange}
                      />
                      <p className='help-block text-danger' />
                      {/* <a>
                        <img src={btn_registrar} alt='' width={335} height={40} />
                        <p className='help-block text-danger' />
                      </a> */}
                      <button type='submit' className=''>
                        Registrar
                      </button>
                      <img src={Asset8} alt='' width={368} height={40} />
                      <Link to='/'>
                        <img src={btn_iniciar_sesion} alt='' width={323} height={54} />
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Footer data={landingPageData.Contact} />
    </div>
  );

};
