import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import girllt from "../assets/images/girllt.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container id="about" sx={{ marginTop: "100px" }}>
        <Grid container spacing={2} direction="row" sx={{margin:"10px"}} >
            <Grid item xs={12} md={5}>
            <motion.div
    initial={{ x: -300, opacity: 0 }}
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
              marginLeft:"60px"
            }}
          >
            <img src={girllt} style={{ width: "500px" ,marginTop:"100px"}} />
          </Box>
        </motion.div>
            </Grid>
            <Grid item xs={12} md={7}>
            <Stack direction="column">
            <item style={{marginTop:"80px"}}>
            <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, duration: 3, delay: 0.5 }}
                    >
              <Typography
                sx={{
                  marginBottom: "5px",
                  fontSize: {
                    xs: "2rem",
                    sm: "2rem",
                    lg: "50px",
                    xl: "50px",
                    md: "50px",
                  },
                  fontFamily: "poppins-bold",
                  color: "#333333",
                }}
              >
                About
              </Typography>
              </motion.div>
            </item>
            <item><Typography sx={{ fontSize: { xs: '', sm: '', lg: '18px', xl: '18px', md: '' }, fontFamily: "poppins-regular", color: "#666666" }}>
            A computer science student on <span style={{ color: '#005ACD', fontWeight: "bold" }}>a mission to make code look as delicious as it feels.</span>  I love crafting user-friendly websites and bringing ideas to life with creativity and code. Always eager to learn, explore new challenges, and serve up something exciting in the world of web development.
                             
            </Typography></item>
            <item>
                <Stack direction={{xlg:"row",lg:"row",xs:"column",sm:"column",md:"column"}} spacing={8}>
                    <item ><motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, duration: 3, delay: 0.5 }}
                    >
                        <Box sx={{width:"300px",height:"200px",backgroundColor:"#0093CB",borderRadius:"20px 0 20px 0",marginTop:"30px"}}>
                        <Stack direction="row" spacing={2} sx={{padding:"10px",paddingTop:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <item>
                            <Typography variant="h1" sx={{textDecoration:"underline" ,fontSize: { xs: '', sm: '', lg: '14px', xl: '14px', md: '' }, fontFamily: "poppins-regular", color: "white", marginBottom:"10px"}}>
                            <h1> Education</h1>
                            
                        </Typography>
                                
                                <Typography sx={{ fontSize: { xs: '', sm: '', lg: '14px', xl: '14px', md: '' }, fontFamily: "poppins-regular", color: "white",marginTop:"10px",gap:"20px" }}>
                            
                            <h4 style={{marginBottom:"10px"}}>BSCS-UBIT</h4> 
                            <h4 style={{marginBottom:"10px"}}>FSC</h4>
                            <h4 style={{marginBottom:"10px"}}>SSC</h4>
                        </Typography></item>
                            <item>
                            <Typography sx={{ fontSize: { xs: '', sm: '', lg: '14px', xl: '14px', md: '' }, fontFamily: "poppins-regular", color: "white" ,marginTop:"45px"}}>
                            
                            <h4 style={{marginBottom:"10px"}}>2021-2024</h4> 
                            <h4 style={{marginBottom:"10px"}}>2016-2018</h4>
                            <h4 style={{marginBottom:"10px"}}>2014-2016</h4>
                        </Typography>
                            </item>
                        </Stack>
                        </Box>
                        </motion.div>
                        </item>
                        <item>
                        <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, duration: 3, delay: 0.5 }}
                    >
                            <Box sx={{width:"300px",height:"200px",backgroundColor:"#0093CB",borderRadius:"20px 0 20px 0",marginTop:"30px"}}>
                        <Stack direction="row" spacing={2} sx={{padding:"10px",paddingTop:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <item>
                            <Typography variant="h1" sx={{textDecoration:"underline" ,fontSize: { xs: '', sm: '', lg: '14px', xl: '14px', md: '' }, fontFamily: "poppins-regular", color: "white", marginBottom:"10px"}}>
                            <h1> Experience</h1>
                            
                        </Typography>
                                
                                <Typography sx={{ fontSize: { xs: '', sm: '', lg: '14px', xl: '14px', md: '' }, fontFamily: "poppins-regular", color: "white",marginTop:"10px",gap:"20px" }}>
                            
                            <h4 style={{marginBottom:"10px"}}>Unity Foods Limited</h4> 
                            <h4 style={{marginBottom:"10px"}}>Pakish</h4>
                            <h4 style={{marginBottom:"10px"}}>Freelancing</h4>
                        </Typography></item>
                            <item>
                            <Typography sx={{ fontSize: { xs: '', sm: '', lg: '14px', xl: '14px', md: '' }, fontFamily: "poppins-regular", color: "white" ,marginTop:"45px"}}>
                            
                            <h4 style={{marginBottom:"10px"}}>Jun-Aug 2024</h4> 
                            <h4 style={{marginBottom:"10px"}}>Apr-May 2022</h4>
                            <h4 style={{marginBottom:"10px"}}>2020-Present</h4>
                        </Typography>
                            </item>
                        </Stack>
                        </Box>
                        </motion.div></item>
                </Stack>
            </item>
                            
          </Stack>
            </Grid>

        </Grid>
      
    </Container>
  );
};

export default About;