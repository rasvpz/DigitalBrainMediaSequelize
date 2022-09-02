import React, { useState, useEffect} from 'react'
import axios from 'axios'
import banner01 from '../components/img/banner-01.jpg';
import {Link} from 'react-router-dom'

const showProducts = () => {
const [ products, setProducts ] = useState([])

useEffect(() => {
  const getProductsData = async() => {
    const { data } = await axios.get('http://localhost:8080/api/products/allProducts')
    setProducts(data)    
  }
  getProductsData()
}, [])

  return (
    <div>
        <div className="sec-banner bg0 p-t-80 p-b-50">
            <div className="container">
              <div className="row">

              { products .map(product =>{
      return(    <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto" key={product.id}>
                  <div className="block1 wrap-pic-w">
                  <img src={banner01} alt="IMG-BANNER" />

                    <div className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                      <div className="block1-txt-child1 flex-col-l">
                      <div className="block1-name ltext-102 trans-04 p-b-8">
                				<span style={{borderRadius:'50px',paddingLeft:'4px',paddingRight:'4px', backgroundColor:'black', color:'white', marginRight:'8px' }}> &nbsp;{product.id} </span> {product.title}
								    </div><br />
                        

                        <span className="block1-info stext-102 trans-04">
                        {product.price}
                        </span>
                        <span className="block1-info stext-102 trans-04">
                        {product.description}
                        </span>
                      </div>

                      <div className="block1-txt-child2 p-b-4 trans-05">
                        <div className="block1-link stext-101 cl0 trans-09">
                          <Link to={`/products/${product.id}`}>SHOP NOW FOR {product.price}.00 /- ONLY </Link>
                        </div>
							        </div>
                    </div>
                  </div>
                </div> 

                )
    })
    }  

            </div>
      </div>
    </div>
</div>


  )
}

export default showProducts
