import React, { useEffect, useState } from 'react';
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
import { QUERY_ME, } from '../utils/queries';
import stanman from '../img/stanman.png'



function ProfilePage() {

  const { profileId } = useParams();
  const { loading, data } = useQuery(
    QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  const profile = data?.me || {};


  var thoughts = profile.favThought




  return (
    <div>
      <Navbar />

      <MDBContainer className='my-5'>
        <MDBRow className='g-2 align-items-center'>
          <MDBCol size='lg' col='4' className='align-items-center'>
            <MDBCard className='my-5' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
              <MDBCardBody className='p-5 shadow-5'>
                <MDBRow>
                  <h3 className='mb-5 text-center'>Profile Information</h3>

                  <MDBCol className='mr-5 mb-3' md='5' col='4'>
                    <MDBCardImage src={stanman} className='img-fluid w-100' alt='profilepicture' fluid='true' />

                    <br></br>
                    <MDBBtn className='text-center w-100 mb-4 mt-3' size='md'>Change profile picture</MDBBtn>
                  </MDBCol>
                  <MDBCol col='9'>
                    <h6><b>First Name:</b><span className='pl-2' >{profile.firstName}</span> </h6>
                    <hr></hr>
                    <h6><b>Last Name:</b><span className='pl-2'>{profile.lastName}</span> </h6>
                    <hr></hr>
                    <h6><b>Username:</b><span className='pl-2'>{profile.username}</span> </h6>
                    <hr></hr>
                    <h6><b>Email:</b><span className='pl-2'>{profile.email}</span> </h6>
                    <hr></hr>
                    <h6><b>Password:</b><span className='pl-2'>*****</span> </h6>
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
            <MDBCard className='my-5' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
              <MDBCardBody className='p-5 shadow-5'>
                <h5 className='mb-5 text-center'>Favorite Thoughts</h5>
                {!loading ? thoughts.map((thought) => thought ? (
                  <div>
                    <p>
                      <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'red' }}>
                        <MDBIcon fas icon="heart" />
                      </MDBBtn>
                      <span className="ml-2 mr-2"> {thought.text}</span>    -  <span className="ml-2"> {thought.author}</span>
                    </p>
                    <hr></hr>
                  </div>
                ) :
                  <p>You have no favorite thoughts</p>
                ) : 'loading fav thoughts...'}
                <br></br>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default ProfilePage