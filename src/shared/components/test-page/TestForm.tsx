import { EmailInput, Input } from "@ui";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  name: string;
  age: number;
  noWrite: string;
}

const TestForm = () => {
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      noWrite: "ha can't write here",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert("Success");
  };

  return (
    <div className="w-full flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-150">
        <Input
          name="name"
          control={control}
          label="Name"
          placeholder="Enter your name"
          rules={{
            required: "Name is required",
            pattern: {
              value: /^(?!.*Tori)/,
              message: "No one can have my name",
            },
          }}
        />
        <EmailInput control={control} />

        <Input
          name="age"
          control={control}
          label="Age"
          type="number"
          placeholder="Enter your age"
          rules={{
            required: "Age is required",
            min: {
              value: 10,
              message: "Newbie",
            },
          }}
        />

        <Input
          disabled
          name="noWrite"
          control={control}
          label="Ypu can'r get me!"
        />

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export { TestForm };
