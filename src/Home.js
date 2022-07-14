import React from 'react';
import Content from './Content';
import classes from './Home.module.css';

export default function Home() {
  return (
    <div className={classes.home}>
      <p>Learn your favourite courses from our learning platform</p>
      <Content />
    </div>
  );
}
