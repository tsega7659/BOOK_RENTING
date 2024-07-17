import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import intro3 from '../assets/people2.jpg';
import intro2 from '../assets/book.png';
import intro1 from '../assets/people1.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Best from './Best';
import FAQ from './FAQ';

const divStyle = {
  display: 'flex',
  flexDirection: 'column', // Arrange children vertically
  justifyContent: 'center', // Center content horizontally
  alignItems: 'center', // Center content vertically
  backgroundSize: 'cover',
  height: '550px',
  opacity: 0.8, // Decrease the opacity of the background image
  position: 'relative', // Positioning for the overlay
  zIndex: 0, // Ensure it is below the dropdown
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay
  zIndex: 1, // Ensure overlay is on top of the image
};

const textStyle = {
  position: 'relative',
  zIndex: 2, // Ensure text is on top of the overlay
};

const slideImages = [
  {
    url: intro1,
    caption: `“The only thing you absolutely have to know is the location of the library.” Albert Einstein`,
  },
  {
    url: intro2,
    caption: '“Books are a uniquely portable magic.” Stephen King',
  },
  {
    url: intro3,
    caption: '“A room without books is like a body without a soul.” – Marcus Tullius Cicero',
  },
];

const Main = () => {
  return (
    <div className="slide-container relative z-0 font-serif">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              <div style={overlayStyle}></div>
              <span className="text-white leading-relaxed lg:text-2xl font-bold font-spci m-10" style={textStyle}>
                {slideImage.caption}
              </span>
            </div>
          </div>
        ))}
      </Slide>
      <Best />
      <FAQ />
    </div>
  );
};

export default Main;
