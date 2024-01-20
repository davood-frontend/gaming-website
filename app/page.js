'use client'
import React from 'react';
import { Box, Button, Avatar, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'
import Image from 'next/image';
import assassinsCreed from '@/assets/assassinsCreed.jpg'
import watchDogs from '@/assets/watchDogs.jpg'
import Grid from '@mui/material/Unstable_Grid2'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { MobileHeader, DesktopHeader } from '@/components/Headers'
import hocHeader from '@/components/hocHeader';
import CircleIcon from '@mui/icons-material/Circle';
import { grey } from '@mui/material/colors';
const page = () => {
  const MainHeader = hocHeader(DesktopHeader, MobileHeader)
  const theme = useTheme()
  const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm'))
  const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box>
      {MainHeader}

      <Box sx={{ backgroundColor: '#101820', height: '1200px' }}>
        <Box sx={{ height: '650px', position: 'relative' }} id='the one'>
          <Avatar variant='square' sx={{ height: 1, width: 1, position: 'relative' }}>
            <Image src={assassinsCreed} fill style={{ filter: 'grayscale(1) blur(3px)', objectFit: 'cover' }} />
          </Avatar>
          <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, background: 'linear-gradient(to top, #101820, rgba(16, 24, 32, 0))' }} />
          <Box sx={{ px: { xs: '10px', sm: '20px', md: '30px', lg: '10%' }, position: 'absolute', width: 1, height: 1, top: { xs: 50, md: 180, lg: 160 }, right: 0, display: 'flex', justifyContent: 'center' }}>
            <Grid spacing={{ xs: 0, sm: 2, md: 3 }} container sx={{ width: 1, alignSelf: 'start' }}>
              <Grid xs={0} sm={4} md={5} lg={4} sx={{ position: 'relative', display: { xs: 'none', sm: 'block' } }}>
                <Avatar variant='square' sx={{ width: 1, height: { sm: '300px', md: '400px', lg: '500px' }, borderRadius: 5, position: 'relative' }}>
                  <Image src={watchDogs} fill style={{ objectFit: 'cover', zIndex: 0, objectPosition: 'center center' }} />
                  <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, background: 'linear-gradient(to top, rgba(16, 24, 32, 0.9), rgba(16, 24, 32, 0) 80%)', zIndex: 1 }} />
                </Avatar>


                <Box sx={{ position: 'absolute', px: 3, pb: 3, height: 1, width: 1, top: 0, right: 0, zIndex: 2, display: 'flex', alignItems: 'end', justifyContent: 'center' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: 1 }}>
                    <Box sx={{ backgroundColor: theme.palette.secondary.main, p: 1, borderRadius: 1.5, marginBottom: 2 }}>
                      <Typography variant={smallerThanMd ? 'subtitle2' : 'h6'}>
                        واچ داگز 2
                      </Typography>
                    </Box>
                    <Typography variant='subtitle2' sx={{ color: 'white', fontWeight: 300, mb: 1, display: smallerThanMd ? 'none' : 'block' }}>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متو
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 1 }}>
                      <ShoppingCartOutlinedIcon sx={{ color: theme.palette.secondary.main }} />
                      <Typography sx={{ color: theme.palette.secondary.main }}>
                        150,000 تومان
                      </Typography>
                    </Box>
                  </Box>
                </Box>

              </Grid>
              <Grid xs={12} sm={8} md={7} lg={8} sx={{ position: 'relative', gridTemplateRows: { xs: '250px 50px', md: '350px 50px', lg: '450px 50px' }, display: 'grid' }}>

                <Grid>
                  <Avatar variant='square' sx={{ width: 1, borderRadius: 5, height: 1, position: 'relative', display: 'grid' }}>
                    <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, background: 'linear-gradient(to left, rgba(16, 24, 32, 0.8), rgba(16, 24, 32, 0) 80%)', zIndex: 1 }} />
                    <Image src={assassinsCreed} fill style={{ objectFit: 'cover', zIndex: 0, objectPosition: 'center center' }} />
                  </Avatar>
                </Grid>


                <Grid sx={{ width: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', mt: 'auto', px: 3, py: 1, borderRadius: 1, color: grey[700], justifyContent: 'space-between', display: 'flex' }}>
                  <Typography sx={{ fontWeight: 400 }}>
                    ضمانت
                  </Typography>
                  <Typography sx={{ fontWeight: 400 }}>
                    تحویل سریع
                  </Typography>
                  <Typography sx={{ fontWeight: 400 }}>
                    پشتیبانی
                  </Typography>
                </Grid>

                <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0, right: 0, zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'start', paddingRight: 4 }}>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                      <CircleIcon sx={{ fontSize: '10px', color: 'white' }} />
                      <Typography sx={{ color: 'white', fontWeight: 500, cursor: 'pointer' }}>
                        دویل می کرای
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CircleIcon sx={{ fontSize: '10px', color: 'white' }} />
                      <Typography sx={{ color: 'white', fontWeight: 500, cursor: 'pointer' }}>
                        واچ داگز
                      </Typography>
                    </Box>
                  </Box>
                </Box>

              </Grid>
            </Grid>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default page;
