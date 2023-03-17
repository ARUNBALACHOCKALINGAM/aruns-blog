import Link from 'next/link';
import styles from './NavItem.module.css';
type Props = {
  active: boolean;
  name: string;
  link: string;
  icon: string;
};

export default function NavItem({ name, link, active, icon }: Props) {
  return (
    <Link href={link} className={`${active ? styles.item : styles.itemNon}`}>
      {name} {icon}
    </Link>
  );
}
