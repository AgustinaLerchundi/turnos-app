import React, { useState } from 'react';
import styles from './FormReserva.module.css';

function FormReserva() {
  const [nombre, setNombre] = useState('');
  const [servicio, setServicio] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reserva creada:', { nombre, servicio, fecha, hora });
    alert('Turno reservado exitosamente!');
    // En el futuro: enviar datos a backend.
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2>Reservar turno</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />

      <select
        value={servicio}
        onChange={(e) => setServicio(e.target.value)}
        required
      >
        <option value="">Seleccionar servicio</option>
        <option value="corte">Corte de pelo</option>
        <option value="consulta">Consulta médica</option>
      </select>

      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
      />

      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
        required
      />

      <button type="submit">Reservar turno</button>
    </form>
  );
}

export default FormReserva;
