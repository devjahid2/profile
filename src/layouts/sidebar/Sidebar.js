import React, { useContext } from "react";
import { images } from "../../assets/images/images";
import { Link } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth";
import { AppContext } from "../../App";

const Sidebar = () => {
  const onSmallScreen = useWindowWidth(575);
  const [context,setContext] = useContext(AppContext)
  return (
    <>{
            context.leftMenuOpen ? <div onClick={() => setContext({...context,leftMenuOpen:false})} className="overlay"></div> : ''
          }
      <div className={`sidebar ${onSmallScreen && context.leftMenuOpen ? 'active':''}`}>
      <div className="d-flex align-items center flex-column justify-content-center">
          
          {
            onSmallScreen ? <div className="d-flex align-items-center justify-content-end p-3 pt-2 mb-3">
              <img onClick={() => setContext({...context,leftMenuOpen:false})} src={images.close} alt="close" className="my-0 close-icon"/>
            </div> : <></>
          }
        <ul>
            <li><Link to="/"><img src={images.home} alt="home" /></Link></li>
            <li><Link to="/"><img src={images.passion} alt="passion" /></Link></li>
            <li><Link to="/"><img src={images.users} alt="users" /></Link></li>
        </ul>
        <div className="text-center bottom-img">
        <img src={images.settings} alt="settings" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
