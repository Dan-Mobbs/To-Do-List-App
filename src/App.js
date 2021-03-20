import React from 'react'
import Mainheader from './components/main/Mainheader'


const App = () => {
  return (
   <>
      
    <div className="sidebar-heading">
        Interface
    </div>

    <li className="nav-item">
        <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
        </a>
        <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="buttons.html">Buttons</a>
                <a className="collapse-item" href="cards.html">Cards</a>
            </div>
        </div>
    </li>
  </>  
  );
}

export default App;
