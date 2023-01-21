import React from "react";
import { NavLink } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import s from "./Navbar.module.scss";

const Navbar = () => {
  const isactive = ({ isActive }) => (isActive ? s.active : "");

  return (
    <div className={s.links}>
      <NavLink to="/mypage" className={isactive}>
        <BiUserCircle className={s.iconsNav} />
        Моя страница
      </NavLink>
      <NavLink to="/" className={isactive}>
        <BiSearchAlt2 className={s.iconsNav} />
        Интересное
      </NavLink>
      <NavLink to="/messagepage" className={isactive}>
        <TbMessageCircle className={s.iconsNav} />
        Мессенджер
      </NavLink>
      <NavLink to="/followspage" className={isactive}>
        <FaUserFriends className={s.iconsNav} />
        Подписки
      </NavLink>
      <NavLink to="/followerspage" className={isactive}>
        <FaUserFriends className={s.iconsNav} />
        Подписчики
      </NavLink>
      <div>
        <BiExit className={s.iconsNav} />
        Выход
      </div>
    </div>
  );
};

export default Navbar;
