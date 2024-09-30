import React from 'react';
import { Grid,Container, Box, Typography ,Hidden} from '@mui/material';
import icon from '../assets/images/iconbluee.jpg'
import girl from "../assets/images/rev1.png"
import boy from "../assets/images/rev2.png"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';



//step1
import { useState } from "react";

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
  
  
  


const Testimonial = () => {
    //step2
  const [prevIcon, setPrevIcon] = useState(
    "/src/assets/images/leftw.png"
  );
  const [nextIcon, setNextIcon] = useState(
    "/src/assets/images/rightw.png"
  );
  
  const data = [
    { name: "fightbback247", review: "Seller did an excellent job enhancing and perfecting skin tones in my photos, creating flawless results that look completely natural.She was able to adjust color balance, exposure, and contrast to achieve a beautiful complexion. The seller has a keen eye for detail and an understanding of light and shadow to ensure the final result appears realistic.",image:boy

    },
    { name: "auraheilung", review: "Great work! Very fast and just what I needed and wanted",image:girl },
    { name: "redbirdt", review: "She's incredible and so quick with her work, done this down to the tee. She's now my full-time web designer lol",image:boy },
    { name: "bmh150", review: "Very professional. Able to revise and edit in a timely manner. Awesome seller!",image:boy },
    
];

  const options = {
    items: 3,
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
  };
  return (
    <Container id="testimonial" sx={{
        marginTop:"100px",
        display:"flex", flexDirection:{xs:"column"} , justifyContent:{ xs:'center'},alignItems:{xs:'center'},
        
    }}>
       <Box>
       <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textContainer}
                        >
       <Typography className="text-center" sx={{ fontFamily: "poppins-bold", color: "#333333", fontSize: {
              xs: "2rem",
              sm: "2rem",
              lg: "50px",
              xl: "50px",
              md: "50px",
            }, padding: "25px 5px",textAlign:"center" }}>
       {splitText("Testimonials")}
        </Typography>
        </motion.div>
       </Box>
        <Grid container spacing={2} >
            <Grid item xs={12} md={12} className='banner-slider relative' >
                
            <OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
            {data.map((d, i) => (
                <Box key={i} >
                <Box  sx={{
                    padding:'10px',
                    
                    
                    
                    
                    flexDirection:'coloumn',
                    display:"flex" ,
                    flexDirection:"column" ,
                    alignItems:"center" ,
                    justifyContent:"center",
                    
                    marginTop:"10px",
                    
                }}>  

                    <img  src={d.image}  className='shadow-md'  style={{
                                            width:'50px', height:'50px',
                                            backgroundColor:"#005ACD",
                                            padding:"7px",
                                            borderRadius:"0px 5px 0px 5px",
                                            
                                            
                                            }} />
                </Box>
                 <Box className='shadow-md' sx={{backgroundColor:"#FFFFFF", 
                marginTop:"-40px" , padding:"10px",borderRadius:"10px"
                

                
                

                }}>
                    <Hidden mdDown>
                    <Box sx={{
                    padding:'10px',
                    
                    
                    
                    flexDirection:'coloumn',
                    display:"flex" ,
                    flexDirection:"column" ,
                    alignItems:"flex-end" ,
                    justifyContent:"flex-end",
                    paddingRight:'130px',
                    
                    marginTop:"5px"
                }}>  
                <img src={icon}  style={{
                                            width:'40px', height:'30px',
                                            
                                            }} />
                </Box>
                    </Hidden>
                   

                <Box 
                sx={{
                    padding:'10px',
                    
                    
                    display:"flex" ,
                    flexDirection:"column" ,
                    alignItems:"center" ,
                    justifyContent:"center",
                    
                    marginTop:"3px"
                    }}>
                <Typography  className="mb-4 text-center" sx={{
                                        
                                        display:'flex',
                                        flexDirection:'column',
                                        fontFamily:"poppins-regular",fontSize:"16px",
                                        color:"#666666",
                                        paddingTop:"20px",paddingBottom:"20px"
                                    }}>
                            {d.review}
                        </Typography>

                        <Typography   sx={{
                            fontFamily:"poppins-medium",fontSize:"18px",color:"#005ACD"
                                        
                        }}>
                            {d.name}
                        </Typography>
                       <a href="https://www.fiverr.com/mehak_kamran" target="_blank" rel="noopener noreferrer"> <RemoveRedEyeIcon sx={{ color:"#005ACD"}}/></a> 
                        
                </Box>
                </Box> 
                
                                   
                                            
                    


                

                <Box sx={{
                
                    backgroundColor:"red",
                    width:"200"
                }}>
                    
                </Box>
                </Box>
                ))}
                
                </OwlCarousel>
                
            </Grid>












           



            
            

            
                    
                

    

            
        </Grid>
        
    </Container>
  );
}

export default Testimonial;
