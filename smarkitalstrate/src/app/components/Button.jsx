'use client';

import { useRouter } from 'next/navigation';
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  const router = useRouter();

  const handleClick = (e) => {
    if (href) {
      e.preventDefault();
      router.push(href);
    }
    if (onClick) {
      onClick(e);
    }
  };

  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={buttonClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
}
