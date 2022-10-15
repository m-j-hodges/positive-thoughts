import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/profilePage.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBRow,
  MDBCol
}
from 'mdb-react-ui-kit';

function profilePage() {
  return (
    
    <MDBContainer fluid className='my-5'>
    <MDBRow className='g-2 align-items-center'>
      <MDBCol size='lg' col='4' className='align-items-center'>
          <MDBCard className='my-5' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
        
          <MDBCardBody className='p-5 shadow-5'> 
            <MDBRow>
              <h5 className='mb-5 text-'>Profile Information</h5>
              <MDBCol classname='' col='3'>
                <img src='https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png' className='img-fluid w-100' alt='' fluid/>
                  <br></br>
              <MDBBtn className='w-80 mb-4' size='md'>Change profile picture</MDBBtn>
              
              </MDBCol>
              <MDBCol col='9'>                    
                <h7><b>Username:</b><span>Lucia222</span> </h7>
                <hr></hr>
                <h7><b>Email:</b><span>Lucia222@gmail.com</span> </h7>
                <hr></hr>
                <h7><b>Password:</b><span>*****</span> </h7>
                <hr></hr>
                <MDBBtn className='w-80 mb-4' size='md'>Change profile information</MDBBtn>
        </MDBCol>
            </MDBRow>
        </MDBCardBody> 
</MDBCard>
</MDBCol>





    </MDBRow>

    <MDBRow className='g-0 align-items-center'>
    <MDBCol size='lg' col='8'>
    <MDBCard className='my-5' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 shadow-5'>
          <h5 className='mb-5 text-center'>Saved Thoughts</h5>
          <p>  
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'red' }}>
          <MDBIcon fas icon="heart" />
                </MDBBtn>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
             <hr></hr>
             <p>
             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'red' }}>
              <MDBIcon fas icon="heart" />
            </MDBBtn>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
             <hr></hr>
             <p>
             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'red' }}>
              <MDBIcon fas icon="heart" />
            </MDBBtn>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
          <br></br>
          <MDBBtn className='w-100 mb-4' size='md'>View More</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol size='lg' col='8'>
    <MDBCard className='my-5' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 shadow-5'>
          <h5 className='mb-5 text-center'>Recent Comments</h5>
             <p>
             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'black' }}>
                <MDBIcon far icon="comment-dots" />
              </MDBBtn>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
             </p>
              <hr></hr>
              <p>
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'black' }}>
                <MDBIcon far icon="comment-dots" />
              </MDBBtn>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
             </p>
              <hr></hr>
              <p>
              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'black' }}>
                <MDBIcon far icon="comment-dots" />
              </MDBBtn>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
             </p>
              <br></br>
          <MDBBtn className='w-100 mb-4' size='md'>View More</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

  </MDBRow>
  </MDBContainer>
  )
}

export default profilePage