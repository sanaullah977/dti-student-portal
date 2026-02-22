import React from 'react';
import Card from '../../Components/Card/Card';
import { Outlet } from 'react-router';

const Student_Portal = () => {
    return (
        <div className='w-7xl flex justify-center mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Student_Portal;