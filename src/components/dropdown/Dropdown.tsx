import React, { useState } from "react";
import styles from "./Dropdown.module.css";

export interface DropdownProps {
  children?: React.ReactNode;
  trigger: React.ReactNode;
  isOpen: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  trigger,
  isOpen,
}: DropdownProps) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);

  const handleClick = () => {
    setIsOpenState(!isOpenState);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdown_trigger} onClick={handleClick}>
        {isOpenState ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
        {trigger}
      </button>
      {isOpenState && (
        <div className={styles.dropdown_content}>
          <div className={styles.dropdown_body}>{children}</div>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
