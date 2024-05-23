import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize" color={"#60a5fa"}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#fff">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
           <Button 
  sx={{ 
    background: '#000005', 
    borderRadius: '50%', 
    width: '100px', 
    height: '100px', 
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3), 0px 7px 15px rgba(0, 0, 0, 0.2)', // Adding box shadow for 3D effect
    '&:hover': {
      transform: 'translateY(-2px)', // Slight lift on hover for additional 3D effect
      boxShadow: '0px 6px 9px rgba(0, 0, 0, 0.3), 0px 10px 20px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
    }
  }}
>
  <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
</Button>

            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }} color={"#60a5fa"}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
