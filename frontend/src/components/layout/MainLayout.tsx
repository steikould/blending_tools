import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header'; // Assuming a Header component exists

interface MainLayoutProps {
  children: React.ReactNode;
  headerTitle: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, headerTitle }) => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={headerTitle} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
