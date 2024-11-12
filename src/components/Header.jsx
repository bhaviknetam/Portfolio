import React from 'react';
import ConsoleText from './console';

const Header = () => {
    return (
        <header className='shadow'>

            <div className="header-content text-center py-3">
                <h1>Bhavik Netam</h1>
                <ConsoleText />
            </div>
        </header>
    );
};

export default Header;
