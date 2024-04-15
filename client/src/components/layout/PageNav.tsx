import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

type NavLinkProps = {
  direct: string;
  children: React.ReactNode;
};

function AppLink({ direct, children }: NavLinkProps) {
  return (
    <NavLink
      to={direct}
      className="inline-block w-[6.5rem] transform rounded bg-green-600 px-4 py-2 text-center font-extrabold leading-none text-blue-50 delay-100 hover:scale-110 hover:bg-opacity-80 hover:shadow-inner md:w-[10rem] md:px-6 md:py-3 md:text-xl md:leading-tight"
    >
      {children}
    </NavLink>
  );
}

function PageNav({ role }: { role: string }) {

  const adminLinks = (
    <Fragment>
      <li>
        <AppLink direct="review">Review</AppLink>
      </li>
      <li>
        <AppLink direct="csv">CSV</AppLink>
      </li>
    </Fragment>
  );

  const studentLinks = (
    <Fragment>
      <li>
        <AppLink direct="activities">Activities</AppLink>
      </li>
      <li>
        <AppLink direct="status">Status</AppLink>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <ul className="flex justify-center gap-3">
        {role === 'admin' ? adminLinks : studentLinks}
      </ul>
    </nav>
  );
}

export default PageNav;
