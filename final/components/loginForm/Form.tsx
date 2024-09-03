import { FC } from "react";
import FormField from "./FormField";
import { FormData, LoginSchema } from "./Types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Staff Register</h1>
          <FormField
            type="url"
            placeholder="URL"
            reqired
            name="url"
            register={register}
            error={errors.url}
          />

          <FormField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
          />

          <FormField
            type="exp"
            placeholder="Exp year(s)"
            reqired
            name="exp"
            valueAsNumber
            register={register}
            error={errors.exp}
          />

          <FormField
            type="pass"
            placeholder="Password"
            reqired
            name="pass"
            register={register}
            error={errors.pass}
          />

          <FormField
            type="confirmPass"
            placeholder="Confirm Pass"
            reqired
            name="confirmPass"
            register={register}
            error={errors.confirmPass}
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
