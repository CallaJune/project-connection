import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import School from '../components/school';

export default function enter() {
	const submitData = async event => {
	    // This function would POST data using an API to the responses database
	}

  return (
    <div className={styles.container}>
      <Head>
        <title>Project Connection | Enter Data</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">Project Connection</a>
        </h1>

        <p className={styles.description}>
          Enter data about a school
        </p>

        <Form onSubmit={submitData}>
	      <Form.Label>Project Connect ID</Form.Label>
	      <Form.Control id="school_id" type="number" /><br/>
        <Form.Label>School Name</Form.Label>
        <Form.Control id="name" type="string" /><br/>
        <Form.Label>Latitude</Form.Label>
        <Form.Control id="lat" type="number" /><br/>
        <Form.Label>Longitude</Form.Label>
        <Form.Control id="lon" type="number" /><br/>
        <Form.Label>Country</Form.Label>
        <Form.Control id="country" type="string" /><br/>
        <Form.Label>Languages</Form.Label>
        <Form.Control id="languages" type="string" /><br/>
        <Form.Label>Student Pen Pals</Form.Label>
        <Form.Control id="num_students" type="number" /><br/>
        <Form.Label>Address</Form.Label>
        <Form.Control id="address" type="string" /><br/>
        <Form.Label>Number of Classrooms</Form.Label>
        <Form.Control id="classrooms" type="number" /><br/>
        <Form.Label>Number of Latrines</Form.Label>
        <Form.Control id="latrines" type="number" /><br/>
        <Form.Label>Number of Teachers</Form.Label>
        <Form.Control id="name" type="teachers" /><br/>
        <Form.Label>Number of Sections</Form.Label>
        <Form.Control id="sections" type="number" /><br/>
        <Form.Label>Water</Form.Label>
        <Form.Control id="name" type="checkbox" /><br/>
        <Form.Label>electricity</Form.Label>
        <Form.Control id="name" type="checkbox" /><br/>
        <Form.Label>Comments</Form.Label>
        <Form.Control id="comments" type="number" /><br/>
	      <Button variant="primary" type="submit">Submit</Button>
    	</Form>

      </main>

      <footer className={styles.footer}>
          <a href="https://www.projectconnect.world/">Learn more about Project Connect.</a>
      </footer>
    </div>
  )
}
