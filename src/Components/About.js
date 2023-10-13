import styles from '../styles/About.module.scss'

const About = () => {
	return (
		<>
		<div className={styles.about}>
			<ul>
				<h3>External links</h3>
				<li>
					<a href="https://github.com/pardi"><b>github</b></a>
				</li>
				<li>
					<a href="https://scholar.google.com/citations?hl=it&user=eCc_7IgAAAAJ"><b>google scholar</b></a>
				</li>
			</ul>
			<ul>
				<h3>Contacts</h3>
				<li>
					<b>email</b>: tommaso.pardi (AT) gmail.com 
				</li>
			</ul>
		</div>
	 </>
	)
}

export default About;