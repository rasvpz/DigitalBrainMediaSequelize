import React, {useState, useEffect} from 'react'
import Input from '../components/Input'
import {Button} from 'react-bootstrap';
import axios from 'axios'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";
const EditProducts = () => {
  let navigate = useNavigate();
  const { id } = useParams()

  const [title, settitle]=useState('')
  const [price, setprice]=useState('')
  const [description, setdescription]=useState('')

  useEffect(() => {
    const getDataByID = async() => {
      const { data } = await axios.get(`http://localhost:8080/api/products/${id}`)
      settitle(data.title)
      setprice(data.price)
      setdescription(data.description)
    }
    getDataByID()
    // console.log(data, '=====================')
  }, [id])


  const submitForm = (e) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    e.preventDefault()
      const obj= {title, price, description}
      axios.put(`http://localhost:8080/api/products/${id}`,
      obj,config)
      navigate("/products");
      }


// very important for reuse Component as Input
const chanageHandler = (e, name) => {
  if(name === 'settitle'){
  settitle(e.target.value)
  }    
  if(name === 'setprice'){
      setprice(e.target.value)
      }    
      if(name === 'setdescription'){
          setdescription(e.target.value)        
          }    
}

  return (
    <div style={{textAlign:'center'}}><br/>
      <h1>Edit Page</h1>
<hr />
        <form  onSubmit={submitForm}  style={{width: '50%', display: 'inline-block'}}>
          <Input style={{width:'100%', marginBottom:'12px', height:'40px', borderBottom:'1px solid #b6c6ed'}} value={title} type="text" placeholder="Title" name='settitle' id='ftitle' chanageHandler={chanageHandler} />
          <Input style={{width:'100%', marginBottom:'12px', height:'40px', borderBottom:'1px solid #b6c6ed'}} value={price} type="text" placeholder="Price" name='setprice' id='fprice'  chanageHandler={chanageHandler} />
          <Input style={{width:'100%', marginBottom:'12px', height:'40px', borderBottom:'1px solid #b6c6ed'}} value={description} type="text" placeholder="Description" name='setdescription' id='fdescription'  chanageHandler={chanageHandler} /> 
          <Button variant="primary" type='submit'>UPDATE</Button>
        </form>

    </div>
  )
}

export default EditProducts
