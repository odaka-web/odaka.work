import Link from "next/link";
import GlobalNav from "../GlobalNav";
import styles from "./style.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href="/">Logo</Link>
			<GlobalNav />
		</header>
	);
}