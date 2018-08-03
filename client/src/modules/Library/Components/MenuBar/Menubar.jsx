import React from 'react';
import { Link } from 'react-router-dom';
import { LibraryRoutes } from '../../../../Route/Route';
const menubar = (props) => {
    return (
        <div>
            <ul>
                {LibraryRoutes.map((item,key)=>{
                    return(
                        <li key={key} ><Link to={item.path} >{item.label}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}


export default menubar;