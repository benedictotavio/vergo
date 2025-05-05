import styles from "./Form.module.css";

type FormProps = {
  children?: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  buttonText?: string;
  buttonDisabled?: boolean;
};

const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  buttonText = "Enviar",
  buttonDisabled = false,
}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
      {buttonDisabled ? (
        <button className={styles.button} disabled>
          {buttonText}
        </button>
      ) : (
        <button className={styles.button} type="submit">
          {buttonText}
        </button>
      )}
    </form>
  );
};

export default Form;
