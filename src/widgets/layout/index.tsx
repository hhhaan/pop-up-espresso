'use client';

import { Header } from '@/widgets/header';

interface LayoutProps {
    children: React.ReactNode;
    header?: boolean;
}

export const Layout = ({ children, header = true }: LayoutProps) => {
    return (
        <div className="flex flex-col max-w-md mx-auto min-h-screen bg-white">
            {header && <Header />}
            <div>{children}</div>
        </div>
    );
};

export default Layout;
