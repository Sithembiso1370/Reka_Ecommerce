import React from 'react'
import './BannerCar.css'
import './BannerCar.js'

function BannerCarouselSlide() {
  return (

        <div className="slider">
        <div className="wrapper">
            <div style="background-image: url('https://alikinvv.github.io/3d-carousel/build/img/slide2.jpg')" className="item item1 active">
                <div className="item__info">
                    <p className="item__year"><span>1483 - 1484</span></p>
                    <p className="item__name"><span>BIRH OF VENUS</span></p>
                    <a href="javascript:void(0)" className="btn"><span>Discover more</span></a>
                </div>
            </div>
            <div style="background-image: url('https://alikinvv.github.io/3d-carousel/build/img/slide1.jpg')" className="item item2">
                <div className="item__info">
                    <p className="item__year"><span>1481 - 1484</span></p>
                    <p className="item__name"><span>BIRH OF VENUS</span></p>
                    <a href="javascript:void(0)" className="btn"><span>Discover more</span></a>
                </div>
            </div>
            <div style="background-image: url('https://alikinvv.github.io/3d-carousel/build/img/slide3.jpg')" className="item item3">
                <div className="item__info">
                    <p className="item__year"><span>1500 - 1501</span></p>
                    <p className="item__name"><span>THE STORY OF VIRGINIA</span></p>
                    <a href="javascript:void(0)" className="btn"><span>Discover more</span></a>
                </div>
            </div>
        </div>

        <div className="arrow arrow-next"></div>
        <div className="arrow arrow-prev"></div>
    </div>
  )
}

export default BannerCarouselSlide