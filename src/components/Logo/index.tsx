import Image from 'next/image';
import logo from '../../../public/assets/logo.png';

export function Logo() {
  return (
    <div>
      <Image src={logo} />
    </div>
  );
}
