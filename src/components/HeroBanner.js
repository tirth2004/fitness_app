import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import fitnessImage from '../assets/images/fitnessImage.jpg'
import { width } from '@mui/system';

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '214px', xs: '72px'}, ml: { sm:'52px'}}} position="relative" p="20px">
        <Stack direction="row">
        <Stack sx= {{
            mt: "100px"
        }}>
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                Fit-O-Pedia
            </Typography>
            <Typography fontWeight="700" sx={{
                fontSize: {lg:'43px', xs:'39px'}
            }}>
                Confused which exercise to do?
            </Typography>
            <Typography fontSize='22px' LineHeight="34px" mb='20px'>
                We got you covered!
            </Typography>
            <Button variant="outlined" sx={{
                color: '#FF2625',
                borderColor: 'black',
                width:"50%"
                
            }} >
                Explore exercises
            </Button>
            <Typography fontWeight={600} color="#ff2625" fontSize = "200px"
            sx={{opacity: 0.1}}>
                Exercise
            </Typography>
        </Stack>
        <Stack sx ={{ml:"100px"}}>
            <img src={fitnessImage} alt="banner" className='hero-banner-image' width='100%' height="800px"
            />
        </Stack>
        </Stack>
        
    </Box>
  )
}

export default HeroBanner