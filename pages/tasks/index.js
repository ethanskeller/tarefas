import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';
import TaskItem from './task-item';

const Tasks = () => {
    return (
        <Layout>
            <nav className="mb-10">
                <ul className="flex">
                    <li className="mr-10">
                        <a className="text-center block p-1 border-b-4 rounded text-xl font-bold border-purple-500">
                            Active Tasks (0)
                        </a>
                    </li>
                    <li className="mr-10">
                        <a className="text-center block p-1 border-b-4 rounded text-xl font-bold border-purple-500">
                            Completed (0)
                        </a>
                    </li>
                    <li className="mr-10">
                        <a className="text-center block p-1 border-b-4 rounded text-xl font-bold border-purple-500">
                            Archived (0)
                        </a>
                    </li>
                    <li className="mr-10">
                        <a className="text-center block p-1 border-b-4 rounded text-xl font-bold border-purple-500">
                            Closed (0)
                        </a>
                    </li>
                </ul>
            </nav>
            <div>
                <p className="text-upper mb-3">Current</p>
                <TaskItem />
            </div>
        </Layout>
    );
};

export default Tasks;