import { useState, Fragment } from "react";
import { FormGroup, FormControl, Input, InputLabel, Button, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/styles' ;
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const useStyle =  makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *':{
            marginTop: 20
        }
    }
})

const initialValues = {    
    userName: "",
    password: ""
}

const Autenticate = () => {
    const [ user, setUser ] = useState(initialValues);
    const {userName, password } = user;
    const classes = useStyle();
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })        
    }

    return (
        <Fragment>
        <Container width="lg" sx={{ mt: 4, mb: 4 }}>            
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>                    
                    <FormGroup className={classes.container}>
                        <Typography variant="h4" className='text-center'>Login</Typography>
                        
                        <FormControl>
                            <InputLabel>Nombre de usuario</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='userName' value={userName}/>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel>Contraseña</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='password' value={password}/>
                        </FormControl>
                        <br/>
                        <div className='text-center'>
                            <Button variant="contained" color='primary' style={{marginRight: 20}}>Iniciar sesión</Button>
                        </div> 
                    </FormGroup>
                    </Paper>    
                </Grid> 
            </Container> 
        </Fragment>
    )
}

export default Autenticate;