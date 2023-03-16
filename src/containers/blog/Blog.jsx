import React from 'react'
import './blog.css'
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.jpg';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';
import { Article } from '../../components';

const Blog = () => {
  return (
    <section aria-label='blog' className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h2 className="gradient__text">Recent News and Articles</h2>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 26, 2021" text="Understanding the Basics of OpenAI's Revolutionary Language Model" />
          <Article imgUrl={blog03} date="Sep 26, 2021" text="How ChatGPT is Revolutionizing Conversational AI: A Comprehensive Guide" />
          <Article imgUrl={blog04} date="Sep 26, 2021" text="The Limitations and Ethical Implications of ChatGPT: A Critical Analysis" />
          <Article imgUrl={blog05} date="Sep 26, 2021" text="ChatGPT3 vs GPT-4: Comparing OpenAI's Latest Language Models" />
        </div>
      </div>
    </section>
  )
}

export default Blog