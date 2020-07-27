import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageHeader = () => {
    return (
        <nav className="flex justify-end px-5 py-3">
            <a className="m-2">
                <FontAwesomeIcon className="mr-3" size="lg" icon={'envelope'} fixedWidth />
            </a>
            <a className="m-2">
                <FontAwesomeIcon className="mr-3" size="lg" icon={'bell'} fixedWidth />
            </a>
            <a className="m-2">
                <FontAwesomeIcon className="mr-3" size="lg" icon={'user-circle'} fixedWidth />
                Henrique Wildes
                <FontAwesomeIcon className="ml-3" size="xs" icon={'chevron-down'} fixedWidth />
            </a>
        </nav>
    );
};

export default PageHeader;