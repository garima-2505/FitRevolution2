import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ paddingTop: { lg: '103px', xs: '20px' }, paddingBottom: '20px', textAlign: 'center' }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#fff" mb="33px">
        Watch <span style={{ color: '#60a5fa', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ justifyContent: 'center', gap: { lg: '50px', xs: '20px' }, width: '100%', }} direction="row" flexWrap="wrap">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: '1 0 calc(33.33% - 20px)', maxWidth: 'calc(33.33% - 20px)', textDecoration: 'none' }}
          >
            <img style={{ borderTopLeftRadius: '20px', width: '100%' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#fff">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#60a5fa">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
