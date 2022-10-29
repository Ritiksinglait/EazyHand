import React from "react";
import ExperienceForm from "./components/ExperienceForm/ExperienceForm";
// import Map from "./components/Map/Map";

import styles from "./contact-us.module.scss";

function ContactUs() {
	

	return (
		<div className={styles.ContactUs} id="home_contact">
			<p className={styles.titleMain}>Get in Touch</p>
			<div className={styles.contact_and_info_container}>
				<ExperienceForm />
				
			</div>
		</div>
	);
}

export default ContactUs;
