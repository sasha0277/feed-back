import React from 'react';
import { Link } from 'react-router-dom';
import Card from './../components/common/Card';

const About = () => {
  return (
    <Card>
      <h4> This page is about giving information about our company</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolorum consectetur deleniti laudantium obcaecati numquam dolorem odit error? Cupiditate nam deleniti distinctio. Quibusdam aut soluta atque ratione dolore quasi perspiciatis sapiente. Magnam, officia reprehenderit rem praesentium dicta fuga quasi ducimus!</p>
      <p>
        <Link to="/">Back to Home Page</Link>
      </p>
    </Card>
  )
}

export default About