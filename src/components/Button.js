import './styles.css';

const Button = (props) => {
  const { type, children, onClick } = props;
  return (
    <button className='btn' onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export { Button };
