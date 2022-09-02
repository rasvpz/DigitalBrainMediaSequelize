import React, { useState, useEffect} from 'react'
import axios from 'axios'
import {Card , Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {

  let navigate = useNavigate();
  const { id } = useParams()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setdescription] = useState('')

  useEffect(() => {
    const getSingleProductData = async() => {
      const { data } = await axios.get(`http://localhost:8080/api/products/${id}`)
      setTitle(data.title)
      setPrice(data.price)
      setdescription(data.description)
    }
    getSingleProductData()
  }, [id])

  const handleDelete = async (id) => {
    alert(id)
    await axios.delete(`/api/products/${id}`)
    navigate("/products");
  }

  return (
    
    <div className='container'>
      <br />
      <h1>All Products</h1>
      <hr />

      <Card className='shadow-lg m-2 p-3 rounded' style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>Title : {title}</Card.Title>
        <Card.Title>Price : RS {price}</Card.Title>

        <Card.Text>
            Description : {description}
        </Card.Text>
            <Link to={`/products/edit/${id}`}>
              <Button variant="primary">Edit</Button>
            </Link>            
              <Button onClick= {() => handleDelete(id)} variant="primary">Delete</Button>

      </Card.Body>
    </Card>

    </div>
  )
}

export default ProductDetail
