import React from 'react';
import './navBar.css';
import TextField from '@material-ui/core/TextField';

const NavBar = () => {

  return (
    <div>
      <div className='navbar'>
        <div >
          <a className='btn'>ACHETER</a>
          <a className='btn'>VENDRE</a>
          <a className='btn'>LOUER</a>
          <a className='btn'>L'AGENCE</a>
        </div>
        <div className='box2'>
          <a className='btn2'>KRETZ</a>
          <div className='btn3'>FAMILY REAL ESTATE</div>
        </div>
        <div>
          <TextField id="standard-basic" label="Creer une alerte" />
          <TextField id="standard-basic" label="REFERENCE" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;


// <AppBar position="static">
// <Toolbar>
//   <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//     <MenuIcon />
//   </IconButton>
//   <Typography variant="h6" className={classes.title}>
//     KRETZ
//   </Typography>
//   <Button color="inherit">ACHETER</Button>
//   <Button color="inherit">VENDRE</Button>
//   <Button color="inherit">LOUER</Button>
//   <Button color="inherit">L'AGENCE</Button>
//   <Button color="inherit">KRETZ</Button>
//   <TextField id="standard-basic" label="Creer une alerte" />
//   <TextField id="standard-basic" label="REFERENCE" />
// </Toolbar>
// </AppBar>