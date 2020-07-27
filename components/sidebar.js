import React from 'react';

const Sidebar = () => {
    return (
        <>
            <h1>Workly</h1>
            <button>New Task</button>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>My Tasks</li>
                    <li>Task Catalog</li>
                    <li>Community</li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;