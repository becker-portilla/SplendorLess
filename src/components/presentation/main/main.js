import React from 'react';
import Grid from '@material-ui/core/Grid/Grid'
import { Link } from "react-router-dom";


function Main(props){
    
    return (
        <Grid container alignContent="center" alignItems="center" direction="row" justify="center" xs={12}>
                <Grid item>SplendorLess</Grid>
                <Grid item xs={12}><Link to="/board">Nuevo Juego</Link></Grid>
                <Grid item xs={12}><Link to="/playerBoard">Unirse</Link></Grid>
        </Grid>
    );
}

export default Main;