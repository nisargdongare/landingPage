import React,{useState,useEffect} from 'react';
import './navBar.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';



const NavBar = () => {
  const [maxWidth, setmaxWidth] = useState(0);
  const [press, setpress] = useState(0);

  useEffect(() => {
    let width =window.innerWidth;
  console.log(window.innerWidth);
  if(width<=1000)  {setmaxWidth(1);}
  else             {setmaxWidth(0);}

  }, []);

  
  return (
    <div>
      {maxWidth==0?
        <div className='navbar'>
          <div className='box'>
            <Button className='btn'>ACHETER</Button>
            <Button className='btn'>VENDRE</Button>
            <Button className='btn'>LOUER</Button>
            <Button className='btn'>L'AGENCE</Button>
          </div>
          <div className='box2'>
             <a className='btn2'>KRETZ</a>
             <div>FAMILY REAL ESTATE</div>
          </div>
          <div className='box3'>
             <TextField id="standard-basic" label="Creer une alerte" className="btn3" />
             <TextField id="standard-basic" label="REFERENCE" className="btn3" />
          </div>
        </div>: 
        <div>
            <div className='navbarSmall'>
                 <Menu onClick={()=>{if(press){setpress(0);} else {setpress(1);}}}/>
                 <a className='btn2Small'>KRETZ</a>
              {(press) ?
              <div>
                  <div className='box'>
                      <Button className='btn'>ACHETER</Button>
                      <Button className='btn'>VENDRE</Button>
                      <Button className='btn'>LOUER</Button>
                      <Button className='btn'>L'AGENCE</Button>
                  </div>
                  <div className='box3'>
                      <TextField id="standard-basic" label="Creer une alerte" className="btn3" />
                      <TextField id="standard-basic" label="REFERENCE" className="btn3" />
                  </div>
              </div>:<div></div>
              }
            </div>
        </div>
        }
    </div>
  );
}

export default NavBar;



      
// <div>
//               <div className='navbarSmall'>
//                 <Menu onClick={()=>{if(press){setpress(0);} else {setpress(1);}}}/>
//                 <a className='btn2Small'>KRETZ</a>
//               </div>
//               {(press || maxWidth==1) ?
//                 <div>
//                       <div className='box'>
//                           <Button className='btn'>ACHETER</Button>
//                           <Button className='btn'>VENDRE</Button>
//                           <Button className='btn'>LOUER</Button>
//                           <Button className='btn'>L'AGENCE</Button>
//                       </div>
//                       <div className='box3'>
//                           <TextField id="standard-basic" label="Creer une alerte" className="btn3" />
//                           <TextField id="standard-basic" label="REFERENCE" className="btn3" />
//                       </div>
//                 <div> : <div></div> }
//           </div>