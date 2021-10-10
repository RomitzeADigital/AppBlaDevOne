import React from 'react';

import { Link } from 'react-router-dom';

import './forgotPassword.css';

import btn_enviar from '../../img/svg/btn_enviar.svg';
import line from '../../img/svg/line.svg';
import btn_crear_cuenta8 from '../../img/btn_crear_cuenta-8.png';
import candado from '../../img/candado.png';

export const ForgotPasswordScreen = () => {
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
                  <div className='form-group-email'>
                    <input type='email' id='email' name='email' className='form-control-emal' placeholder='Correo Electrónico' />
                    <p className='help-block text-danger' />

                    <a>
                      <img src={btn_enviar} alt='' width={693} height={40} />
                    </a>
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
