import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import {HiHome} from 'react-icons/hi';
import {HiKey} from 'react-icons/hi';
import {HiOutlineClipboardList} from 'react-icons/hi';
import {HiPencil} from 'react-icons/hi';
import {HiPhoneOutgoing} from 'react-icons/hi';
import {HiOfficeBuilding} from 'react-icons/hi';


function Navbar() {
  return (
    <>



      {/* <div className="navbar navbar-expand-lg bg-dark nav " data-bs-theme="dark">

  <div className="navbar-nav container-navbar ">
    
  <a className="navbar-brand " href="#">Navbar</a>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        

     
    <div className="navbar-nav" >
   
    
        
      
      

      
        
        <a className="nav-link " aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link " href='#'>Disabled</a>
        
       
        
        
        </div>
  </div>
  </div>
</div> */}




      <nav className="navbar navbar-expand-lg bg-dark  nav" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand navbar-brand-img" to="/">
            <img src='./nonbinary.jpg' height={'50px'} width="100%"
              style={{ borderRadius: "20px", border: "3px solid black" }}></img></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse right" id="navbarNavAltMarkup">
            <div className="navbar-nav">

              <Link className="nav-link nav-link-style" aria-current="page" to="/"><HiHome></HiHome> Home</Link>
              <Link className="nav-link nav-link-style" to="/empresa"><HiOfficeBuilding>
                </HiOfficeBuilding> Empresa</Link>

              <Link className="nav-link nav-link-style" to="/contato"><HiPhoneOutgoing>
                </HiPhoneOutgoing> Contato</Link>

              <Link className="nav-link nav-link-style" to="/seunome"><HiPencil>
                </HiPencil> Seu Nome</Link>

              <Link className="nav-link nav-link-style" to="/form"><HiKey></HiKey> Form</Link>
              <Link className="nav-link nav-link-style" to="/condicional"><HiKey></HiKey> Condicional</Link>
              <Link className="nav-link nav-link-style" to="/outralista"><HiOutlineClipboardList>
                </HiOutlineClipboardList> Outra Lista</Link>

              <Link className="nav-link nav-link-style" to="/api"><HiOutlineClipboardList>
                </HiOutlineClipboardList> Api</Link>
     


            </div>
          </div>
        </div>
      </nav>
  
    </>
  )
}


export default Navbar;