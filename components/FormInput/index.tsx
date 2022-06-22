/* eslint-disable react/display-name */
import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import { useFormContext, FieldError } from "react-hook-form";
import styles from "./styles.module.css";

import { onInputFocus } from "../../helpers/inputFocus";

import { BsPerson, BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import ErrorMessage from "../ErrorMessage";

export interface InputRef {
  inputRef: string;
}

interface FormInputProps {
  name: string;
  label: string;
  error?: FieldError;
}

const FormInput = React.forwardRef<InputRef, FormInputProps>(
  ({ name, label, error }: FormInputProps, ref) => {
    const { register, setValue, getValues } = useFormContext();

    const icon: { [index: string]: React.ReactElement } = {
      first_name: <BsPerson id={`icon-${name}`} size={26} />,
      email: <AiOutlineMail id={`icon-${name}`} size={26} />,
      phone: <BsPhone id={`icon-${name}`} size={26} />,
    };

    const inputChange = useCallback(
      (e: string, name: string) => {
        if (name === "phone") {
          let phone: string = e.replace(/\D/g, "");
          phone = phone.replace(/^(\d\d)(\d)/g, "($1) $2");
          phone = phone.replace(/(\d{5})(\d)/, "$1-$2");
          setValue(name, phone, { shouldValidate: true });
        } else {
          setValue(name, e, { shouldValidate: true });
        }
      },
      [setValue]
    );

    return (
      <div className={styles.container}>
        <label>{label}</label>
        <div className={styles.inputContainer} id={`input-container-${name}`}>
          {icon[name]}

          <input
            id={name}
            {...register(name)}
            className={styles.input}
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
            onChange={(e) => inputChange(e.target.value, name)}
          />
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

export default FormInput;
