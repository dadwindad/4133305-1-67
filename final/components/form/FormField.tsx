import { FormFieldProps } from "./types";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  required,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      {...register(name, { valueAsNumber })}
    />
    {error && <span>{error.message}</span>}
  </>
);

FormField.defaultProps = {
  required: false,
};

export default FormField;
