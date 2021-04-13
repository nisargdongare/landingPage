// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navBar';
import Page2 from './components/page2/Page2';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { duration } from '@material-ui/core';

function App() {
  return (
    <div>
      <div className ="body"> 
        <div className="empty1"></div> 
        <NavBar/>
        <div className = "empty"></div>
        <div className="bottomContainer">
            <TextField id="standard-basic" label="Acheter" className = "datainput" />
            <TextField id="standard-basic" label="Ville, code postal" className = "datainput" />
            <TextField id="standard-basic" label="Prix minimum" className = "datainput" />
            <TextField id="standard-basic" label="Prix maximum" className = "datainput" />
            <TextField id="standard-basic" label="Surface minimum" className = "datainput" />
            <Button variant="outlined">RECHERCHER</Button>
            <TextField id="standard-basic" label="Preciser ma recherche" className = "datainput" />
        </div>
      </div>
      <Page2/>
    </div>
  );
}

export default App;
