import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskItem = () => {
    return (
        <div className="flex block bg-white items-center justify-between px-10 py-5 shadow">
            <FontAwesomeIcon className="w-1/12" icon={["far", "clipboard"]} size="2x"/>
            <div className="w-4/12 ml-5">
                <h1 className="font-bold mb-3">
                    Increase confidence with TrustPilot reviews
                </h1>
                <div className="bg-red-100 w-auto inline-block px-3 py-2 rounded-full text-red-500 font-bold text-sm">
                    Marketing and Sales
                </div>
            </div>
            <div className="w-2/12">
                <p>
                    $99.00 (1 credit)
                </p>
                <p className="text-sm text-gray-700">
                    Task price
                </p>
                <p className="text-sm mt-3">
                    Delivery: <ins className="text-gray-700">within 2 days</ins>
                </p>
            </div>
            <div className="w-2/12 flex items-center">
                <FontAwesomeIcon icon="user-circle" size="2x" />
                <div className="ml-3">
                    <p>Henrique Wildes</p>
                    <p className="text-sm text-gray-700">Assigned to</p>
                </div>
            </div>
            <div className="w-2/12">
                <a className="my-5 block border-2 border-gray-700 p-3 font-bold rounded-full rounded-tl-none w-48 px-5">
                    <FontAwesomeIcon icon="circle" className="mr-3"/>
                    In Progress
                </a>
            </div>
            <div className="w-1/12">
                <a className="mr-10">
                    <FontAwesomeIcon icon={["far", "comment"]} size="lg" />
                </a>
                <a>
                    <FontAwesomeIcon icon="ellipsis-h" size="lg" />
                </a>
            </div>
        </div>
    );
};

export default TaskItem;