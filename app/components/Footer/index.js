import Link from "next/link";
import SocialLink from "../SocialLink";
import styles from "./style.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				<nav>
					<ul className={styles.siteMapList}>
						<li>
							<Link className={styles.link} href="/">トップ</Link>
						</li>
						<li>
							<Link className={styles.link} href="/products">制作物</Link>
						</li>
						<li>
							<Link className={styles.link} href="/profile">自己紹介</Link>
						</li>
						<li>
							<Link className={styles.link} href="/html">HTML</Link>
						</li>
						<li>
							<Link className={styles.link} href="/css">CSS</Link>
						</li>
						<li>
							<Link className={styles.link} href="/javascript">JavaScript</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div>
				<SocialLink />
			</div>
			<div>
				<small className={styles.copyright}>©odaka</small>
			</div>
		</footer>
	);
}