import { useState } from "react"
import axios from "axios"

const Form = () => {


  const [form, setForm] = useState({
    description:"",
    name:"",
    stock: 0,
    price: 0,
    image: "",
    categories: ""
  })

  const [errors, setErrors] = useState({
    description:"",
    name: "",
    stock: 0,
    price: 0,
    image: "",
    categories:"" 
  })

  const changeForm = (event) => {
    const property =  event.target.name;
    const value = event.target.value;
    validate({...form, [property]:value})
    setForm({...form, [property]:value})
  } 

  const validate = (form) => {
    var letters = /^[A-Za-z]+$/;
    if(form.name.match(letters)) 
    {
      setErrors({...errors,name:""}) 
    }else {
      setErrors({...errors,name:"Solo letras disponibles"})
    }
    if(form.name==="") setErrors({...errors,name:"Nombre vacío"})
    
  }

  const submitButton = (event) => {
    event.preventDefault()
     axios.post("http://localhost:3001/products", form)
    .then(alert("Creado exitosamente"))
    .catch(err=>alert(err))
  }
  return (
    <form onSubmit={submitButton}>
      <div>
        <label>Description:  </label>
        <input type ="text" value={form.description} onChange={changeForm}  name= "description"/>
      </div>
      <div>
        <label>Name: </label>
        <input type ="text" value={form.name} onChange={changeForm}  name= "name" />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>stock: </label>
        <input type ="number" value={form.stock} onChange={changeForm}   name= "stock"/>
      </div>
      <div>
        <label>categories: </label>
        <input type ="text" value={form.categories} onChange={changeForm}  name= "categories" />
      </div>
      <div>
        <label>price: </label>
        <input type ="number" value={form.price} onChange={changeForm}   name= "price"/>
      </div>
      <div>
        <label>image: </label>
        <input type ="text" value={form.image} onChange={changeForm}  name= "image" />
      </div>
      <button type="submit">Submitea</button>
    </form>
  )
}

export default Form