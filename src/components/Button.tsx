import './Button.css';

type ButtonProps = {
    text: string;
    className?: string;
    onlick?: () => void;
}

function Button({text, onlick, className = ''}: ButtonProps) {
    return (
      <button className={`button ${className}`} onClick={onlick}>
        {text}
      </button>
    );
};
  
export default Button;