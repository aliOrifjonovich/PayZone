import React from "react";
import styles from "./Input.module.scss";
import { Controller } from "react-hook-form";

const Input = ({
  icon,
  type = "text",
  control,
  name = "",
  placeholder,
  width,
  ...restProps
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, name } }) => {
        return (
          <div className={styles.inputWrapper} style={{width}}>
            <input
              placeholder={placeholder}
              type={type}
              value={
                typeof value == "object"
                  ? value?.value.replace(/\s{2,}/g, " ").trimStart()
                  : typeof value === "string" ? value.replace(/\s{2,}/g, " ").trimStart() : value
              }
              onChange={onChange}
              {...restProps}
            />
            <span>
            {icon && icon}
            </span>
          </div>
        );
      }}
    />
  );
};

export default Input;
