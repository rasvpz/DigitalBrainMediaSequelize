import React, {useState, useEffect} from 'react'
import banner01 from '../components/img/banner-01.jpg';
import {Link} from 'react-router-dom'
// import banner02 from '../components/img/banner-02.jpg';
// import banner03 from '../components/img/banner-07.jpg';

const ProductCard = (props) => {
  return (
	<div className="row">

			<div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					<div class="block1 wrap-pic-w">
						{/* <img src={`/img/${props.image}`} /> */}
						<img src={banner01} alt="IMG-BANNER" />
						<div className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div className="block1-txt-child1 flex-col-3">
								<div className="block1-name ltext-102 trans-04 p-b-8">
                				<span style={{borderRadius:'50px',paddingLeft:'4px',paddingRight:'4px', backgroundColor:'black', color:'white', marginRight:'8px' }}> &nbsp;{props.id} </span> {props.title}
								</div><br />
								<div className="block1-info stext-102 trans-04">
									<h6>{props.price} RS ONLY</h6>
								</div>
								<span className="block1-info stext-102 trans-04">
                					{props.description}
								</span>
							</div>
							<div className="block1-txt-child2 p-b-4 trans-05">
								<div className="block1-link stext-101 cl0 trans-09">
								<Link to={`product/${props.id}`}>SHOP NOW FOR {props.price}.00 /- ONLY </Link>
								</div>
							</div>
						</div>
					</div>
				</div>
	</div>
  )
}

export default ProductCard
