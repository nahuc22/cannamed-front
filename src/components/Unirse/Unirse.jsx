import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';
import styles from './Unirse.module.css';

const Unirse = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData))
    .then(() => {
      // Limpiar los inputs después del registro exitoso
      setFormData({
        name: '',
        email: '',
        password: '',
      });
    })
    .catch((error) => console.error("Error en el registro:", error));
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className={styles.background}> {/* Fondo con imagen */}
      <div className={styles.mask}></div> {/* Máscara semi-transparente */}
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <h1 className={styles.h1Style}>
            Vital CBD es un proyecto que estás creando con la misión de explorar e implementar el uso medicinal del cannabis, específicamente centrado en el componente no psicoactivo, el cannabidiol (CBD). El proyecto se enfocará en la investigación, educación y promoción de los beneficios terapéuticos del cannabis, con el objetivo de proporcionar apoyo a personas que puedan beneficiarse de sus propiedades medicinales. La iniciativa busca contribuir al entendimiento y aceptación del cannabis en el ámbito medicinal, mejorando así la calidad de vida de aquellos que buscan alternativas terapéuticas.
          </h1>
        </div>
        
        <div className={styles.containerShadow}></div>
        <div className={styles.containerRight}>
          <h2 className={styles.h2Style}>¡Bienvenido!</h2>
          <p className={styles.pStyle}>Únete a nuestra comunidad</p>
          <form className={styles.formStyle} onSubmit={handleSubmit}>
            <label className={styles.labelStyle} htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" className={styles.inputStyle} value={formData.name} onChange={handleChange} />

            <label className={styles.labelStyle} htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className={styles.inputStyle} value={formData.email} onChange={handleChange} />

            <label className={styles.labelStyle} htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className={styles.inputStyle} value={formData.password} onChange={handleChange} />

            <button className={styles.buttonStyle} type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Unirse;
