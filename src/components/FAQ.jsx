import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container, Typography } from '@mui/material';
import { motion } from "framer-motion";

export default function AccordionUsage() {

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each accordion
      },
    },
  };

  const accordionVariant = {
    hidden: { x: -600, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.5, duration: 3 } },
  };

  return (
    <Container id="faq" sx={{ marginTop: "100px" }}>
      <Box>
      <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, duration: 3, delay: 0.5 }}
                    >
        <Typography
          sx={{
            marginBottom: "20px",
            fontSize: {
              xs: "2rem",
              sm: "2rem",
              lg: "50px",
              xl: "50px",
              md: "50px",
            },
            fontFamily: "poppins-bold",
            color: "#333333",
            textAlign: "center",
          }}
        >
          FAQ's
        </Typography>
        </motion.div>
      </Box>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* Accordion 1 */}
        <motion.div variants={accordionVariant}>
          <Accordion sx={{ border: "none", borderBottom: '0.7px solid #005ACD', borderRadius: "6px", marginBottom: "5px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#005ACD" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                color: "#005ACD",
                fontFamily: "poppins-semibold",
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  lg: "18px",
                  xl: "18px",
                  md: "15px",
                },
              }}
            >
              In which semester are you currently enrolled?
            </AccordionSummary>
            <AccordionDetails sx={{
              fontFamily: "poppins-regular",
              fontSize: {
                xs: "14px",
                sm: "14px",
                lg: "15px",
                xl: "15px",
                md: "12px",
              }
            }}>
              I’m currently enrolled in Semester 8.
            </AccordionDetails>
          </Accordion>
        </motion.div>

        {/* Accordion 2 */}
        <motion.div variants={accordionVariant}>
          <Accordion sx={{ border: "none", borderBottom: '0.7px solid #005ACD', borderRadius: "6px", marginBottom: "5px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#005ACD" }} />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                color: "#005ACD",
                fontFamily: "poppins-semibold",
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  lg: "18px",
                  xl: "18px",
                  md: "15px",
                },
              }}
            >
              Have you completed any internships or gained practical experience?
            </AccordionSummary>
            <AccordionDetails sx={{
              fontFamily: "poppins-regular",
              fontSize: {
                xs: "14px",
                sm: "14px",
                lg: "15px",
                xl: "15px",
                md: "12px",
              }
            }}>
              I recently completed a 3-month internship as a React Developer at Unity Foods Limited (June to August). Additionally, I have experience as a WordPress Designer from a previous internship at Pakish.
            </AccordionDetails>
          </Accordion>
        </motion.div>

        {/* Accordion 3 */}
        <motion.div variants={accordionVariant}>
          <Accordion sx={{ border: "none", borderBottom: '0.7px solid #005ACD', borderRadius: "6px", marginBottom: "5px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#005ACD" }} />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{
                color: "#005ACD",
                fontFamily: "poppins-semibold",
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  lg: "18px",
                  xl: "18px",
                  md: "15px",
                },
              }}
            >
              What are your future career goals
            </AccordionSummary>
            <AccordionDetails sx={{
              fontFamily: "poppins-regular",
              fontSize: {
                xs: "14px",
                sm: "14px",
                lg: "15px",
                xl: "15px",
                md: "12px",
              }
            }}>
              My future career goal is to dive deeper into web and app development, continuously learning and expanding my knowledge in these technologies as much as possible.
            </AccordionDetails>
          </Accordion>
        </motion.div>

        <motion.div variants={accordionVariant}>
          <Accordion sx={{ border: "none", borderBottom: '0.7px solid #005ACD', borderRadius: "6px", marginBottom: "5px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#005ACD" }} />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{
                color: "#005ACD",
                fontFamily: "poppins-semibold",
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  lg: "18px",
                  xl: "18px",
                  md: "15px",
                },
              }}
            >
              What are you currently learning?
            </AccordionSummary>
            <AccordionDetails sx={{
              fontFamily: "poppins-regular",
              fontSize: {
                xs: "14px",
                sm: "14px",
                lg: "15px",
                xl: "15px",
                md: "12px",
              }
            }}>
              I’m currently learning React Native and the MEAN stack. Since I already know React, transitioning to React Native has been easy. My familiarity with the MERN stack has also made it easier to get started with Angular.
            </AccordionDetails>
          </Accordion>
        </motion.div>


        <motion.div variants={accordionVariant}>
          <Accordion sx={{ border: "none", borderBottom: '0.7px solid #005ACD', borderRadius: "6px", marginBottom: "5px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#005ACD" }} />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{
                color: "#005ACD",
                fontFamily: "poppins-semibold",
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  lg: "18px",
                  xl: "18px",
                  md: "15px",
                },
              }}
            >
              How can I contact you?
            </AccordionSummary>
            <AccordionDetails sx={{
              fontFamily: "poppins-regular",
              fontSize: {
                xs: "14px",
                  sm: "14px",
                lg: "15px",
                xl: "15px",
                md: "12px",
              }
            }}>
              Feel free to reach out to me via email at mehakkamran52@gmail.com.
            </AccordionDetails>
          </Accordion>
        </motion.div>



        


      </motion.div>
    </Container>
  );
}
