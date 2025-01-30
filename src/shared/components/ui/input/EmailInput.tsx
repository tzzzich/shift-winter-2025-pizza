import { Control } from "react-hook-form";
import { Input } from "./Input";

const EmailInput = ({ control }: { control: Control<any> }) => (
  <Input
    name="email"
    control={control}
    type="email"
    label="Email"
    placeholder="Enter your email"
    rules={{
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/,
        message: "Invalid email format",
      },
    }}
  />
);

export { EmailInput };
