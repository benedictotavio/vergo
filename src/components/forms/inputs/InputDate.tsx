import styles from "./InputDate.module.css";

type InputDateProps = {
    type: 'date' | 'datetime-local';
    name: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
    isDisabled?: boolean;
};

const InputDate: React.FC<InputDateProps> = ({ type, name, placeholder, value, onChange, isRequired = false, isDisabled = false }) => {
    return (
        <input className={styles.input_date} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required={isRequired} readOnly={isDisabled} />
    );
};

export default InputDate;