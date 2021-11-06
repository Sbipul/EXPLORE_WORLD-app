import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth'
const Selected = () => {
    const {user} = useAuth()
    const {id} = useParams()

    const [selected,setSelected] = useState({})
    const [info,setInfo] = useState({})

    useEffect(()=>{
        fetch('https://gruesome-broomstick-08400.herokuapp.com/cards')
        .then(res => res.json())
        .then(data => {
            const selectedItm = data.find(item => item._id === id)
            setSelected(selectedItm)
        })
    },[])

    const handleDate = e => {
        const newInfoName = {...info}
        newInfoName.date = e.target.value
        setInfo(newInfoName)
    }
    const handleExtra = e => {
        const newInfoName = {...info}
        newInfoName.extra = e.target.value
        setInfo(newInfoName)
    }

    const formBtn = e => {
        const newInfo = info
        newInfo.name = user?.displayName
        newInfo.email = user?.email
        newInfo.title = selected?.evntTitle
        newInfo.img = selected?.evntImg
        newInfo.status = 'pending...'


        setInfo(newInfo)
        
            fetch('https://gruesome-broomstick-08400.herokuapp.com/travellers',{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(info)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Congratulations.Successfully Enrolled in this event')
                    setInfo({})
                }
            })


        e.preventDefault()
        // console.log(user)
    }
    // console.log('this is from form',info)


    


    return (
        <div>
            <Container>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <div>
                        <Card className=" shadow-lg">
                            <Card.Img variant="top" src={selected?.evntImg} />
                            <Card.Body>
                            <Card.Title className="text-start">{selected?.evntTitle}</Card.Title>
                            <Card.Text>Event Fee ${selected?.evntFee}</Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div>
                            <Form className="text-start shadow p-5">
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label className="fw-bold">Name</Form.Label>
                                <Form.Control  className="border-0 rounded-0 border-bottom" value={user?.displayName || ''} type="text" placeholder="Enter Name" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="fw-bold">Email address</Form.Label>
                                <Form.Control  className="border-0 rounded-0 border-bottom " value={user?.email || ''} type="email" placeholder="Enter email" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label className="fw-bold">Title</Form.Label>
                                <Form.Control className="border-0 rounded-0 border-bottom " value={selected?.evntTitle || ''} type="text" placeholder="Date" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label className="fw-bold">Date</Form.Label>
                                <Form.Control onChange={handleDate} className="border-0 rounded-0 border-bottom " type="text" placeholder="Date" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label className="fw-bold">Your words</Form.Label>
                                <Form.Control onChange={handleExtra} className="border-0 rounded-0 border-bottom " type="text" placeholder="Description" required/>
                            </Form.Group>
                            <Button onClick={formBtn} className="w-100" variant="primary" type="submit">
                                Confirm Event
                            </Button>
                        </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Selected;