import React from 'react'
import banner01 from '../components/img/banner-01.jpg';
import banner02 from '../components/img/banner-02.jpg';
import banner03 from '../components/img/banner-07.jpg';

const HomeScreen = () => {
  return (
    <>
      <div className="sec-banner bg0 p-t-80 p-b-50">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					<div className="block1 wrap-pic-w">
						<img src={banner01} alt="IMG-BANNER" />
						<div className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div className="block1-txt-child1 flex-col-l">
								<span className="block1-name ltext-102 trans-04 p-b-8">
									Women
								</span>
								<span className="block1-info stext-102 trans-04">
									Spring 2018
								</span>
							</div>
							<div className="block1-txt-child2 p-b-4 trans-05">
								<div className="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					<div className="block1 wrap-pic-w">
						<img src={banner02} alt="IMG-BANNER" />
						<div className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div className="block1-txt-child1 flex-col-l">
								<span className="block1-name ltext-102 trans-04 p-b-8">
									Men
								</span>

								<span className="block1-info stext-102 trans-04">
									Spring 2018
								</span>
							</div>

							<div className="block1-txt-child2 p-b-4 trans-05">
								<div className="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					<div className="block1 wrap-pic-w">
						<img src={banner03} alt="IMG-BANNER" />
						<div className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div className="block1-txt-child1 flex-col-l">
								<span className="block1-name ltext-102 trans-04 p-b-8">
									Accessories
								</span>
								<span className="block1-info stext-102 trans-04">
									New Trend
								</span>
							</div>

							<div className="block1-txt-child2 p-b-4 trans-05">
								<div className="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    </>
  )
}

export default HomeScreen
