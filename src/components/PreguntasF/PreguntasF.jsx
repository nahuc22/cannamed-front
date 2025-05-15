// import React, { useState } from 'react';
// import styles from './PreguntasF.module.css'; // Asegúrate de tener el archivo CSS correspondiente

// const PreguntasFrecuentes = () => {
//   const [preguntas, setPreguntas] = useState([
//     { id: 1, pregunta: '¿Cómo hago algo?', respuesta: 'Aquí está la respuesta a tu pregunta.' },
//     { id: 2, pregunta: '¿Puedo hacer algo más?', respuesta: 'Sí, puedes hacer más cosas.' },
//     { id: 1, pregunta: '¿Cómo hago algo?', respuesta: 'Aquí está la respuesta a tu pregunta.' },
//     { id: 2, pregunta: '¿Puedo hacer algo más?', respuesta: 'Sí, puedes hacer más cosas.' },
//     { id: 1, pregunta: '¿Cómo hago algo?', respuesta: 'Aquí está la respuesta a tu pregunta.' },
//     { id: 2, pregunta: '¿Puedo hacer algo más?', respuesta: 'Sí, puedes hacer más cosas.' },
//     { id: 1, pregunta: '¿Cómo hago algo?', respuesta: 'Aquí está la respuesta a tu pregunta.' },
//     { id: 2, pregunta: '¿Puedo hacer algo más?', respuesta: 'Sí, puedes hacer más cosas.' },
//     // Agrega más preguntas según sea necesario
//   ]);

//   const [expandedId, setExpandedId] = useState(null);

//   const handleToggle = (id) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   return (
//     <div className={styles.PreguntasFrecuentesContainer}>
//         <h2>Preguntas Frecuentes</h2>
//         <div className={styles.preguntasFrecuentes}>
//         {preguntas.map((pregunta) => (
//             <div key={pregunta.id} className={styles.pregunta}>
//             <div className={styles.preguntaHeader} onClick={() => handleToggle(pregunta.id)}>
//                 <h3>{pregunta.pregunta}</h3>
//                 <span className={styles.icon}>{expandedId === pregunta.id ? '▼' : '▶'}</span>
//             </div>
//             {expandedId === pregunta.id && (
//                 <div className={styles.respuesta}>
//                 <p>{pregunta.respuesta}</p>
//                 </div>
//             )}
//             </div>
//         ))}
//         </div>
//         </div>
//   );
// };

// export default PreguntasFrecuentes;
import React, { useState } from 'react';
import styles from './PreguntasF.module.css'; // Asegúrate de tener el archivo CSS correspondiente

const PreguntasFrecuentes = () => {
  const [preguntas, setPreguntas] = useState([
    { id: 1, pregunta: '¿Cómo hago algo?', respuesta: 'Aquí está la respuesta a tu pregunta.' },
    { id: 2, pregunta: '¿Puedo hacer algo más?', respuesta: 'Sí, puedes hacer más cosas.' },
    { id: 1, pregunta: '¿Cómo hago algo?', respuesta: 'Aquí está la respuesta a tu pregunta.' },
    { id: 2, pregunta: '¿Puedo hacer algo más?', respuesta: 'Sí, puedes hacer más cosas.' },
    { id: 1, pregunta: '¿Cómo hago algo?', respuesta: 'Aquí está la respuesta a tu pregunta.' },
    { id: 2, pregunta: '¿Puedo hacer algo más?', respuesta: 'Sí, puedes hacer más cosas.' },
    { id: 1, pregunta: '¿Cómo hago algo?', respuesta: 'Aquí está la respuesta a tu pregunta.' },
    { id: 2, pregunta: '¿Puedo hacer algo más?', respuesta: 'Sí, puedes hacer más cosas.' }
    // Agrega más preguntas según sea necesario
  ]);

  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
  <> <h2>Preguntas Frecuentes</h2>
    
    <div className={styles.preguntasFrecuentes}>
      
      <div className={styles.left}>
        {preguntas.slice(0, 4).map((pregunta) => (
          <div key={pregunta.id} className={styles.pregunta}>
            <div className={styles.preguntaHeader} onClick={() => handleToggle(pregunta.id)}>
              <h3>{pregunta.pregunta}</h3>
              <span className={styles.icon}>{expandedId === pregunta.id ? '▼' : '▶'}</span>
            </div>
            {expandedId === pregunta.id && (
              <div className={styles.respuesta}>
                <p>{pregunta.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.right}>
        {preguntas.slice(4, 8).map((pregunta) => (
          <div key={pregunta.id} className={styles.pregunta}>
            <div className={styles.preguntaHeader} onClick={() => handleToggle(pregunta.id)}>
              <h3>{pregunta.pregunta}</h3>
              <span className={styles.icon}>{expandedId === pregunta.id ? '▼' : '▶'}</span>
            </div>
            {expandedId === pregunta.id && (
              <div className={styles.respuesta}>
                <p>{pregunta.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PreguntasFrecuentes;
