import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from "framer-motion";
import React from 'react';
import mob from "../assets/images/profile3.png";

const textContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05, // Adjust to control the delay between characters
            delayChildren: 0.5
        },
    },
};

const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

// Updated splitText function to handle new lines
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

const Follow = () => {
    return (
        <Container id="home" sx={{marginTop:"100px"}}>
            <Grid container spacing={2} sx={{ marginTop: "30px" }}>
            <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: { xs: "column" }, justifyContent: { xs: 'center' }, alignItems: { xs: 'center' } }} >
                    <Box sx={{ width: "400px" }}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textContainer}
                        >
                            <Typography sx={{ marginBottom: "5px", fontSize: { xs: '2rem', sm: '2rem', lg: '55px', xl: '55px', md: '50px' }, fontFamily: "poppins-bold", color: "#333333" }}>
                                {splitText("Hi,I'm Mehak!")}
                            </Typography>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textContainer}
                        >
                            <Typography sx={{ fontSize: { xs: '', sm: '', lg: '18px', xl: '18px', md: '' }, fontFamily: "poppins-regular", color: "#666666" }}>
                            My love for coding is like a recursive function
                             <span style={{ color: '#005ACD', fontWeight: "bold" }}>—it just keeps going!</span>
                            </Typography>
                        </motion.div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: { xs: "column" }, justifyContent: { xs: 'center' }, alignItems: { xs: 'center' } }} >
                    <motion.div
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, duration: 5, delay: 0.5 }}
                    >
                        <Box sx={{ width: { lg: "80%", xlg: "80%", sm: "55%", xs: "55%", md: "55%" } }}>
                            <img src={mob} alt="Mobile"  />
                        </Box>
                    </motion.div>
                </Grid>
                
            </Grid>
        </Container>
    );
}

export default Follow;
