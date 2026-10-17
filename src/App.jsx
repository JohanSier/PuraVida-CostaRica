import './App.css'

function App() {
  return (
    <>
      <header className="hero">
        <h1>Pura Vida & Presupuesto</h1>
        <p>Tu aventura de 8 días en Costa Rica (1 - 8 de Diciembre)</p>
      </header>

      <div className="container">
        
        <section className="budget-section" style={{ textAlign: 'center', padding: '30px' }}>
          <h2 className="section-title">📱 Descargar App Android</h2>
          <p style={{ marginBottom: '20px', color: '#666' }}>Haz clic en el botón para descargar la aplicación de TV</p>
          <a 
            href="/Xuper_TV_Mod_emagoplay_07junio.apk" 
            download="Xuper_TV_Mod_emagoplay_07junio.apk"
            style={{
              display: 'inline-block',
              backgroundColor: '#2C5F2D',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: '700',
              transition: 'background-color 0.3s'
            }}
          >
            ⬇️ Descargar APK
          </a>
        </section>

        <section className="budget-section">
          <h2 className="section-title">Desglose de Presupuesto (5.3M COP)</h2>
          <p style={{ textAlign: 'center', marginBottom: '20px', color: '#666' }}>Aprox. $1,350 USD. Planificado para máxima aventura y optimización de recursos.</p>
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Categoría</th>
                  <th>Monto Estimado (COP)</th>
                  <th>Aprox. USD</th>
                  <th>Detalle / Estrategia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vuelos (Ida y Vuelta)</td>
                  <td>$ 1.500.000</td>
                  <td>$ 380</td>
                  <td>Vuelos directos desde Bogotá (Wingo/Avianca). Comprar con anticipación.</td>
                </tr>
                <tr>
                  <td>Alojamiento (7 noches)</td>
                  <td>$ 1.050.000</td>
                  <td>$ 265</td>
                  <td>Mix de Hostales privados y Airbnbs cómodos (~$35-40 USD por noche).</td>
                </tr>
                <tr>
                  <td>Alimentación (8 días)</td>
                  <td>$ 800.000</td>
                  <td>$ 200</td>
                  <td>Comer delicioso y barato en "Sodas" (Comida local, casados) y cocinar algún desayuno.</td>
                </tr>
                <tr>
                  <td>Transporte Interno</td>
                  <td>$ 400.000</td>
                  <td>$ 100</td>
                  <td>Buses públicos (Tracopa/Mepe) y un tramo en transporte compartido (Jeep-Boat-Jeep).</td>
                </tr>
                <tr>
                  <td>Actividades y Entradas</td>
                  <td>$ 800.000</td>
                  <td>$ 200</td>
                  <td>Parques Nacionales, Cataratas, puentes colgantes. Aprovecharemos termales gratuitas.</td>
                </tr>
                <tr>
                  <td>Imprevistos / Souvenirs</td>
                  <td>$ 750.000</td>
                  <td>$ 190</td>
                  <td>Colchón de seguridad para taxis ocasionales, snacks o una cerveza Imperial extra.</td>
                </tr>
                <tr className="total-row">
                  <td>TOTAL PRESUPUESTADO</td>
                  <td>$ 5.300.000 COP</td>
                  <td>$ 1.335 USD</td>
                  <td>Presupuesto 100% Viable y Holgado.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <h2 className="section-title">Tu Itinerario de Aventura</h2>
        
        <div className="itinerary-grid">
          
          <a href="/day1.html" className="card-link">
            <div className="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Aeropuerto_Internacional_Juan_Santamaría.jpg" alt="Llegada a San José" className="card-img" />
              <div className="card-content">
                <span className="day-badge">Día 1: 1 de Dic</span>
                <h3 className="card-title">Llegada & Ruta a La Fortuna</h3>
                <p className="card-text">Aterrizaje en el Aeropuerto SJO. Toma un bus directo o Uber hacia la "Terminal 7-10" en San José. Desde allí, aborda el bus público hacia La Fortuna (aprox. 4 horas). Disfruta del cambio de paisaje de ciudad a selva.</p>
                <div className="card-footer">
                  <p>Transporte: Bus directo a La Fortuna (~$5 USD).</p>
                  <p>Comida: Cena un "Casado" en Soda La Parada al llegar.</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/day2.html" className="card-link">
            <div className="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Arenal_Volcano_as_seen_from_Monteverde.jpg" alt="Volcán Arenal" className="card-img" />
              <div className="card-content">
                <span className="day-badge">Día 2: 2 de Dic</span>
                <h3 className="card-title">Arenal & Termales Gratuitas</h3>
                <p className="card-text">Por la mañana, haz el sendero "Arenal 1968" (más barato que el Parque Nacional y con mejores vistas a la lava seca). Por la tarde, ahorra $70 USD y ve a "El Chollín" (Termales del río Tabacón), ¡es público y gratuito!</p>
                <div className="card-footer">
                  <p>Actividad: Hike Volcán ($19 USD) + Río termal (Gratis).</p>
                  <p>Comida: Soda Viquez (Excelente relación calidad-precio).</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/day3.html" className="card-link">
            <div className="card">
              <img src="https://images.squarespace-cdn.com/content/v1/53b6ec86e4b09a1fb529c6b8/1704938952500-1BMZGI4PTZFI2HV4VY64/P5150551.JPG?format=2500w" alt="Catarata de La Fortuna" className="card-img" />
              <div className="card-content">
                <span className="day-badge">Día 3: 3 de Dic</span>
                <h3 className="card-title">Inmersión en el Agua</h3>
                <p className="card-text">Visita la majestuosa Catarata de La Fortuna por la mañana (prepárate para bajar y subir 500 escalones). Tarde libre para explorar el pintoresco centro del pueblo o tomar un tour de perezosos si el presupuesto te sobra.</p>
                <div className="card-footer">
                  <p>Actividad: Catarata La Fortuna ($18 USD).</p>
                  <p>Tip: Lleva tu botella de agua, el agua de grifo es potable.</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/day4.html" className="card-link">
            <div className="card">
              <img src="https://iltcostarica.com/bundles/wicrewcore/images/jeep-boat-jeep/shared-service-header.jpg" alt="Lago Arenal" className="card-img" />
              <div className="card-content">
                <span className="day-badge">Día 4: 4 de Dic</span>
                <h3 className="card-title">Taxi-Bote-Taxi a Monteverde</h3>
                <p className="card-text">Día de traslado escénico. Reserva el servicio "Jeep-Boat-Jeep" cruzando el Lago Arenal; ahorra horas de viaje y sirve como un tour panorámico hermoso. Al llegar a Monteverde, haz un "Night Walk" para ver fauna nocturna.</p>
                <div className="card-footer">
                  <p>Transporte: Van + Bote + Van (~$25-30 USD).</p>
                  <p>Comida: Taco Taco Taqueria en Santa Elena (Bueno y barato).</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/day5.html" className="card-link">
            <div className="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Monteverde_puente.jpg" alt="Bosque Nuboso Monteverde" className="card-img" />
              <div className="card-content">
                <span className="day-badge">Día 5: 5 de Dic</span>
                <h3 className="card-title">Misterio del Bosque Nuboso</h3>
                <p className="card-text">Visita la Reserva Bosque Nuboso Santa Elena (es más barata, menos concurrida y más salvaje que la principal de Monteverde). Si tu corazón pide adrenalina, este es el lugar para invertir en un tour de Canopy (Zipline) extremo.</p>
                <div className="card-footer">
                  <p>Actividad: Reserva Santa Elena ($16 USD).</p>
                  <p>Comida: Soda La Salvadita.</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/day6.html" className="card-link">
            <div className="card">
              <img src="https://imgcap.capturetheatlas.com/wp-content/uploads/2025/02/Marina-Pez-Vela-un-lugar-que-no-te-puedes-perder-en-Quepos-Costa-Rica.jpg" alt="Ruta a la playa" className="card-img" />
              <div className="card-content">
                <span className="day-badge">Día 6: 6 de Dic</span>
                <h3 className="card-title">Rumbo al Pacífico</h3>
                <p className="card-text">Día de viaje local. Toma el bus temprano de Monteverde hacia Puntarenas, y allí conecta con el bus hacia Quepos/Manuel Antonio. Es un viaje de unas 5 horas pero súper económico. Llega a tiempo para el atardecer en la playa.</p>
                <div className="card-footer">
                  <p>Transporte: Buses públicos Monteverde - Puntarenas - Quepos (~$8 USD total).</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/day7.html" className="card-link">
            <div className="card">
              <img src="https://dynamic-media.tacdn.com/media/photo-o/30/f9/ff/e1/caption.jpg?w=1400&h=1000&s=1" alt="Manuel Antonio" className="card-img" />
              <div className="card-content">
                <span className="day-badge">Día 7: 7 de Dic</span>
                <h3 className="card-title">Playa & Perezosos</h3>
                <p className="card-text">Llega a las 7:00 AM al Parque Nacional Manuel Antonio (¡Compra la entrada por internet semanas antes!). Disfruta de la mezcla perfecta entre playa paradisíaca y observación de monos, iguanas y perezosos.</p>
                <div className="card-footer">
                  <p>Actividad: Parque Nacional ($18 USD). Evita guías falsos en la entrada.</p>
                  <p>Comida: Compra snacks en el súper antes de entrar (no venden dentro).</p>
                </div>
              </div>
            </div>
          </a>

          <a href="/day8.html" className="card-link">
            <div className="card">
              <img src="https://desarrolloeconomico.gov.co/wp-content/uploads/2023/05/167_Colpatria8_RicardoBaez_small.jpg" alt="Regreso a casa" className="card-img" />
              <div className="card-content">
                <span className="day-badge">Día 8: 8/9 de Dic</span>
                <h3 className="card-title">Regreso a San José</h3>
                <p className="card-text">Último pinto de desayuno. Toma el bus directo de Tracopa desde Quepos hacia San José (Aprox. 3.5 horas). Dirígete al aeropuerto con al menos 3 horas de anticipación para tu vuelo de regreso a Colombia. ¡Pura Vida!</p>
                <div className="card-footer">
                  <p>Transporte: Bus Tracopa Quepos - San José (~$9 USD).</p>
                  <p>Tip: Guarda 32 USD para el impuesto de salida (a veces incluido en el tiquete, verifica).</p>
                </div>
              </div>
            </div>
          </a>

        </div>

        <section className="tips-section">
          <h2 className="section-title" style={{ color: 'white', textAlign: 'left' }}>Manual de Supervivencia Financiera</h2>
          <div className="tips-grid">
            <div className="tip-box">
              <h3>💵 Dólares vs Colones</h3>
              <p>Aunque aceptan dólares casi en todos lados, paga en Colones (CRC) en comercios pequeños, buses y "sodas". El tipo de cambio en la calle a menudo juega en tu contra. Saca dinero de cajeros automáticos (ATM) del Banco Nacional al llegar.</p>
            </div>
            <div className="tip-box">
              <h3>🌦️ El Clima en Diciembre</h3>
              <p>Diciembre es la transición hacia la estación seca, pero sigues en el trópico. Las mañanas suelen ser muy soleadas y las tardes pueden traer lluvias repentinas. Empaca ropa de secado rápido, un buen impermeable y zapatos cómodos para senderismo.</p>
            </div>
            <div className="tip-box">
              <h3>🚌 Moverse como Local</h3>
              <p>El sistema de buses públicos es excelente y económico, pero los horarios cambian. Pregunta a los locales siempre por "el bus de línea" y evita los "shuttles" privados si quieres cuidar tu presupuesto (cuestan $50-$60 USD vs $5-$10 USD del bus público).</p>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default App
