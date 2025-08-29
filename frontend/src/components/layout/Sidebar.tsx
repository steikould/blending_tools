import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Operator Dashboard', href: '/operator' },
  { name: 'Manager Dashboard', href: '/manager' },
  { name: 'Optimization Dashboard', href: '/optimization' },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-brand-primary text-white flex flex-col">
      <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-blue-800">
        FuelBlend AI
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                isActive
                  ? 'bg-blue-900 text-white'
                  : 'text-blue-200 hover:bg-blue-700 hover:text-white'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
