import React, { useState } from 'react';
import { Container, Box, Typography, Dialog, IconButton } from '@mui/material';
import OwlCarousel from 'react-owl-carousel';
import CloseIcon from '@mui/icons-material/Close';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import biryani from '../assets/images/web1.png';
import cake from '../assets/images/web2.png';
import curry from '../assets/images/web3.png';
import fish from '../assets/images/web4.png';
import web5 from "../assets/images/web5.png";
import web6 from "../assets/images/web6.png";
import { motion } from "framer-motion";

//step1
const textContainer = {
  hidden: { opacity: 1 },
  visible: {
      opacity: 1,
      transition: {
          staggerChildren: 0.07, // Adjust to control the delay between characters
          delayChildren: 0.7
      },
  },
};

//step2
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

//step3
const splitText = (text) => {
  return text.split('\n').map((line, lineIndex) => (
      <div key={lineIndex}>
          {line.split('').map((char, index) => (
              char !== ' ' ? (
                  <motion.span key={index} variants={textVariant} style={{ display: 'inline-block' }}>
                      {char}
                  </motion.span>
              ) : (
                  <span key={index}> </span>
              )
          ))}
          <br /> {/* Add a line break after each line */}
      </div>
  ));
};






const Gallery = () => {
  
const [prevIcon] = useState(`/leftw.png`);
const [nextIcon] = useState(`/rightw.png`);



  const [selectedImage, setSelectedImage] = useState(null); // For modal

  const data = [
    { image: biryani },
    { image: cake },
    { image: curry },
    { image: fish },
    { image: web5 },
    { image: web6 },
    
  ];

  const options = {
    nav: true,
    dots: false,
    rewind: true,
    autoplay: true,
    singleItem: true,
    autoPlaySpeed: 2000,
    autoPlayTimeout: 2000,
    autoplayHoverPause: true,
    dotsEach: true,
    dotData: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    navText: [
      `<div class="nav-btn prev-slide"><img src="${prevIcon}" width="100%" /></div>`,
      `<div class="nav-btn next-slide"><img src="${nextIcon}" width="100%" /></div>`,
    ],
    responsive: {
      0: {
        items: 1, // Show 1 item on small screens (xs)
      },
      600: {
        items: 2, // Show 2 items on medium screens
      },
      900: {
        items: 4, // Show 3 items on larger screens (md)
      },
      1200: {
        items: 4, // Show 4 items on large screens (lg and above)
      },
    },
  };

  // Close modal
  const handleClose = () => setSelectedImage(null);

  return (
    <Box id="gallery" sx={{ backgroundColor: "#005ACD" ,marginTop: "100px" }}>
      <Box sx={{ marginTop: "100px", padding: '5px' }}>
      <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textContainer}
                        >
      <Typography className="text-center" sx={{ fontFamily: "poppins-bold", color: "white", fontSize: {
              xs: "2rem",
              sm: "2rem",
              lg: "50px",
              xl: "50px",
              md: "50px",
            }, padding: "25px 5px",textAlign:"center" }}>
      {splitText("Gallery")}
        </Typography>
        </motion.div>
        <Container maxWidth="lg">
          <div className='banner-slider relative'>
            <OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
              {data.map((d, i) => (
                <Box
                  key={i}
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}
                  onClick={() => setSelectedImage(d.image)} // Open modal on click
                >
                  <img src={d.image} alt={`Recipe ${i}`} style={{ width: '100%', height: '400px',objectFit: 'cover', borderRadius: '8px 8px 0 0', display: 'block' }} />
                </Box>
              ))}
            </OwlCarousel>
          </div>
        </Container>
      </Box>

      {/* Modal for displaying the selected image */}
      <Dialog open={!!selectedImage} onClose={handleClose} maxWidth="lg">
        <Box sx={{ position: 'relative',display:"flex",alignItems:"center",justifyContent:"center" }}>
          <IconButton
            sx={{ position: 'fixed', top: 10, right: 10, color: 'white',backgroundColor:"black" }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <img src={selectedImage} alt="Selected Recipe" style={{ width: 'auto', height: 'auto'}} />
        </Box>
      </Dialog>
    </Box>
  );
};

export default Gallery;
