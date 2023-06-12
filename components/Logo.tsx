interface LogoProps {
  color?: string;
  line?: string;
}

const Logo: React.FC<LogoProps> = ({ color = "#333333", line = "white" }) => {
  return (
    <div>
      <svg
        width="50"
        height="25"
        viewBox="0 0 50 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 10C0 4.47715 4.47715 0 10 0H50V25H0V10Z" fill={color} />
        <path d="M6 8.5C6 7.11929 7.11929 6 8.5 6H44V11H6V8.5Z" fill={line} />
      </svg>
    </div>
  );
};
export default Logo;
