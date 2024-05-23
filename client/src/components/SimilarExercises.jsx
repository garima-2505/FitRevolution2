import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' }, paddingLeft: "5rem"  }} paddingBottom={"12rem"}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', paddingBottom: '20px' }} fontWeight={700} color="#fff" mb="33px">
      Similar <span style={{ color: '#60a5fa', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack sx={{ justifyContent: 'center' }} direction="row" flexWrap="wrap" spacing={3} >
      {targetMuscleExercises.length !== 0 ? targetMuscleExercises.map((exercise, index) => (
        <Box key={index} sx={{ width: { xs: '50%', lg: 'auto' }, marginBottom: '30px' }} paddingBottom={"2rem"}>
          <HorizontalScrollbar data={[exercise]} />
        </Box>
      )) : <Loader />}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' }, paddingBottom: '20px' }} fontWeight={700} color="#fff" mb="33px">
      Similar <span style={{ color: '#60a5fa', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack sx={{ justifyContent: 'center' }} direction="row" flexWrap="wrap" spacing={3}>
      {equipmentExercises.length !== 0 ? equipmentExercises.map((exercise, index) => (
        <Box key={index} sx={{ width: { xs: '50%', lg: 'auto' }, marginBottom: '20px' }}>
          <HorizontalScrollbar data={[exercise]} />
        </Box>
      )) : <Loader />}
    </Stack>
  </Box>
);

export default SimilarExercises;
