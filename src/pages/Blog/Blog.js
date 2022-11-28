import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col gap-6 my-10">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium text-info">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p>
            React state management is a process for managing the data that React
            components need in order to render themselves. This data is
            typically stored in the component's state object. When the state
            object changes, the component will re-render itself. React state
            management is basically half of a React app. <br />
            React's useState is the best option for local state management. If
            you need a global state solution, the most popular ones are Redux,
            MobX, and the built-in Context API. Your choice will depend on the
            size of your project, your needs, and your engineers' expertise.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium text-info">
          React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <p>
            One of the main reasons for the popularity of React is that it works
            very efficiently with the DOM. Vue also uses the virtual DOM, but
            compared to React, Vue has better performance and stability.
            According to this data, Vue and React's performance difference is
            subtle since it is only a few milliseconds.
            <br />
            According to a survey by Stack Overflow 40.13% of the developers
            believe that React is the most commonly used JavaScript Framework.
            Angular and Vue follow it with 22.96% and 18.97%, respectively.
            <br />
            t's easier to learn Vue than angular and it reasonably takes the
            same amount of time and effort as learning react. Although some
            people argue that it's even easier to learn than react but that's of
            course subjective and varies from person to person.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium text-info">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            When it comes to inheritance, JavaScript only has one construct:
            objects. Each object has a private property which holds a link to
            another object called its prototype. That prototype object has a
            prototype of its own, and so on until an object is reached with null
            as its prototype.
            <br />
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium text-info">
          What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
            <br />A unit test is a way of testing a unit - the smallest piece of
            code that can be logically isolated in a system. In most programming
            languages, that is a function, a subroutine, a method or property.
            The isolated part of the definition is important.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
