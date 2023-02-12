import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carousels: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <img src="./images/carousel.jpg" width="100%"/>
      </div>
      <div>
      <img src="./images/carousel2.jpg" width="100%"/>
      </div>
    </Carousel>
  );
};

export default Carousels;