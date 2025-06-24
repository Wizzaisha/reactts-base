import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="w-full btn btn-primary max-w-xs">
      {children}
    </button>
  );
};

export default PrimaryButton;
