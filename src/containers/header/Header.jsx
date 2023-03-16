import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai3 from '../../assets/ai3.png'


const Header = () => {
  return (
    <section aria-label='Header' className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Next-gen solutions
          with GPT-3 OpenAI</h1>
        <p>GPT-3 is a large language model developed by OpenAI, designed to understand and generate human-like text based on its training data.</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type="button">Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>More than 1600 people requested access in the last 24h</p>
        </div>
      </div>
      <div className='gpt3__header-img'>
        <img src={ai3} alt='ai' />
      </div>
    </section>
  )
}

export default Header