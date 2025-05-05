import styles from "./Input.module.css";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  isMutable?: boolean;
};

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  isRequired = false,
  isMutable = false,
}) => {
  return (
    <input
      className={`${styles.input} ${isMutable ? styles.mutable : ""}`}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={isRequired}
      readOnly={isMutable}
    />
  );
};

export default Input;
