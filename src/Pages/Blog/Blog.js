import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-title'>
            <div className='blog'>
            <h1 className='text-danger'>Different Between Authentication and Authorization.</h1>
          <p>Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.
</p>
           </div>
            <div className='blog'>
            <h1 className='text-danger'>Why using Firebase?</h1>
          <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
          
          </p>
          <h1 className='text-danger'>What other option do you have to emplement authentication?</h1>
          <p>
              1.Password-based authentication. <br />
              2.Passwords are the most common methods of authentication <br />
              3.Multi-factor authentication <br />
              4.Certificate-based authentication <br />
              5.Biometric authentication <br />
              6.Token-based authentication</p>
           </div>
            
            <div className='blog'>
                <h1 className='text-danger'>What other services does firebase provide other than authentication</h1>
                <p># Cloud Firestore <br />
# Cloud Functions   <br />
# Hosting <br />
# Cloud Storage <br />
# Google Analytics <br />
# Predictions <br />
# Cloud Messaging <br />
# Dynamic Links <br />
# Remote Config</p>
            </div>

        </div>
    );
};

export default Blog;