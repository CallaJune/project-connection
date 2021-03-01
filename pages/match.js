import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import School from '../components/school';

export default function match() {
	const [suggestedMatchData, setSuggestedMatchData] = useState({'school_id': 0, 'name': '', 'lat': 0, 'lon': 0, 'country_code': '', 'languages': '', 'num_students': 0, 'email': '', 'mail': '', 'address': '', 'num_classrooms': 0, 'num_latrines': 0, 'num_teachers': 0, 'match_id': 0, 'num_sections': 0, 'water': false, 'electricity': false, 'comments': ''});

	const suggestedMatch = async event => {
	    event.preventDefault()
	    const res = await fetch(`/api/generateMatch/${event.target.school_id.value}`);
	    const result = await res.json()
	    setSuggestedMatchData(result);
	}

	function pairSchools() {
		// This function would make a POST request to the API call api/makeMatch
		alert("Success! The schools have been matched.")
	}

  return (
    <div className={styles.container}>
      <Head>
        <title>Project Connection | Find Match</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">Project Connection</a>
        </h1>

        <p className={styles.description}>
          Find a match for a school by entering its Project Connect ID number. 
        </p>

        <Form onSubmit={suggestedMatch}>
	      <Form.Label>Project Connect ID</Form.Label>
	      <Form.Control id="school_id" type="number" required /><br/>
	      <Button variant="primary" type="submit">Find a match</Button>
    	</Form>

    	<br />

    	<School data={suggestedMatchData} pairAction={pairSchools} />

      </main>

      <footer className={styles.footer}>
          <a href="https://www.projectconnect.world/">Learn more about Project Connect.</a>
      </footer>
    </div>
  )
}
