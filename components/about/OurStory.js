'use client'
import React from 'react';
import { timelineOppositeContentClasses, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
const OurStory = ({ OurStoryData }) => {
    const theme = useTheme();
    const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{ my: { xs: 5, md: 15 } }}>
            <Box sx={{ textAlign: 'center', mb: 7, mt: 3 }}>
                <Typography variant='h5' color='secondary' fontWeight={600} marginBottom={1}>داستان ما</Typography>
                <Typography variant='body2' color='white' fontWeight={250}>داستان شکل گیری ما</Typography>
            </Box>
            <Timeline sx={{
                px: { xs: 0, md: 2 },
                [`& .${timelineOppositeContentClasses.root}`]: smallerThanMd && {
                    flex: 0.2
                },
            }} position={!smallerThanMd && 'alternate'}>
                {OurStoryData.map((item, index) => {

                    //the timeline items are placed left and right so we create a variable that is odd and even for every other item to place the items correctly and it's responsive, at mobile size it makes the timeline to be one sided
                    const right = smallerThanMd ? false : index % 2 == 1

                    return (
                        <TimelineItem >
                            <TimelineOppositeContent color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: right ? 'start' : 'end', px: { xs: 0, md: 2 } }}>
                                <Typography variant='h5' color='secondary' sx={{ fontWeight: 500 }}>{item.year}</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator sx={{ px: { xs: 1.5, sm: 2, md: 6, lg: 10 } }}>
                                <TimelineConnector sx={{ width: '1px', backgroundColor: '#192531' }} />
                                <TimelineDot sx={{ m: 0, boxShadow: '0 0 10px rgba(175,124,226,0.4)', backgroundColor: '#af7ce2' }} />
                                <TimelineConnector sx={{ width: '1px', backgroundColor: '#192531' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: 3 }}>
                                <Box sx={{ backgroundColor: '#192531', p: 3, color: 'white', borderLeft: '2px solid #af7ce2', borderRadius: 2, textAlign: 'left', marginLeft: right && 'auto', marginRight: !right && 'auto', maxWidth: { xs: '500px', md: '340px' }, boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)' }}>
                                    <Typography variant='body2' fontWeight={500} sx={{ mb: 1 }}>{item.title}</Typography>
                                    <Typography variant='subtitle2' sx={{ color: grey[400] }}>
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}

            </Timeline >
        </Box >
    );
}
export default OurStory;