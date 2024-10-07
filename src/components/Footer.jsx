import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import favicon from "../assets/images/favicon.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <Box sx={{ marginTop: "100px", backgroundColor: "#005ACD" }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Stack
            direction="column"
            sx={{
              padding: "20px",
              paddingLeft: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <item>
                
                <Typography
                
              >
                <a style={{textDecoration:"none",fontFamily: "poppins-bold",
                  color: "white",
                  fontSize: "15px",}} href="#home">Home</a>
              </Typography>
            
              
            </item>
            <item>
              <Typography
                
              >
                
                <a href="#about" style={{textDecoration:"none",color: "white",
                  
                  fontWeight: "bold",
                  fontSize: "15px",}}>About</a>
              </Typography>
            </item>
            <item>
              <Typography
                
              >
                <a href="#services" style={{textDecoration:"none",color: "white",
                  
                  fontWeight: "bold",
                  fontSize: "15px",}}>Services</a>
              </Typography>
            </item>
            <item>
              <Typography
                
              >
                <a href="#testimonial" style={{textDecoration:"none",color: "white",
                  
                  fontWeight: "bold",
                  fontSize: "15px",}}>Testimonials</a>
                
              </Typography>
            </item>
            <item>
              <Typography>
              <a href="#gallery" style={{textDecoration:"none",color: "white",
                  
                  fontWeight: "bold",
                  fontSize: "15px",}}>Gallery</a>
                
                
              </Typography>
            </item>
            <item>
              <Typography
              >
                <a href="#faq" style={{textDecoration:"none",color: "white",
                  
                  fontWeight: "bold",
                  fontSize: "15px",}}>FAQ</a>
              </Typography>
            </item>
            <item>
              <Typography>
              <a href="#contact" style={{textDecoration:"none",color: "white",
                  
                  fontWeight: "bold",
                  fontSize: "15px",}}>Contact</a>
                
              </Typography>
            </item>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack
            direction="column"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              marginLeft: {lg:"400px",xs:"170px",sm:"350px",xlg:"400px",md:"200px"},
            }}
          >
            <item>
            <motion.div
    initial={{ y: -50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", bounce: 0.5, duration: 5, delay: 0.5 }}
    > <a href="#home">
      <img
                src={favicon}
                style={{ maxWidth:"100px", marginLeft:"20px"}}
              />
    </a>
              
              </motion.div>
            </item>
            <item>
              <Stack direction="row" spacing={2}>
                <item>
                 <a href="https://www.linkedin.com/in/mehak-kamran/" target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={{ color: "white" }} /></a> 
                </item>
                <item>
                  <a href="https://github.com/Mehak-Kamran" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ color: "white" }} /></a>
                </item>
                <item>
                 <a href="mailto:mehakkamran52@gmail.com"><AlternateEmailIcon sx={{ color: "white" }} /></a>
                </item>
                <item>
                  <a href="#home" target="_blank" rel="noopener noreferrer"><LanguageIcon sx={{ color: "white" }} /></a>
                </item>
              </Stack>
            </item>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{padding:"10px",backgroundColor:"#005ACD"}}>
      <hr></hr>
      <Stack direction="column" spacing={1} sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15px",padding:"5px"}}>
        <item>
        <Typography sx={{
                  color: "white",
                  fontSize: "14px",
                  fontFamily: "poppins-medium",
                  
                }}>© 2024 Mehak Kamran. All rights reserved.
        </Typography>
        </item>

<item>
    <Typography sx={{
                  color: "white",
                  fontSize: {xlg:"14px",lg:"14px",md:"14px",sm:"10px",xs:"10px"},
                  fontFamily: "poppins-medium",
                  
                }}>Website designed and developed by Mehak Kamran.</Typography>
</item>
      </Stack>
        
        
      </Box>
    </Box>
  );
};

export default Footer;
