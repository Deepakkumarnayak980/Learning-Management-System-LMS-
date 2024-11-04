
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

function HomeLayout() {
  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    if (drawerSide[0]) {
      drawerSide[0].style.width = '200px'; // Set to desired width for opening
    }
  }

  function hideDrawer() {
    const element = document.getElementsByClassName('drawer-toggle');
    if (element[0]) {
      element[0].checked = false;
    }
    const drawerSide = document.getElementsByClassName("drawer-side");
    if (drawerSide[0]) {
      drawerSide[0].style.width = '0px'; // Collapse width to 0 for closing
    }
  }

  return (
    <div className='main-h-[90vh]'>
      <div className='drawer absolute left-0 z-50 w-fit'>
        <input className='drawer-toggle' id='my-drawer' type='checkbox' />
        <div className='drawer-content'>
          <label htmlFor='my-drawer' className='cursor-pointer relative'>
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className='font-bold text-white m-4'
            />
          </label>
        </div>
        <div className='drawer-side w-0 transition-all duration-300'>
          <label htmlFor='my-drawer' className='drawer-overlay'>
            <ul className='menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative'>
              <li className='w-fit absolute right-2 z-50'>
                <button onClick={hideDrawer}>
                  <AiFillCloseCircle size={24} />
                </button>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses">All Courses</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </label>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;

