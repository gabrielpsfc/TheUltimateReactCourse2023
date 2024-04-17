import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./SideBar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo></Logo>
      <AppNav></AppNav>
      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
