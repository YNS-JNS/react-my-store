import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { useState } from 'react';
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        {/* Brand/Title */}
        <Link to='/' className='logo'>
          NeuraShop 🛍️
        </Link>

        {/* Links */}
        <div className='nav-links'>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : '')}>
            {' '}
            Home{' '}
          </NavLink>
          <NavLink to='/products' className={({ isActive }) => (isActive ? 'active-link' : '')}>
            {' '}
            Products{' '}
          </NavLink>
          <NavLink to='/add-product' className={({ isActive }) => (isActive ? 'active-link' : '')}>
            {' '}
            Add Product{' '}
          </NavLink>
          <NavLink to='/cart' className={({ isActive }) => (isActive ? 'active-link' : '')}>
            {' '}
            My Cart{' '}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
