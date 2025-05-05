"use client";

import Logo from "@/app/components/design/logo/Logo";
import List from "@/app/components/layouts/list/List";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";
import Dropdown from "../dropdown/Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <menu type="toolbar" className={styles.menu}>
        <List direction="row" gap={1.5}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#questions">Informações</Link>
          </li>

          <li>
            <Dropdown trigger={<span>Serviços</span>} isOpen={false}>
              <ul className={styles.dropdown_menu_services}>
                <li>
                  <Link href="/curriculum">Consultoria de Currículos</Link>
                </li>
                <li>
                  <Link href="/neuro">Neuropsicologia</Link>
                </li>
              </ul>
            </Dropdown>
          </li>

          <li>
            <Link href="/blog">Blog</Link>
          </li>

          <li>
            <Link href="/contact">Contato</Link>
          </li>
        </List>
      </menu>
      <menu className={styles.menu_mobile}>
        {isOpen ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer text-black"
              onClick={handleClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <div className={styles.menu_mobile_container}>
              <List
                direction="column"
                gap={1}
                isFloat
                positionX="right"
                positionY={8.5}
                margin={[0, 2, 0, 0]}
                selectable
              >
                <li className={styles.menu_mobile_container_item}>
                  <Link href="/">Home</Link>
                </li>
                <li className={styles.menu_mobile_container_item}>
                  <Link href="/#questions">Informações</Link>
                </li>
                <li className={styles.menu_mobile_container_item}>
                  <Link href="/blog">Blog</Link>
                </li>

                <li className={styles.menu_mobile_container_item}>
                  <Link href="/contact">Contato</Link>
                </li>

                <Dropdown trigger={<span>Serviços</span>} isOpen={false}>
                  <ul>
                    <li className={styles.menu_mobile_container_item}>
                      <Link href="/neuro">Neuropsicologia</Link>
                    </li>
                    <li className={styles.menu_mobile_container_item}>
                      <Link href="/curriculum">Consultoria de Currículos</Link>
                    </li>
                  </ul>
                </Dropdown>
              </List>
            </div>
          </>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer text-black"
            onClick={handleClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </menu>
    </nav>
  );
};

export default Navbar;
