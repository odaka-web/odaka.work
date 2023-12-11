import Image from "next/image";
import Link from "next/link";
import logoGithub from "./logo-github.png";
import logoX from "./logo-x.png";
import styles from "./style.module.css";

export default function SocialLink() {
	return (
		<ul className={styles.list}>
			<li>
				<Link href="https://github.com/odaka-yuki" target="_blank">
					<Image src={logoGithub} alt="GitHub" width={24} height={24} title="Github @odaka-yuki" />
				</Link>
				</li>
			<li>
				<Link href="https://twitter.com/odaka_web" target="_blank">
					<Image src={logoX} alt="X" width={24} height={24} title="X @odaka_web" />
				</Link>
			</li>
		</ul>
	);
}