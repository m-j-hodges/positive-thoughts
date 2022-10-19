import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/profilePage.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCardImage,
}
from 'mdb-react-ui-kit';
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

function ProfilePage() {
  const { profileId } = useParams();
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};

  return (
    <div>
<Navbar />
    
  <MDBContainer className='my-5'>
    <MDBRow className='g-2 align-items-center'>
      <MDBCol size='lg' col='4' className='align-items-center'>
        <MDBCard className='my-5' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
          <MDBCardBody className='p-5 shadow-5'> 
            <MDBRow>
              <h3 className='mb-5 text-center'>Profile Information</h3>
            
              <MDBCol className='mr-5 mb-3' md='5' col='4'>
                <MDBCardImage src='https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png' className='img-fluid w-100' alt='profilepicture' fluid='true'/>
      
                <br></br>
                <MDBBtn className='text-center w-100 mb-4' size='md'>Change profile picture</MDBBtn>
              </MDBCol>
              <MDBCol col='9'>   
                <h6><b>First Name:</b><span>{profile.firstName}</span> </h6>
                <hr></hr> 
                <h6><b>Last Name:</b><span>{profile.lastName}</span> </h6>
                <hr></hr>                 
                <h6><b>Username:</b><span>{profile.username}</span> </h6>
                <hr></hr>
                <h6><b>Email:</b><span>{profile.email}</span> </h6>
                <hr></hr>
                <h6><b>Password:</b><span>*******</span> </h6>
                <hr></hr>
                <MDBBtn className='text-center w-100 mb-4' size='md'>Change profile information</MDBBtn>
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
          <h5 className='mb-5 text-center'>Favorite Thoughts</h5>
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
  </div>
  )
}

export default ProfilePage