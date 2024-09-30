import React from 'react'
import { Container, Box, Typography ,Stack} from '@mui/material';
import st1 from "../assets/images/js.png"
import st2 from "../assets/images/nodejs.png"
import st3 from "../assets/images/reactnative.jpg"
import st4 from "../assets/images/wordpress.png"
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
  
  

const Services = () => {
  return (
   <Box sx={{backgroundColor:"#005ACD" ,padding:"50px",paddingTop:" 50px",paddingBottom:"100px",marginTop:"100px"}} id="services">
    <Box sx={{marginBottom:"70px"}}>
    <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textContainer}
                        >
                <Typography sx={{fontFamily:"poppins-bold",fontSize: {
              xs: "2rem",
              sm: "2rem",
              lg: "50px",
              xl: "50px",
              md: "50px",
            },color:"#FFFFFF",display:"flex",justifyContent:"center",alignItems:"center"}}>
                {splitText("Services")}
                    </Typography>
                    </motion.div>
                
                </Box>
    <Container>
        <Stack direction={{xs:"column",sm:"column",md:"column",lg:"row",xlg:"row"}} spacing={5} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        
        <item sx={{}}>
        <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.6, duration: 3, delay: 0.5 }}
                    >
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={st1} style={{width:"110px"}}/>
                </Box>
                </motion.div>
                
                <Box sx={{padding:"10px"}}>
                <Typography sx={{fontFamily:"poppins-bold",fontSize:"20px",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>Javascript</Typography>
                <Typography sx={{fontFamily:"poppins-regular",fontSize:"12px",color:"white",display:"flex",justifyContent:"center",alignItems:"center", textAlign:"center"}}>Developing interactive webSITES using JavaScript frameworks and libraries.</Typography>
                </Box>
                
                

            </item>

            <item sx={{}}>
            <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.6, duration: 3, delay: 0.5 }}
                    >
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={st2} style={{width:"110px"}}/>
                </Box>
                </motion.div>
                
                <Box sx={{padding:"10px"}}>
                <Typography sx={{fontFamily:"poppins-bold",fontSize:"20px",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>NodeJS</Typography>
                <Typography sx={{fontFamily:"poppins-regular",fontSize:"12px",color:"white",display:"flex",justifyContent:"center",alignItems:"center" , textAlign:"center"}}>Developing scalable, user-friendly web applications using MongoDB, Express and Node.js.</Typography>
                </Box>
                

            </item>

            <item sx={{}}><motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.6, duration: 3, delay: 0.5 }}
                    >
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={st3} style={{width:"110px"}}/>
                </Box>
                </motion.div>
                
                <Box sx={{padding:"10px"}}>
                <Typography sx={{fontFamily:"poppins-bold",fontSize:"20px",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>REACT</Typography>
                <Typography sx={{fontFamily:"poppins-regular",fontSize:"12px",color:"white",display:"flex",justifyContent:"center",alignItems:"center", textAlign:"center"}}>Designing visually appealing websites using React.js, enhanced with Framer Motion and Material-UI.</Typography>
                </Box>
                

            </item>

            <item sx={{}}>
            <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.6, duration: 3, delay: 0.8 }}
                    >
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={st4} style={{width:"110px"}}/>
                </Box>
                </motion.div>
                
                <Box sx={{padding:"10px"}}>
                <Typography sx={{fontFamily:"poppins-bold",fontSize:"20px",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>WORDPRESS</Typography>
                <Typography sx={{fontFamily:"poppins-regular",fontSize:"12px",color:"white",display:"flex",justifyContent:"center",alignItems:"center", textAlign:"center"}}>Creating responsive WordPress websites that are easy to use and grow.

</Typography>
                </Box>
                

            </item>

          
        </Stack>
    </Container>

   </Box>
  )
}

export default Services