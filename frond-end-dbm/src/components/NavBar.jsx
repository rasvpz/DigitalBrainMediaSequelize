import React, {useState} from 'react'
import logo from './img/logo.png'
import { Link } from 'react-router-dom'
import {Button, Modal} from 'react-bootstrap';
import Input from './Input'
import axios from 'axios'

const NavBar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


        const [title, settitle]=useState('')
        const [price, setprice]=useState('')
        const [description, setdescription]=useState('')
        // const [image, setimage]=useState('')

        const submitForm = (e) => {
            const config = {
              headers: {
                'Content-Type': 'application/json',
              },
            }
        
            e.preventDefault()
              const obj= {title, price, description}
              axios.post('http://localhost:8080/api/products/addProduct',
              obj,config)
              setShow(false);
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
<header>
<div className="container-menu-desktop">
    <div className="top-bar">
        <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">
                Thes is a demo Admins nav bar for Add Edit & Delete &nbsp;  <i class="bi bi-arrow-right" style={{fontWeight:'bolder', color:'white'}}></i>
            </div>

            <div className="right-top-bar flex-w h-full">
                <Link to="#" className="flex-c-m trans-04 p-lr-25">
                    My Account
                </Link>

                <Link to="#" className="flex-c-m trans-04 p-lr-25" onClick={handleShow}> AddProducts
                {/* <Button variant="primary" onClick={handleShow}>Add Products</Button> */}
                </Link>
                <Link to="/products" className="flex-c-m trans-04 p-lr-25" >
                    EditProducts
                </Link>
            </div>
        </div>
    </div>

    <div className="wrap-menu-desktop">
        <nav className="limiter-menu-desktop container">
            
            <Link to="#" className="logo">
                <img src= {logo} alt="IMG-LOGO" />
            </Link>

            <div className="menu-desktop">
                <ul className="main-menu">
                    <li className="active-menu">
                        <Link to="/">Home</Link>
                        <ul className="sub-menu">
                            <li><Link to="/">Homepage 1</Link></li>
                            <li><Link to="home-02.html">Homepage 2</Link></li>
                            <li><Link to="home-03.html">Homepage 3</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/products">Products</Link>
                    </li>

                    <li className="label1" data-label1="hot">
                        <Link to="shoping-cart.html">Features</Link>
                    </li>

                    <li>
                        <Link to="blog.html">Blog</Link>
                    </li>

                    <li>
                        <Link to="about.html">About</Link>
                    </li>

                    <li>
                        <Link to="contact.html">Contact</Link>
                    </li>
                </ul>
            </div>	

            <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                    <i className="zmdi zmdi-search"></i> 
                </div>

                <div className="icon-header-item" style={{marginRight : '8px'}}> 
                
                <Button variant="primary" onClick={handleShow}>Signup</Button>

                </div>

                <div className="icon-header-item ">
                <Link to="/register">Login</Link>
                </div>

            </div>
        </nav>
    </div>	
</div>

<div className="wrap-header-mobile">
    <div className="logo-mobile">
        <Link to="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO" /></Link>
    </div>

    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
            <i className="zmdi zmdi-search"></i>
        </div>

        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10" data-notify="2">
            {/* <i className="zmdi zmdi-shopping-cart"></i> */}
            <Button variant="primary" onClick={handleShow}>Signup</Button>
            
        </div>

        <Link to="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
            <i className="zmdi zmdi-favorite-outline"></i>
        </Link>
    </div>

    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
        <span className="hamburger-box">
            <span className="hamburger-inner"></span>
        </span>
    </div>
</div>


<div className="menu-mobile">
    <ul className="topbar-mobile">
        <li>
            <div className="left-top-bar">
                Free shipping for standard order over $100
            </div>
        </li>

        <li>
            <div className="right-top-bar flex-w h-full">
                <Link to="#" className="flex-c-m p-lr-10 trans-04">
                    Help & FAQs
                </Link>

                <Link to="#" className="flex-c-m p-lr-10 trans-04">
                    My Account
                </Link>

                <Link to="#" className="flex-c-m p-lr-10 trans-04">
                    EN
                </Link>

                <Link to="#" className="flex-c-m p-lr-10 trans-04">
                    USD
                </Link>
            </div>
        </li>
    </ul>

    <ul className="main-menu-m">
        <li>
            <Link to="index.html">Home</Link>
            <ul className="sub-menu-m">
                <li><Link to="index.html">Homepage 1</Link></li>
                <li><Link to="home-02.html">Homepage 2</Link></li>
                <li><Link to="home-03.html">Homepage 3</Link></li>
            </ul>
            <span className="arrow-main-menu-m">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
        </li>

        <li>
            <Link to="product.html">Shop</Link>
        </li>

        <li>
            <Link to="shoping-cart.html" className="label1 rs1" data-label1="hot">Features</Link>
        </li>

        <li>
            <Link to="blog.html">Blog</Link>
        </li>

        <li>
            <Link to="about.html">About</Link>
        </li>

        <li>
            <Link to="contact.html">Contact</Link>
        </li>
    </ul>
</div>

<div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
    <div className="container-search-header">
        <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
            <img src="images/icons/icon-close2.png" alt="CLOSE" />
        </button>

        <form className="wrap-search-header flex-w p-l-15">
            <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search"></i>
            </button>
            <input className="plh3" type="text" name="search" placeholder="Search..." />
        </form>
    </div>
</div>

<Modal show={show} onHide={handleClose} style={{marginTop:'5%'}} >
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <form onSubmit={submitForm}  style={{width: '100%'}}> 
            <Input style={{width:'100%', marginBottom:'12px', height:'40px', borderBottom:'1px solid #b6c6ed'}} type="text" placeholder="Title" name='settitle' id='ftitle' chanageHandler={chanageHandler} />
            <Input style={{width:'100%', marginBottom:'12px', height:'40px', borderBottom:'1px solid #b6c6ed'}} type="text" placeholder="Price" name='setprice' id='fprice'  chanageHandler={chanageHandler} />
            <Input style={{width:'100%', marginBottom:'12px', height:'40px', borderBottom:'1px solid #b6c6ed'}} type="text" placeholder="Description" name='setdescription' id='fdescription'  chanageHandler={chanageHandler} /> 
            {/* <Input style={{width:'100%', marginBottom:'12px', height:'40px', borderBottom:'1px solid #b6c6ed'}} type="text" placeholder="Image" name='image' id='fimage' onChange={(e)=> setimage(e.target.value)}/>     */}
            {/* <Input style={{width:'100%', marginBottom:'12px', height:'40px', borderBottom:'1px solid #b6c6ed'}} type="password" placeholder="Confirm Password"/>	             */}
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close
          </Button>
          <Button variant="primary" type='submit'>Login</Button>
        </Modal.Footer>
        </form>
        
        </Modal.Body>

      </Modal>

</header>




  )
}

export default NavBar
