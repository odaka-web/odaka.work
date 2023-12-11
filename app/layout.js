import Footer from "./components/Footer";
import Header from "./components/Header";
import "./style-base.css";
import "./style-reset.css";
import styles from "./style.module.css";

export default function RootLayout({ children }) {
	return (
		<html lang="ja">
			<body className={styles.body}>
				<Header />
				<main className={styles.main}>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}

export const metadata = {
	title: {
		default: `尾高 友紀（odaka yuki）`,
		template: `%s | 尾高 友紀（odaka yuki）`,
	},
	description: ``,
};