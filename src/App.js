import React, { Component } from 'react';
import  './App.css';

import Pin from './components/Pin/Pin';




class App extends Component {
 

  render() {
    return (
      <div>
        <div class="container">

          <h1 class="text-center">Marburg-Gastro</h1>
          <h2 class="h3 subline text-center">Alles auf einem Blick</h2>

          <div class="map">
            <ul class="map-markers">
              <Pin /> 
            





              <li class="map-marker map-marker-chicago">

                <a href="#">CAFE 5</a>

                <div class="map-marker-info">

                  <div class="map-marker-info-inner animate-bounce-in">

                    <header>

                      <h2>CAFE 5</h2>

                    </header>

                    <main>

                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores, quae eos modi temporibus vitae nesciunt, quia voluptatem repellat recusandae!</p>

                    </main>

                  </div>

                </div>

              </li>

              <li class="map-marker map-marker-florida">

                <a href="#">CAFE 4</a>

                <div class="map-marker-info">

                  <div class="map-marker-info-inner animate-bounce-in">

                    <header>

                      <h2>CAFE 4</h2>

                    </header>

                    <main>

                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores, quae eos modi temporibus vitae nesciunt, quia voluptatem repellat recusandae!</p>

                    </main>

                  </div>

                </div>

              </li>

              <li class="map-marker map-marker-los-angeles">

                <a href="#">CAFE 3</a>



                <div class="map-marker-info-inner animate-bounce-in">

                  <div class="map-marker-info">

                    <div class="sup">
                      <div class="sub">
                        FOTOS
                     </div>
                      <div class="sub">
                        Kontakt
                     </div>
                      <div class="sub">
                        Speisekarte
                     </div>
                      <div class="sub">
                        Öffnunszeiten
                     </div>
                    </div>

                    <header>

                      <h2>CAFE 3</h2>

                    </header>


                    <main>

                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores, quae eos modi temporibus vitae nesciunt, quia voluptatem repellat recusandae!</p>

                    </main>

                  </div>

                </div>

              </li>

              <li class="map-marker map-marker-new-york">


                <a href="#">CAFE 1</a>

                <div class="map-marker-info">


                  <div class="map-marker-info-inner animate-bounce-in">

                    <header>

                      <h2>CAFE 1</h2>

                    </header>

                    <main>

                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores, quae eos modi temporibus vitae nesciunt, quia voluptatem repellat recusandae!</p>

                    </main>

                  </div>

                </div>

              </li>

              <li class="map-marker map-marker-seattle">

                <a href="#">CAFE 2</a>

                <div class="map-marker-info">

                  <div class="map-marker-info-inner animate-bounce-in">

                    <header>

                      <h2>CAFE 2</h2>

                    </header>

                    <main>

                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores, quae eos modi temporibus vitae nesciunt, quia voluptatem repellat recusandae!</p>

                    </main>

                  </div>

                </div>

              </li>

            </ul>



            <svg version="1.1" viewBox="0 0 393.82437 787.16797" width='360px' fill="#fef5e5">
              <path d="m 271.8351,665.04487 21.18821,-59.32706 94.28764,-87.93116 5.29707,-19.59912 -9.53472,-18.53968 -9.53469,2.1188 11.12381,-29.13381 -13.24264,-58.26762 -11.12381,4.76733 -9.53472,-15.36146 -16.42088,-3.17824 -3.70794,-6.88616 -5.29704,-59.85677 5.82674,-25.95557 -2.64853,-22.77736 13.24266,-5.29706 0.52971,-14.83176 -31.78237,-5.29707 -17.48029,-7.94557 -6.35645,-18.01 19.59911,-10.0644 9.5347,-8.4753 -7.41587,-18.01 -10.06442,-5.82677 -8.47528,-2.64851 -12.71296,5.29704 -11.12381,17.48029 -3.17824,3.70795 -9.5347,-9.5347 6.35646,-46.61412 -5.29704,-63.034979 -31.25264,-74.6885397 -32.84178,7.41588 14.83178,28.6041097 -5.82677,7.41589 22.77736,49.79236 -4.23766,86.342049 0.52971,49.26263 20.65853,38.66853 -9.53472,15.89117 -27.54469,-37.07941 -3.70794,-24.36647 -11.65352,7.41589 15.89117,54.5597 -30.72293,-1.58912 -12.71296,-25.42589 -13.24264,1.05941 6.88619,16.42088 -7.41589,14.30208 -9.5347,3.70792 -9.00501,-13.24264 -15.89117,1.58912 8.4753,15.36146 -7.94559,1.05942 -7.9456,-12.71294 -30.193235,-11.65354 -3.70794,10.59413 -19.06939,2.11883 v 18.00999 l 19.59909,2.64854 4.23766,6.35645 -16.42088,2.64853 -2.11883,5.29707 28.07442,7.41587 6.35646,13.77234 -14.83176,12.18325 -12.18323,-3.17824 -17.48029,7.4159 17.48029,15.89117 48.203235,-5.29707 28.6041,-17.48029 10.59413,-1.58912 5.82675,20.12883 -12.71293,16.42087 -27.01499,-9.00501 -19.069415,4.76736 -6.35648,32.31205 15.361475,10.06443 -10.064405,2.64853 -11.65352,-10.06443 -17.48029,-1.05941 -4.76736,12.18323 -23.30707,-23.83675 -9.00498,2.11883 -2.64854,36.5497 7.41587,11.65352 -13.77234,7.94557 -9.00499,15.36149 23.83674,3.17822 35.49029,-33.90117 23.30707,2.11883 3.17824,20.65853 -14.83176,42.37647 -18.01,12.18323 -57.2082299,14.83175 -6.88619,10.59411 0.52971,12.18325 15.8911699,4.23763 68.33205,1.05941 -1.5891,-18.5397 -17.48029,-11.12381 12.18323,-9.00499 12.18322,-20.12883 1.58912,5.82675 v 15.8912 l 12.183235,5.29704 13.24266,19.59912 6.88616,-0.52971 51.38146,19.59912 1.58912,43.96557 7.41589,10.06442 -11.65354,58.26762 26.4853,15.36149 -13.24264,18.01 -2.11882,16.42088 18.5397,4.23763 5.82675,36.01999 12.18325,7.9456 27.54469,-16.95058 -11.65352,-15.36147 11.65352,-30.19325 21.18824,2.64854 46.08439,-2.11883 9.53472,-22.77733 -24.36647,-28.07442 z"
              />
            </svg>










          </div>

        </div>

      </div >
    );
  }
}

export default App;
