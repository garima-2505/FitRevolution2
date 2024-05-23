import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from './utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' }, p: '20px' }}>
      <Typography 
        variant="h4" 
        fontWeight="bold" 
        sx={{ 
          fontSize: { lg: '36px', xs: '24px' }, 
          color: 'white', 
          mb: '20px', 
          textAlign: 'left', 
          ml: { lg: '20px', xs: '10px' } // Margin from left
        }}
      >
        Showing Results
      </Typography>
      <Stack 
        direction="row" 
        sx={{ gap: { lg: '107px', xs: '50px' } }} 
        flexWrap="wrap" 
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  bgcolor: item.selected ? '#60a5fa' : '#000005',
                  color: item.selected ? '#fff' : '#60a5fa',
                  textTransform: 'none',
                  marginRight: '10px',
                  fontSize: '1rem',
                  '&.Mui-selected': {
                    bgcolor: '#60a5fa',
                    color: '#fff',
                  },
                  '&:hover': {
                    bgcolor: '#60a5fa',
                    color: '#fff',
                  },
                  borderRadius: '8px',
                  p: '10px 15px',
                  boxShadow: item.selected ? '0px 4px 10px rgba(96, 165, 250, 0.4)' : 'none',
                }}
              />
            )}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
