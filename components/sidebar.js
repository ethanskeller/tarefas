import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
    return (
        <>
            <h1>Workly</h1>
            <a className="text-center my-5 block">
                <FontAwesomeIcon className="mr-3" icon={'plus'} />
                New Task
            </a>
            <nav className="block">
                <ul className="py-1">
                    <li className="my-5 flex items-center">
                        <FontAwesomeIcon className="mr-3" size="lg" icon={'home'} fixedWidth />
                        Home
                    </li>
                    <li className="my-5 flex items-center">
                        <FontAwesomeIcon className="mr-3" size="lg" icon={'tasks'} fixedWidth />
                        My Tasks
                    </li>
                    <li className="my-5 flex items-center">
                        <FontAwesomeIcon className="mr-3" size="lg" icon={'clipboard'} fixedWidth />
                        Task Catalog
                    </li>
                    <li className="my-5 flex items-center">
                        <FontAwesomeIcon className="mr-3" size="lg" icon={'users'} fixedWidth />
                        Community
                        <FontAwesomeIcon className="ml-3" size="xs" icon={'chevron-down'} fixedWidth />
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;