import { AppBar,Toolbar } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from '@mui/material/Typography';
const NavBar = () => {
  return (
    <div>
<AppBar>
    <Toolbar>
        <Grid container>
            <Grid xs={4}>
<Typography>
   <h2>Saylani Welfare</h2> 
</Typography>
            </Grid>
            <Grid xs={6}>
                <a href='#'>Home</a>
                <a href='#'>Cart</a>


            </Grid>
            <Grid xs={2}>
            <AddShoppingCartIcon/>
            </Grid>

        </Grid>
    </Toolbar>
</AppBar>
    </div>
  )
}

export default NavBar