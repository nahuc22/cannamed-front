import React from 'react';
import styles from './Footer.module.css';
// En tu componente principal o en un archivo de estilos global
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <div className={styles.vital}>
          <h1>SOMOS</h1>
          <p>Somos una asociación sin fines de lucro de Salta Capital que impulsa el estudio, investigación y aplicación de terapias alternativas basadas en hierbas y plantas de uso medicinal o terapéutico</p>
        </div>
        <div className={styles.tienda}>
          <h1>TIENDA</h1>
          <a href="/tienda/aceites">Aceites</a>
      <a href="/tienda/cremas">Cremas</a>
      <a href="/tienda/cosmetica">Cosmética Gral</a>
        </div>
        <div className={styles.menu}>
        <h1>MENU</h1>

        <a href="/">Home</a>
      <a href="/nosotros">Nosotros</a>
      <a href="/asociate">Asociate</a>
      <a href="/productos">Productos</a>
        </div>
        <div className={styles.contactos}>
          <h1>CONTACTO</h1>
          <a href="mailto:plantacura@outlook.com.ar">plantacura@outlook.com.ar</a>
          <a href="tel:+543872650000">+54 9 3872 65-0000</a>
          <a href="#">Buenos Aires 256</a>
          <a href="#">Adolfo Güemes 398 (Esq. Stgo del Estero)</a>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}><i className="fab fa-instagram"></i></a>
            <a href="#" className={styles.icon}><i className="fab fa-linkedin"></i></a>
            <a href="#" className={styles.icon}><i className="fab fa-facebook"></i></a>
            {/* Agrega más iconos según sea necesario */}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
