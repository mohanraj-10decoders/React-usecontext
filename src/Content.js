import React, { useContext } from 'react';
import { courseContext } from './App';
import classes from './Content.module.css';

export default function Content() {
  const course = useContext(courseContext);
  return (
    <div className={classes.content}>
      <h1 style={{ color: 'white' }}>{course}</h1>
      {course === 'React JS' && (
        <p>
          React (also known as React.js or ReactJS) is a free and open-source
          front-end JavaScript library for building user interfaces based on UI
          components. It is maintained by Meta (formerly Facebook) and a
          community of individual developers and companies. React can be used as
          a base in the development of single-page, mobile, or server-rendered
          applications with frameworks like Next.js. However, React is only
          concerned with state management and rendering that state to the DOM,
          so creating React applications usually requires the use of additional
          libraries for routing, as well as certain client-side functionality.
        </p>
      )}
      {course === 'Node JS' && (
        <p>
          Node.js is an open-source, cross-platform, back-end JavaScript runtime
          environment that runs on the V8 engine and executes JavaScript code
          outside a web browser, which was designed to build scalable network
          applications. Node.js lets developers use JavaScript to write command
          line tools and for server-side scripting—running scripts server-side
          to produce dynamic web page content before the page is sent to the
          user's web browser. Consequently, Node.js represents a "JavaScript
          everywhere" paradigm, unifying web-application development around a
          single programming language, rather than different languages for
          server-side and client-side scripts.
        </p>
      )}
      {course === 'Vue JS' && (
        <p>
          Vue.js (commonly referred to as Vue; pronounced "view") is an
          open-source model–view–viewmodel front end JavaScript framework for
          building user interfaces and single-page applications. It was created
          by Evan You, and is maintained by him and the rest of the active core
          team members.
        </p>
      )}
      {course === 'Next JS' && (
        <p>
          Next.js is an open-source web development framework built on top of
          Node.js enabling React-based web applications functionalities such as
          server-side rendering and generating static websites. React
          documentation mentions Next.js among "Recommended Toolchains" advising
          it to developers as a solution when "Building a server-rendered
          website with Node.js". Where traditional React apps can only render
          their content in the client-side browser, Next.js extends this
          functionality to include applications rendered on the server-side.
        </p>
      )}
    </div>
  );
}
