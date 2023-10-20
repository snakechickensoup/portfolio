interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  styles: string;
  title: string;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { children, handleClick, styles, title, disabled } = props;
  return (
    <button
      type='button'
      className={`${styles}`}
      title={title}
      onClick={handleClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
