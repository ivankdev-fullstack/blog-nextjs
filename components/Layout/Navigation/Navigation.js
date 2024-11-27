import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={s.header}>
      <Link href="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
