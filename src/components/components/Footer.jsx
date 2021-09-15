import React from 'react';

import './style/footer.css';

export const Footer = (props) => {
  return (
    <>
      <div id='footer'>
        <div className='container'>
          <div className='col-md-6'>
            <div className='row'>
              <p>
                &copy; 2021
                {' '}
                <a href='https://besearchtech.com/' rel='nofollow'>
                  BeSearch
                </a>
                {' '}
                Beavioral and Technological Research
              </p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook' />
                    </a>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter' />
                    </a>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube' />
                    </a>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-instagram' />
                    </a>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-linkedin' />
                    </a>

                  </li>
                  <li>
                    {/**/}
                  </li>
                  <li>
                    {/**/}
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
