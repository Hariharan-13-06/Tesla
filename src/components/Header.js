import React from 'react';
import logo from '../Images/teslaLogoSmall.svg';

const Header = () => {
    return (
        <div className="px-4 py-3 z-100 bg-blue-400">
            <div className="flex flex-row justify-between items-center">
                <div>
                    <img className="cursor-pointer h-4 tracking-widest" src={logo} />
                </div>
                <div className="flex flex-row space-x-4 justify-evenly items-center">
                    <p className="cursor-pointer hover:text-white">MODEL S</p>
                    <p className="cursor-pointer hover:text-white">MODEL 3</p>
                    <p className="cursor-pointer hover:text-white">MODEL X</p>
                    <p className="cursor-pointer hover:text-white">MODEL Y</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                    <p className="cursor-pointer hover:text-white">SHOP</p>
                    <p className="cursor-pointer hover:text-white">TESLA ACCOUNT</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
