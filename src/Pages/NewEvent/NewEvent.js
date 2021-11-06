import React, { useState } from 'react';
import { Container,Button, Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const NewEvent = () => {

    const {user} = useAuth()

    const [newEvent,setNewEvent] = useState({})

    const handleTitle = e => {
        const newTitle = {...newEvent}
        newTitle.evntTitle = e.target.value
        setNewEvent(newTitle)
    }

    const handleImg = e => {
        const newImg = {...newEvent}
        newImg.evntImg = e.target.value
        setNewEvent(newImg)
    }

    const handleFee = e => {
        const newFee = {...newEvent}
        newFee.evntFee = e.target.value
        setNewEvent(newFee)
    }

    const handleDes = e => {
        const newDes = {...newEvent}
        newDes.evntDes = e.target.value
        setNewEvent(newDes)
    }


    const formBtn = e => {
        fetch('https://gruesome-broomstick-08400.herokuapp.com/cards',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newEvent)
        })
        .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Added new event')
                    setNewEvent({})
                }
            })

        e.preventDefault()
    }
    return (
        <div className="create">
            {
                (user.email) ? <Container>
                <div>
                    <h3>Create new Event</h3>
                    <div className="newEvent pb-5">
                            <Form className="text-start bg-light shadow p-5">
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label className="fw-bold">Event Title</Form.Label>
                                <Form.Control onChange={handleTitle} className="border-0 rounded-0 border-bottom"  type="text" placeholder="Event Name" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="fw-bold">Event Image</Form.Label>
                                <Form.Control onChange={handleImg} className="border-0 rounded-0 border-bottom "  type="text" placeholder="Set an image Url" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label className="fw-bold">Fee</Form.Label>
                                <Form.Control onChange={handleFee} className="border-0 rounded-0 border-bottom " type="text" placeholder="Event Fee" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label className="fw-bold">Description</Form.Label>
                                <Form.Control onChange={handleDes} className="border-0 rounded-0 border-bottom " type="text" placeholder="Description" required/>
                            </Form.Group>
                            <Button onClick={formBtn} className="w-100" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        </div>
                </div> 
            </Container> : <Container>
                <div style={{height:'75vh'}} className="d-flex align-items-center justify-content-center">
                    <div>
                        <Button>Back to home</Button>
                    </div>
                </div>
            </Container>
            }
        </div>
    );
};

export default NewEvent;