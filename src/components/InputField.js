import './styles.css';

const InputField = (props) => {
  const { type, value, name, placeholder, onChange, children } = props;
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    >
      {children}
    </input>
  );
};

export { InputField };
