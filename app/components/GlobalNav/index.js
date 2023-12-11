import Link from "next/link";
import styles from "./style.module.css";

export default function GlobalNav() {
	return (
		<nav>
			<ul className={styles.list}>
				<li><Link className={styles.link} href="/products">制作物</Link></li>
				<li><Link className={styles.link} href="/profile">自己紹介</Link></li>
			</ul>
		</nav>
	);
}