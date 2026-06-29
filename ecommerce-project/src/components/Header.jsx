import { NavLink, useNavigate, useSearchParams } from 'react-router';
import { useState } from 'react';
import LogoWhiteImage from '../assets/images/logo-white.png'
import MobileLogoWhiteImage from '../assets/images/mobile-logo-white.png'
import CartIcon from '../assets/images/icons/cart-icon.png'
import SearchIcon from '../assets/images/icons/search-icon.png'
import './Header.css';

export function Header({cart}) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search');
  const [search, setSearch] = useState( searchText || '');
  
  let totalQuanity = 0;
  
  cart.forEach((cartItem) => {
    totalQuanity += cartItem.quantity;
  });

  function saveInput(event){
    const value = event.target.value;
    setSearch(value);
  }

  function getSearchItem(){
    navigate(`/?search=${search}`);
  }

  function handleKeyDown(event){
    if (event.key === 'Enter'){
      getSearchItem();
    }
  }

  function clearSearch(){
    setSearch('');
  }

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link" onClick={clearSearch}>
          <img className="logo"
            src={LogoWhiteImage} />
          <img className="mobile-logo"
            src={LogoWhiteImage} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" value={search} onKeyDown={handleKeyDown} onChange={saveInput} type="text" placeholder="Search" />

        <button className="search-button" onClick={getSearchItem}>
          <img className="search-icon" src={SearchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink to="/orders" className="orders-link header-link">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={CartIcon} />
          <div className="cart-quantity">{totalQuanity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}