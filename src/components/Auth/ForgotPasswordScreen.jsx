import React, { useEffect, useState } from 'react';

import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { resetPassword } from '../../redux/actions/authActions';

import { useForm } from '../../hooks/useForm';

import './forgotPassword.css';

import line from '../../img/svg/line.svg';
import btn_crear_cuenta8 from '../../img/btn_crear_cuenta-8.png';
import candado from '../../img/candado.png';

export const ForgotPasswordScreen = () => {

  const dispatch = useDispatch();

  const [redirctTo, setRedirctTo] = useState(false);

  const { redirectIndexToReset } = useSelector((state) => state.redirect);

  useEffect(() => {
    if (redirectIndexToReset) {
      setRedirctTo(redirectIndexToReset);
    }
  }, [redirectIndexToReset]);

  const [formValues, handleImputChange] = useForm({
    email: '',
  });

  const { email } = formValues;

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      return false;
    }
    return true;
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(resetPassword(email));
    }
  };

  if (redirctTo) {
    return <Redirect to='/' />;
  }
  return (
    <>
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <p className='btn_titulo'>
                  ¿Tienes problemas para iniciar sesión?
                </p>
                <div className='col-md-8 col-md-offset-2 intro-text'>
                  <div className='img-center'>

                    <img src={candado} alt='' width={1000} height={177} />
                  </div>
                  <form className='form-group-email' onSubmit={handleResetPassword}>
                    <input type='email' id='email' name='email' value={email} onChange={handleImputChange} className='form-control-emal' placeholder='Correo Electrónico' />
                    <br />
                    <button type='submit' className=''>
                      Restablecer
                    </button>
                  </form>
                  <div className='form-group-email'>
                    <p className='help-block text-danger' />
                    <img src={line} alt='' width={368} height={40} />
                    <Link to='/auth/register'>
                      <img src={btn_crear_cuenta8} alt='' width={323} height={54} />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
