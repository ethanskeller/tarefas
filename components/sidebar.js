import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
    return (
        <>
            <div className="p-8">
                <h1>Workly</h1>
                <a className="text-center my-5 block bg-purple-200 text-purple-700 p-3 font-bold rounded-full rounded-tl-none">
                    <FontAwesomeIcon className="mr-3" icon={'plus'} />
                    New Task
                </a>
            </div>
            <nav className="block">
                <ul className="py-1">
                    <li className="flex items-center py-3 px-8 border-l-8 border-white">
                        <a>
                        <   FontAwesomeIcon className="mr-3" size="lg" icon={'home'} fixedWidth />
                            Home
                        </a>
                    </li>
                    <li className="flex items-center py-3 px-8 border-l-8 border-purple-500">
                        <a>
                        <   FontAwesomeIcon className="mr-3" size="lg" icon={'tasks'} fixedWidth />
                            My Tasks
                        </a>
                    </li>
                    <li className="flex items-center py-3 px-8 border-l-8 border-white">
                        <a>
                        <   FontAwesomeIcon className="mr-3" size="lg" icon={'clipboard'} fixedWidth />
                            Task Catalog
                        </a>
                    </li>
                    <li className="flex items-center py-3 px-8 border-l-8 border-white">
                        <a>
                            <FontAwesomeIcon className="mr-3" size="lg" icon={'users'} fixedWidth />
                            Community
                            <FontAwesomeIcon className="ml-3" size="xs" icon={'chevron-down'} fixedWidth />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;