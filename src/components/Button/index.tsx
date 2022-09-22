import { ReactNode } from 'react';
import { Content } from './styles';

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <Content>{children}</Content>;
}
