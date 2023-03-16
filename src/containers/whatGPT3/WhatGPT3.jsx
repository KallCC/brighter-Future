import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const featuresData = [
  {
    title: 'Chatbots',
    text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.',
  },
  {
    title: 'Knowledgebase',
    text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b.',
  },
  {
    title: 'Education',
    text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b.',
  }
];

const WhatGPT3 = () => {
  return (
    <section aria-label='what is chatgpt' className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-heading">
        <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
        <button type='button'>Explore the Library</button >
      </div>
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="GPT is trained on a massive dataset of internet text, ChatGPT has the ability to perform various natural language processing tasks, such as language translation, text summarization, and question-answering. ChatGPT has been widely used in various applications, including chatbots, virtual assistants, content generation, and more. Its impressive capabilities have led to significant advances in the field of artificial intelligence, making it an essential tool for anyone working with language processing." />
      </div>


      <div className="gpt3__whatgpt3-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index} />
        ))}
      </div>
    </section>
  )
}

export default WhatGPT3