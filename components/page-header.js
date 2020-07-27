import React from 'react';

const PageHeader = () => {
    return (
        <nav className="bg-green-500 flex justify-end px-5 py-3">
            <a className="m-2">Messages</a>
            <a className="m-2">Alerts</a>
            <a className="m-2">Henrique Wildes</a>
        </nav>
    );
};

export default PageHeader;