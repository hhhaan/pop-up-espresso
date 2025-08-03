'use client';

import { Header } from '@/widgets/header';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <div>{children}</div>
        </div>
    );
};

export default Layout;

//
