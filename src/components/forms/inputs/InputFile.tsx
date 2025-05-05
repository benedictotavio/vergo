import styles from "./InputFile.module.css";

type InputFileProps = {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
  accept: string;
  multiple?: boolean;
  disabled?: boolean;
};

const InputFile: React.FC<InputFileProps> = ({
  name,
  onChange,
  error,
  accept,
  multiple,
  disabled,
}) => {
  return (
    <input
      type="file"
      name={name}
      id={name}
      className={`${styles.input_file} ${error ? styles.error : ""}`}
      onChange={onChange}
      accept={accept}
      multiple={multiple}
      disabled={disabled}
    />
  );
};

export default InputFile;
