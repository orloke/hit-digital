import Link from 'next/link';
import { ReactNode } from 'react';
import { Content } from './styles';

interface ButtonProps {
  children: ReactNode;
  href: string;
  active: boolean;
}

export function Button({ children, href, active }: ButtonProps) {
  return (
    <Link href={href} passHref>
      <Content active={active}>{children}</Content>
    </Link>
  );
}
