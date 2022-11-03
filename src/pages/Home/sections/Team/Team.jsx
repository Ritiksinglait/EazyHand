import React from "react";
import styles from "./team.module.scss";
// import { FaGithub } from "react-icons/fa";
import ritik from "../../../../assets/images/team/ritik.jpeg";
import Anshuman from "../../../../assets/images/team/Anshuman.jpg";

// import smaranjit1 from "../../../../assets/images/team/smaranjit1.png";
import FluidCard from "./components/FluidCard/FluidCard";

function Team() {
	const maintainerSection = [
		{
			name: "Ritik Singla",
			title: "Lead Developer",
			githubLink: "https://github.com/Ritiksinglait",
			linkedinLink: "https://www.linkedin.com/in/ritik-singla-10033619b/",
			imgArray: [ritik],
		},
		{
			name: "Anshumann Sharma",
			title: "Lead Developer",
			githubLink: "https://github.com/anshuman235",
			linkedinLink: "https://www.linkedin.com/in/anshuman-sharma-b8609619b/",
			imgArray: [Anshuman],
		},
	];

	// const [contributors, setContributors] = useState([]);

	// useEffect(() => {
	// 	fetch(
	// 		"https://api.github.com/repos/smaranjitghose/doc2pen/contributors?per_page=1000",
	// 	)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			// console.log(data);
	// 			setContributors(
	// 				data.filter(
	// 					element =>
	// 						!(
	// 							element.login === "smaranjitghose" ||
	// 							element.login === "anushbhatia"
	// 						),
	// 				),
	// 			);
	// 		});
	// }, []);

	return (
		<div className={styles.Team} id="home_team">
			{/* <!-- Project Maintainer Sub Section --> */}
			<br />
			<br /> <p className={styles.titleMain}>Project Maintainers</p>
			<br />
			<br />
			<div className={styles.projectMaintainers}>
				{maintainerSection.map((item, index) => (
					<FluidCard content={item} key={index} />
				))}
			</div>
			{/* <!-- Contributora Sub Section --> */}
			{/* <br />
			<br />
			<p className={styles.titleMain}>Clan of Contributors</p>
			<br />
			<br />
			<div className={styles.team_container}>
				{contributors.map(c => (
					<figure
						className={`${styles.position_relative} ${styles.d_inline_block} ${styles.text_center} ${styles.grid_wd_100} ${styles.figure}`}
						key={c.login}
					>
						<img
							src={c.avatar_url}
							className={styles.grid_wd_100}
							alt="Profile"
						/>
						<figcaption
							className={`${styles.position_absolute} ${styles.grid_wd_100} ${styles.va_top}`}
						>
							<div className={styles.text}>
								<a
									href={c.html_url}
									className={styles.social_icon}
									target="_blank"
									rel="noreferrer"
								>
									<FaGithub />
								</a>
							</div>
						</figcaption>
					</figure>
				))}
			</div> */}
		</div>
	);
}

export default Team;
