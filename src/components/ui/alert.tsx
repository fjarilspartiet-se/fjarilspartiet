import { ReactNode } from 'react';
import { AlertCircle, Info, CheckCircle, XCircle } from 'lucide-react';

interface AlertProps {
  children: ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

const getIcon = (variant: string) => {
  switch (variant) {
    case 'success':
      return <CheckCircle className="w-5 h-5" />;
    case 'warning':
      return <AlertCircle className="w-5 h-5" />;
    case 'error':
      return <XCircle className="w-5 h-5" />;
    default:
      return <Info className="w-5 h-5" />;
  }
};

const getStyles = (variant: string) => {
  const baseStyles = "flex items-center p-4 rounded-lg";
  
  switch (variant) {
    case 'success':
      return `${baseStyles} bg-green-50 text-green-800`;
    case 'warning':
      return `${baseStyles} bg-yellow-50 text-yellow-800`;
    case 'error':
      return `${baseStyles} bg-red-50 text-red-800`;
    default:
      return `${baseStyles} bg-blue-50 text-blue-800`;
  }
};

export const Alert = ({ children, variant = 'info', className = '' }: AlertProps) => {
  return (
    <div className={`${getStyles(variant)} ${className}`} role="alert">
      <div className="flex-shrink-0 mr-3">
        {getIcon(variant)}
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Alert;
