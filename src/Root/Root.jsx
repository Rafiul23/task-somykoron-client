import Navbar from "../Components/Navbar/Navbar";
import {Outlet} from 'react-router-dom';

const Root = () => {
    return (
        <div className="container mx-auto">
          <Navbar></Navbar>  
          <Outlet></Outlet>
        </div>
    );
};

export default Root;