import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'
    const {handleGoogle,setUser,setError} = useAuth()

    const handleGoogleAndRedirect = () => {
        handleGoogle()
        .then((result) => {
            setUser(result.user)
            history.push(redirect_url)
    })
    .catch((error) => {
        setError(error.message)
    });
   
    }
    
    return (
        <div>
            <Container>
                <div className="d-flex align-items-center justify-content-center py-5">
                    <div style={{height:'50vh',width:'60%'}} className="cus-bg mt-5 mx-auto d-flex align-items-center justify-content-center shadow-lg">
                        <div>
                        <h1 style={{fontFamily:"'Oswald', sans-serif"}} className="fw-bold text-danger">Please signup first</h1><br />
                        <Button variant="warning" onClick={handleGoogleAndRedirect}>Google Signup</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;