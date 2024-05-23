import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from './utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" >
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center" color={"#fff"}>
        Awesome Exercises You <br /> <span style={{color : "#60a5fa"}}>Should Know</span>
      </Typography>
      <Box position="relative" mb="72px">
      <TextField
  height="76px"
  sx={{
    input: {
      fontWeight: '700',
      border: 'none',
      borderRadius: '4px',
      color: '#fff',
      paddingLeft : "2rem"
    },
    '& .MuiInputBase-input::placeholder': {
      color: '#fff', // Placeholder color
      opacity: 1, // Override default opacity
      padding : "2rem"
    },
    width: { lg: '1000px', xs: '300px' },
    backgroundColor: '#0f172a',
    borderRadius: '40px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#60a5fa', // Default border color
        borderRadius: '40px',   // Curved border
      },
      '&:hover fieldset': {
        borderColor: '#60a5fa', // Border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: '#60a5fa', // Border color when focused
      },
    },
  }}
  value={search}
  onChange={(e) => setSearch(e.target.value.toLowerCase())}
  placeholder="Search Exercises"
  type="text"
/>

        <Button className="search-btn" sx={{ bgcolor: '#rgb(2 6 23)', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', p: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {bodyParts.map((part, index) => (
          <Button
            key={index}
            onClick={() => setBodyPart(part)}
            sx={{
              bgcolor: bodyPart === part ? '#60a5fa' : '#000005',
              color: bodyPart === part ? '#fff' : '#60a5fa',
              textTransform: 'none',
              padding: '10px 20px',
              fontSize: '1rem',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
              '&:hover': {
                bgcolor: '#60a5fa',
                color: '#fff',
              },
            }}
          >
            {part}
          </Button>
        ))}
      </Box>
    </Stack>
  );
};

export default SearchExercises;
