import React from 'react';
import PageHeader from './page-header';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-wrap">
            <aside className="lg:h-auto bg-red-500 hidden lg:block lg:static fixed h-full w-full lg:w-1/4 xl:w-1/5">
                <Sidebar />
            </aside>
            <div className="min-h-screen w-full lg:static lg:w-3/4 xl:w-4/5 bg-yellow-500">
                <PageHeader />
                <main className="bg-blue-500">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;