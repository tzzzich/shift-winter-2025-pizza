import { Control } from "react-hook-form";
import { Input } from "./Input";

const PasswordInput = ({ control }: { control: Control<any> }) => (
  <Input
    name="password"
    control={control}
    label="Password"
    type="password"
    placeholder="Enter your password"
    rules={{
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
    }}
  />
);

export { PasswordInput };
