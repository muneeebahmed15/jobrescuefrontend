import React from 'react';
import { Link } from 'react-router-dom';
import { admin } from '../../Components/layout/menu';

const BreadCrumbs = ({path}) => {
    // const pathname = path.includes("hiring-management") ? "hiring-management" : path.includes("staff-management") ? "staff-management" : "";

    return (
        <>
            <ul className='d-md-flex d-none list-unstyled mx-2 mt-2 rounded-3 p-2' style={{ backgroundColor : "#c4c5c9" }}>
                {admin.map((x, index) => (
                            <li className='rounded-3'  style={{color: path === x.link ? "#5369f8" : "black", padding: "5px 10px"}} key={index}>
                                <Link to={x.link} style={{color: path === x.link ? "#5369f8" : "black", textDecoration: "none" }}>{x.title}</Link>
                            </li>
                        ))
                    }
            </ul>
        </>
    );
    
};

export default BreadCrumbs;
