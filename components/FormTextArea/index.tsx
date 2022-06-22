/* eslint-disable react/display-name */
import React, { useCallback, useEffect } from "react";
import styles from "./styles.module.css";

import { useFormContext, FieldError } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { onInputFocus } from "../../helpers/inputFocus";

interface FormTextAreaProps {
  name: string;
  label: string;
  error?: FieldError;
}

const FormTextArea = React.forwardRef<any, FormTextAreaProps>(
  ({ name, label, error }: FormTextAreaProps, ref) => {
    const { register } = useFormContext();

    const textAreaCounter = useCallback(() => {
      const textArea = document.querySelector<HTMLInputElement>(`#${name}`);
      const span = document.querySelector<HTMLInputElement>(`#message-counter`);

      if (span && textArea) {
        let counter = 256 - textArea.value.length;
        span.textContent = counter + "/256";

        textArea.addEventListener("input", textAreaCounter);
      }
    }, [name]);

    useEffect(() => {
      textAreaCounter();
    }, [textAreaCounter]);

    return (
      <div className={styles.container}>
        <label>{label}</label>
        <div
          className={styles.textAreaContainer}
          id={`input-container-${name}`}
        >
          <textarea
            id={name}
            {...register(name)}
            onFocus={() =>
              onInputFocus({
                focus: true,
                name: name,
              })
            }
            onBlur={() =>
              onInputFocus({
                focus: false,
                name: name,
              })
            }
            className={styles.textAreaInput}
          />
          <span id="message-counter" className={styles.spanCounter}>
            256/256
          </span>
        </div>
        {!!error ? (
          <ErrorMessage message={error.message} />
        ) : (
          <div style={{ height: "16px" }} />
        )}
      </div>
    );
  }
);

export default FormTextArea;
