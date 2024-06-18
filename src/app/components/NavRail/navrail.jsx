// components/Sidebar.js
import Link from 'next/link';
import { FaHome, FaStar, FaSearch, FaCalendarAlt, FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>
      <div className="menu">
        <button className="menu-btn">
          <FaCalendarAlt className="icon" />
        </button>
        <div className="menu-list">
          <Link href="/">
            <a className="menu-item">
              <FaHome className="icon" />
              <span>Home</span>
            </a>
          </Link>
          <Link href="/favoritos">
            <a className="menu-item">
              <FaStar className="icon" />
              <span>Favoritos</span>
            </a>
          </Link>
          <Link href="/pesquisar">
            <a className="menu-item">
              <FaSearch className="icon" />
              <span>Pesquisar</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="footer">
        <FaUserCircle className="icon-footer" />
      </div>
      <style jsx>{`
        .sidebar {
          width: 80px;
          height: 100vh;
          background-color: #ff6961; /* fundo vermelho pastel */
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 0;
        }
        .logo {
          margin-bottom: 30px;
        }
        .logo-img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .menu {
          flex-grow: 1;
        }
        .menu-btn {
          background: none;
          border: none;
          margin-bottom: 30px;
          cursor: pointer;
        }
        .menu-list {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .menu-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
          color: #fff;
          text-decoration: none;
        }
        .icon {
          font-size: 24px;
          margin-bottom: 5px;
        }
        .menu-item span {
          font-size: 12px;
        }
        .footer {
          margin-top: auto;
        }
        .icon-footer {
          font-size: 50px;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
