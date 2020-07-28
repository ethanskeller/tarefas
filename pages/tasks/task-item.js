import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskItem = () => {
    return (
        <div className="flex block bg-white items-center justify-between px-10 py-5">
            <FontAwesomeIcon icon={["far", "clipboard"]}/>
            <div>
                Info
            </div>
            <div>
                Price
            </div>
            <div>
                Assigned
            </div>
            <div>
                Status
            </div>
            <div>
                Actions
            </div>
        </div>
    );
};

export default TaskItem;