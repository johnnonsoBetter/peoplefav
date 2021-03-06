import { Box, Grid, Paper, Skeleton } from '@mui/material'
import React from 'react'


export default function ThingLoader() {

    const loads = [1,2,3,4,5,6,7,8,9,10]

    return (
        <Box my={3} >
            <Grid container >
               {
                   loads.map(l => (
                    <Grid key={l} item xs={12} sm={6} md={4} >
                    <Paper sx={{margin: "2px", p: 2, mx: 1}} >

                    <Box >
                        <Box display="flex" justifyContent="space-between" >
                            <Skeleton variant="text" width={30} height={30} />

                            <Skeleton variant="text" width={30} height={30} />

                        </Box>

                        <Box display="flex" justifyContent="center" >
                            <Skeleton variant="rectangular" height={120} width={120}/>
                        </Box>
                    </Box>


                    </Paper>
                   
                </Grid>
                   ))
               }
            </Grid>
        </Box>
    )
}