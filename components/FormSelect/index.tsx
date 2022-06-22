/* eslint-disable react/display-name */
import React from "react";
import styles from "./styles.module.css";

import { useFormContext, FieldError } from "react-hook-form";

import { topicOptions } from "../../helpers/SelectData";

import ErrorMessage from "../ErrorMessage";

interface FormSelectProps {
  name: string;
  label: string;
  error?: FieldError;
}

const FormSelect = React.forwardRef<any, FormSelectProps>(
  ({ name, label, error }: FormSelectProps, ref) => {
    const { register } = useFormContext();

    return (
      <div className={styles.container}>
        <label>{label}</label>
        <div className={styles.customSelect}>
          <select {...register("topics")} className={styles.select}>
            {topicOptions.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </select>
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

export default FormSelect;
