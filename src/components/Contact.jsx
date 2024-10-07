
import { Container,Box ,Grid, Typography,Button} from '@mui/material'
import React from 'react'
import profile2 from "../assets/images/profile2.png"
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



const Contact = () => {
    const handleClick=()=>{
        window.open("https://www.linkedin.com/in/mehak-kamran/","_blank")
    }
  return (
    


    <Box id="contact" sx={{marginTop:"100px"}}>
        <Grid container direction="row" >
            
            <Grid item xs={12} md={6}>
            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textContainer}
                        >
      <Typography className="text-center" sx={{ fontFamily: "poppins-bold", color: "black", fontSize: {
              xs: "2rem",
              sm: "2rem",
              lg: "50px",
              xl: "50px",
              md: "50px",
            }, padding: "25px 5px",textAlign:"center",marginTop:"70px" }}>
      {splitText("Get in Touch..")}
      <Button onClick={handleClick} sx={{backgroundColor:"#005ACD",color:"white",borderRadius:"8px",padding:"8px",fontFamily: "poppins-medium"} }>Lets connect</Button>
        </Typography>
        
        </motion.div>

            </Grid>
            <Grid item  xs={12} md={6}>
            <motion.div
    initial={{ x: 300, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", bounce: 0.5, duration: 5, delay: 0.5 }}
    
    > 

<Box
            sx={{
              width: { lg: "50%", xlg: "50%", sm: "55%", xs: "55%", md: "55%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft:"100px"
            }}
          >
            <img src={profile2} style={{ width: "500px" ,marginTop:"100px"}} />
          </Box>
                
                </motion.div>
            </Grid>
        </Grid>

    </Box>
  )
}

export default Contact