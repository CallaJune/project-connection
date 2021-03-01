import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
const countryCodes = require('../data/countries.json');
import Form from 'react-bootstrap/Form';

export default function School (props) {
	if (props.data.school_id == 0) {
		return (<>
			</>
		);
	}

	return (
			<>
			<Table striped bordered hover size="sm">
			  <tbody>
			  	<tr>
			      <td colSpan="2"><strong>{props.data.name}</strong></td>
			    </tr>
			    <tr>
			      <td>Country</td>
			      <td>{countryCodes[props.data.country_code]}</td>
			    </tr>
			    <tr>
			      <td>Languages</td>
			      <td>{props.data.languages}</td>
			    </tr>
			    <tr>
			      <td>Student Pen Pals</td>
			      <td>{props.data.num_students}</td>
			    </tr>
			    <tr>
			      <td>Email</td>
			      <td>{props.data.email == true ? 'Yes' : 'No'}</td>
			    </tr>
			    <tr>
			      <td>Mail</td>
			      <td>{props.data.mail == true ? 'Yes' : 'No'}</td>
			    </tr>
			    <tr>
			      <td>Mailing Address</td>
			      <td>{props.data.address}</td>
			    </tr>
			  </tbody>
			</Table>
			<Form onSubmit={props.pairAction}>
		      <Button variant="primary" type="submit">Pair Schools</Button>
	    	</Form>
			</>
		)
}