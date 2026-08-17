import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'outline';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <a
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
