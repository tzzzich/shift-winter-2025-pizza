import { ClassProps } from "@types";
import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";
import { Controller, Control, RegisterOptions } from "react-hook-form";

interface InputProps extends ClassProps {
  name: string;
  control: Control<any>;
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  rules?: RegisterOptions;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  control,
  label,
  type = "text",
  placeholder,
  className,
  rules,
  disabled = false,
}) => {
  return (
    <div className={clsx("flex flex-col gap-[4px]", className)}>
      {label && (
        <label className="text-[14px]" htmlFor={name}>
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={disabled ? { ...rules, disabled } : rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              type={type}
              disabled={disabled}
              placeholder={placeholder}
              className={`border rounded-md p-2 ${
                disabled
                  ? "bg-(--color-bg-disabled) cursor-not-allowed"
                  : "bg-white"
              } ${
                error && !disabled
                  ? "border-(--color-indicator-error)"
                  : "border-(--color-border-light)"
              }`}
            />
            {error && !disabled && (
              <p className="text-(--color-text-error) text-[14px]">
                {error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export { Input };
