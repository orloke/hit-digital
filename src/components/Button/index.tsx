import Link from 'next/link';
import { ReactNode } from 'react';
import { Content } from './styles';

interface ButtonProps {
  children: ReactNode;
  href: string;
}

export function Button({ children, href }: ButtonProps) {
  return (
    <Link href={href}>
      <Content>{children}</Content>
    </Link>
  );
}
