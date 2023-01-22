import React,{useState} from 'react';
import { Col,Row,Container } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
export const Contact = () => {
    const formInitialDetails = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
    const [formDetails,setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status,setStatus] = useState({});
    const onFromUpdate = (category,value)=>{
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:3000/contact",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if(result.code===200){
            setStatus({success:true,message:"Message sent successfully"});
        }else{
            setStatus({success:false,message:"Something Went Wrong, please try again later."});
        }
    }
    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='contact us'></img>
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFromUpdate('firstName',e.target.value)}></input>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFromUpdate('lastName',e.target.value)}></input>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e)=> onFromUpdate('email',e.target.value)}></input>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e)=> onFromUpdate('phone',e.target.value)}></input>
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFromUpdate('message', e.target.value)}></textarea>
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? "danger":"success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}