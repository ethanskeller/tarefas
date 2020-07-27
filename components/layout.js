import React from 'react';
import PageHeader from './page-header';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-wrap">
            <aside className="lg:h-auto bg-white hidden lg:block lg:static fixed h-full w-full lg:w-1/4 xl:w-1/6 p-5">
                <Sidebar />
            </aside>
            <div className="min-h-screen w-full lg:static lg:w-3/4 xl:w-5/6 bg-gray-200">
                <PageHeader />
                <main className="p-10">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;