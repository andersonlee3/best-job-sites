interface ButtonProps {
  link: string;
}

function Button({ link }: ButtonProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="button">Visit Site</button>
    </a>
  );
}

export default Button;
