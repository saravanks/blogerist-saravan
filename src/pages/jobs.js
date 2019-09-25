import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { FaTelegramPlane } from 'react-icons/fa';

const Jobs = () => {
  return(
  <Layout>
    <SEO title='Jobs at Swipeist |' />
    <div style={{ backgroundImage: `url('https://source.unsplash.com/4AKThuzuHmQ')` }} className='BannerStyle'>
      <ul>
        <h1>Work with us</h1>
      </ul>
    </div>
    <div className='PageWrapper'>
      <h1>Some perks:</h1>
      <li>Get to work on your own time.</li>
      <li>100% remote!</li>
      <li>ext...</li>
      <form action='/' name='jobs' method='POST' data-netlify='true' data-netlify-honeypot='bot-field' style={{ marginTop: '20px' }}>
        <input type='hidden' name='form-name' value='jobs' />
        <select name='role[]'>
          <option value='Select Role'>Select Role</option>
          <option value='Role 1'>Role 1</option>
          <option value='Role 2'>Role 2</option>
          <option value='Role 3'>Role 3</option>
        </select>
        <input type='text' name='name' placeholder='What is your name?...' className='input' maxLength='100' required />
        <input type='email' name='email' placeholder='What is your email?...' className='input' maxLength='100' required />
        <textarea type='text' name='message' placeholder='What do you like most about Swipeist?...' className='textarea' maxLength='1000' />
        <button type='submit' className='btn'><FaTelegramPlane className='ico' /> Apply!</button>
      </form>
    </div>
  </Layout>
  );
}
export default Jobs;