import React from "react";

import styles from "./styles.module.css";
import { BiErrorCircle } from "react-icons/bi";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className={styles.errorContainer}>
      <BiErrorCircle size={18} className={styles.errorIcon} />
      {message}
    </div>
  );
}
