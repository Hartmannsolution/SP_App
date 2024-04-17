import React from 'react';
import { Outlet } from 'react-router-dom';
import PageNav from './PageNav.tsx';

function AppLayout({ role }: { role: string }) {
  return (
    <div className="overflow">
      <PageNav role={role} />
      <Outlet />
    </div>
  );
}

export default AppLayout;
