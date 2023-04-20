import React from "react";
import classNames from 'classnames';
import './SmoothSlider.css'
import { useParams } from "react-router-dom";



class CitiesSlider extends React.Component {
    constructor(props) {
      super(props);
      
      this.IMAGE_PARTS = 4;
      
      this.changeTO = null;
      this.AUTOCHANGE_TIME = this.props.interval;
      
      this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }

    // params = useParams();
    studentId = this.props.department;
    
    componentWillUnmount() {
      window.clearTimeout(this.changeTO);
    }
    
    componentDidMount() {
      // console.log('studentId = ',this.studentId)
      this.runAutochangeTO();
      setTimeout(() => {
        this.setState({ activeSlide: 0, sliderReady: true });
      }, 0);
    }
    
    runAutochangeTO() {
      this.changeTO = setTimeout(() => {
        this.changeSlides(1);
        this.runAutochangeTO();
      }, this.AUTOCHANGE_TIME);
    }
    
    changeSlides(change) {
      window.clearTimeout(this.changeTO);
      const { length } = this.props.slides;
      const prevSlide = this.state.activeSlide;
      let activeSlide = prevSlide + change;
      if (activeSlide < 0) activeSlide = length - 1;
      if (activeSlide >= length) activeSlide = 0;
      this.setState({ activeSlide, prevSlide });
    }
    
    render() {
      const { activeSlide, prevSlide, sliderReady } = this.state;
      return (
        <div className={classNames('hoverable slider', { 's--ready': sliderReady })}>
          {/* <p className="slider__top-heading">AkilliKraal</p> */}
          <div className="slider__slides hoverable">
            {this.props.slides.map((slide, index) => (
              <div
                className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
                key={slide.city}
                >
                <div className="slider__slide-content">
                  <h3 className="slider__slide-subheading"
                  style={{ 
                  zIndex: '20'}}
                  >{slide.country || slide.city}</h3>
                  <h2 className="slider__slide-heading">
                    {this.studentId.split("_").lenght > 1 ? this.studentId.split("_")[0]+this.studentId.split("_")[1] : this.studentId}
                  </h2>
                  <p className="slider__slide-readmore">read more</p>
                </div>
                <div className="slider__slide-parts">
                  {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                    <div className="slider__slide-part" key={i}>
                      <div className="slider__slide-part-inner" 
                      style={{ backgroundImage: `url(${slide.img})` ,
                      zIndex: '5'
                    }} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* <div className="slider__control" onClick={() => this.changeSlides(-1)} />
          <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} /> */}
        </div>
      );
    }
  }
  



  export default CitiesSlider