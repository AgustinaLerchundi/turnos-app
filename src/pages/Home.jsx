import './Home.css';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const reserva = () => {
    navigate('/components/FormReserva');
  };

  return (
    <div className="home">
      <header className="hero">
        <h1>Gestioná tus turnos de forma simple</h1>
        <p>Una solución para profesionales y pacientes</p>
        <div className="hero-buttons">
          <button onClick={reserva}>Reservar un turno</button>

          <button>Ofrecer mis servicios</button>
        </div>
      </header>

      <section className="benefits">
        <h2>¿Por qué usar nuestra plataforma?</h2>
        <ul>
          <li>✔️ Sin llamadas ni esperas</li>
          <li>✔️ Accedé a múltiples profesionales</li>
          <li>✔️ Recibí recordatorios automáticos</li>
        </ul>
      </section>

      <section className="how-it-works">
        <h2>¿Cómo funciona?</h2>
        <ol>
          <li>1️⃣ Buscás un servicio</li>
          <li>2️⃣ Elegís día y hora</li>
          <li>3️⃣ Confirmás tu turno</li>
        </ol>
      </section>

      <section className="for-professionals">
        <h2>¿Sos profesional?</h2>
        <p>Publicá tu perfil, gestioná turnos y recibí clientes fácilmente.</p>
        <button>Quiero registrarme</button>
      </section>

      <footer className="footer">
        <p>© 2025 TurnoFácil. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
