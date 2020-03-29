import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Heading from '../layout/Heading';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import AlertMessage from './AlertMessage';

const schema = yup.object().shape({
	firstName: yup
		.string()
		.min(2, "First name must be at least 2 characters")
		.required("First name is required"),
	lastName: yup
		.string()
		.min(2, "Last name must be at least 2 characters")
		.required("Last name is required"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	message: yup
		.string()
		.min(10, "Message must be at least 10 characters")
		.required("Message is required")
})

function Contact() {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	const [validated, setValidated] = useState(false);

	function onSubmit(data) {
		console.log("data", data);
		setValidated(true);
	}

	return (
		<>
			<Heading title="Contact us" />
			{validated === true && 
				<AlertMessage />
			}
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Row>
					<Col>
						<Form.Group>
							<Form.Label>First name:</Form.Label>
							<Form.Control name="firstName" placeholder="Your first name" ref={register} />
							{errors.firstName && <p>{errors.firstName.message}</p>}
						</Form.Group>
					</Col>
					<Col>
						<Form.Group>
							<Form.Label>Last name:</Form.Label>
							<Form.Control name="lastName" placeholder="Your last name" ref={register} />
							{errors.lastName && <p>{errors.lastName.message}</p>}
						</Form.Group>
					</Col>
				</Form.Row>

				<Form.Group>
					<Form.Label>Email:</Form.Label>
					<Form.Control name="email" placeholder="Your email address" ref={register} />
					{errors.email && <p>{errors.email.message}</p>}
				</Form.Group>

				<Form.Group>
					<Form.Label>Message:</Form.Label>
					<Form.Control as="textarea" rows="3" name="message" placeholder="Your message" ref={register} />
					{errors.message && <p>{errors.message.message}</p>}
				</Form.Group>

				<Button variant="success" type="submit">Submit</Button>
			</Form>
		</>
	);
}

export default Contact;