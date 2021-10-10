import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import JsonData from '../../data/data.json';

import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

import btn_registrar from '../../img/svg/btn_registrar.svg';
import Asset8 from '../../img/svg/Asset 8.svg';
import btn_iniciar_sesion from '../../img/svg/btn_iniciar_sesion.svg';

import './register.css';

export const RegisterScreeen = () => {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation data={landingPageData.Header} />
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>

                <div className='col-md-6 col-md-offset-2 intro-text'>

                  <div className='form-group-email'>
                    <input type='name' id='name' name='name' className='form-control-emal' placeholder='Nombre Completo' />
                    <p className='help-block text-danger' />
                    <input type='email' id='email' name='email' className='form-control-emal' placeholder='Correo Electrónico' />
                    <p className='help-block text-danger' />
                    <input type='name' id='lista-paises' name='name' className='form-control-emal' placeholder='Lista de paises' />
                    <p className='help-block text-danger' />
                    <input type='password' id='password' name='password' className='form-control-emal' placeholder='Contraseña' />
                    <p className='help-block text-danger' />
                    <input type='password' id='password' name='password' className='form-control-emal' placeholder='Confirma tu Contraseña' />
                    <p className='help-block text-danger' />
                    <a>
                      <img src={btn_registrar} alt='' width={335} height={40} />
                      <p className='help-block text-danger' />
                    </a>
                    <img src={Asset8} alt='' width={368} height={40} />
                    <Link to='/'>
                      <img src={btn_iniciar_sesion} alt='' width={323} height={54} />
                    </Link>
                  </div>

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
