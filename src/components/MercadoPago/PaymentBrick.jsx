import { Payment , initMercadoPago} from '@mercadopago/sdk-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const CheckoutBrick = ({ orderId }) => {
  
  const publicKey = import.meta.env.VITE_MP_PUBLIC_KEY;
  const [paymentComponent, setPaymentComponent] = useState(<p>Cargando pago...</p>);

  console.log(publicKey)
  
  useEffect(() => {
    if (publicKey) {
      initMercadoPago(publicKey);
    } else {
      console.error("PUBLIC_KEY no definido");
    }
    const createPreference = async () => {
      console.log(orderId)
      if (!orderId) return;
      try {
        const { data } = await axios.post('http://localhost:3001/pay/create', { orderId });
        console.log("Respuesta del backend:", data);
        const preferenceId = data.preferenceId;

        if (!preferenceId) {  
          setPaymentComponent(<p>Error: No se recibió preferenceId.</p>);
          return;
        }

        const customization = {
          paymentMethods: {
            ticket: 'all',
            creditCard: 'all',
            prepaidCard: 'all',
            debitCard: 'all',
            mercadoPago: 'all',
          },
        };

        const onSubmit = async ({ selectedPaymentMethod, formData }) => {
          console.log('Pago enviado:', selectedPaymentMethod, formData);
          return Promise.resolve();
        };

        const onReady = () => {
          console.log('Brick listo para usar');
        };

        const onError = (error) => {
          console.error('Error en el Brick:', error);
        };

        // Render del componente directamente
        setPaymentComponent(
          <Payment
            initialization={{ preferenceId, publicKey: publicKey, amount: data.amount || 1000}}
            customization={customization}
            onSubmit={onSubmit}
            onReady={onReady}
            onError={onError}
          />
        );
      } catch (error) {
        console.error('Error al crear preferencia:', error);
        setPaymentComponent(<p>Error al crear la preferencia.</p>);
      }
    };

    if ( orderId) createPreference();
  }, [orderId]);

  return <div>{paymentComponent}</div>;
};

export default CheckoutBrick;
