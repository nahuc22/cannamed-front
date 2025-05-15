import React, { useState } from 'react'
// import { initMercadoPago, Wallet} from "@mercadopago/sdk-react";
import axios from "axios"
// import img from '../../assets/logo192.png';
const PasarelaPago = () => {
    const [preferenceId, setPreferenceId] = useState(null)

    // initMercadoPago("TEST-79f253cf-1957-4ad0-a231-679c89a48fb6")

    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:3001/create_preference", {
                description: "Pago realizado",
                price: 100,
                quantity: 1,
                // currency_id: "ARS"

            })
            const { id } = response.data;
            console.log(id)
            return id
        } catch (error) {
            console.log(error);
        }
    }

    const handleBuy = async () => {
        const id = await createPreference();
        if(id){
            setPreferenceId(id);
        }
    }




  return (
    <div>
        <h1>Realiza tu pago!</h1>
        {/* <img src={img} alt="imagen"></img> */}
        <p>$100</p>
        <button onClick={handleBuy}>Pagar</button>
        {/* {preferenceId && <Wallet initialization={{ preferenceId , redirectMode: 'modal' }} />} */}
    </div>
  )
}

export default PasarelaPago