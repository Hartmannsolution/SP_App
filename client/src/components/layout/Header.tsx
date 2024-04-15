import { NavLink } from 'react-router-dom';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { FaClipboardList } from 'react-icons/fa';
import {
  AuthContextType,
  ToastContextType,
  ToastMsgTypes,
} from '../../types/types.ts';
import {useToast} from "../../context/ToastContext.tsx";
import {useAuth} from "../../context/AuthContext.tsx";

function Header() {
  const { logout, isAuthenticated} = useAuth() as AuthContextType;
  const { setToast } = useToast() as ToastContextType;

  function logoutHandler() {
    logout();
    setToast('You have been logged out', ToastMsgTypes.INFO);
  }


  return (
    <nav className="mb-10 h-[100px] w-full border-b-4 border-green-600 bg-blue-800 p-2 text-blue-50 ">
      <ul className="mt-4 flex justify-between">
        <li className="ml-4 flex items-center gap-2 text-lg font-bold md:text-4xl">
          <FaClipboardList size={40} />
          <h1>Study-Points App</h1>
        </li>
        <li className="mr-4">
          {!isAuthenticated ? (
            <NavLink to="/">
              <CiLogin size={50} />
            </NavLink>
          ) : (
            <button onClick={logoutHandler}>
              <CiLogout size={50} />
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
