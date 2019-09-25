import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
  return(
  <Layout>
    <SEO title='Contact |' />
    <div style={{ backgroundImage: `url('https://source.unsplash.com/3Mhgvrk4tjM')` }} className='BannerStyle'>
      <ul>
        <h1>Contact us</h1>
      </ul>
    </div>
    <div className='PageWrapper'>
      <form action='/' name='contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field'>
        <input type='hidden' name='form-name' value='contact' />
        <input type='text' name='name' placeholder='What is your name?...' className='input' maxLength='100' required />
        <input type='email' name='email' placeholder='What is your email?...' className='input' maxLength='100' required />
        <textarea type='text' name='message' placeholder='What can we help you with?...' className='textarea' maxLength='1000' />
        <button type='submit' className='btn'><FaTelegramPlane className='ico' /> Send!</button>
      </form>
    </div>
  </Layout>
  );
}
export default Contact;
