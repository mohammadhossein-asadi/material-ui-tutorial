import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { ButtonGroup } from '@material-ui/core';
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import "fontsource-roboto"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu"


const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 25px"
  }
})

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36
    }
  },
  palette: {
    primary: {
      main: green[400]
    },
    secondary: {
      main: orange[400]
    }
  }
})

function ButtonStyled() {
  const classes = useStyles()
  return <Button className={classes.root}>Test Styled Button</Button>
}



function CheckboxExample() {
  const [checked, setChecked] = useState(true)
  return (
    <FormControlLabel control={<Checkbox
      checked={checked}
      icon={<DeleteIcon />}
      checkedIcon={<SaveIcon />}
      onChange={(e) => setChecked(e.target.checked)}
      inputProps={{
        "aria-label": "secondary checkbox"
      }}
      color="secondary"
    />}
      label="Testing Checkbox"
    />
  )
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color='secondary'>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant='h6'>
                  MUi Themeing
                </Typography>
                <Button color='primary'>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant='h2'>
              Welcome to MUI
            </Typography>
            <Typography variant='subtitle1' component="div">
              Learn how to use Material Ul
            </Typography>
            <ButtonStyled />

            <Grid container spacing={2} justifyContent='center'>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>

            <CheckboxExample />
            <ButtonGroup variant='contained' color='primary'>
              <Button startIcon={<SaveIcon />} size='large'>Save</Button>
              <Button startIcon={<DeleteIcon />} size='large'>Discard</Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
