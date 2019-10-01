# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

A: React JS is an entirely new syntax designed for manipulating, rendering and constructine new reusable components, HTMl and css within the DOM environment. It was created to make rendering web applications that use a dynamic and diverse data set to structure blocks of reusable code. Passing properties to different components and using state to monitor for changes to those variables allows for the code to essentially be self aware and adjusting based on predfined criteria.

1. What does it mean to think in react?

A: To think in React is to emulate the DRY principles and say "How can I accomplish my goal with the least amount of code while remaining dynamic and fluid to changes in the state of these components". With new information being introduced or a variety of potential user actions that will change the look and feel of the application and its components.

1. Describe state.

A: The state is basically allowing a variable to become variable within itself. If this occurs, then that happens. On and off, render, dont render, be this color or style and change to this style or color upon an action. whetehr that be browser or user initiated or based on several other factors the element can change and adapt to the new environment.

1. Describe props.

A: Props are Properties, pieces of data that is used or defined in other areas that can then be passed down to child components or imported to other areas of code that can then utilize that data for their respective piece of the puzzle. this allows for less code by re using properties that have either been passed down or filtered in some way

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A: Side effects are consequences or unintended actions that may occur based on a given execution of that code block. by re using code and properties and components it can also have an effect on other pieces of code throughout the DOM environment. It is important to note and look for side effects so that the correct action can be assured any any issues can be mitigated for example race condition can potentially cause negative effects by functions that are all attempting to execute at the same time while using the same data or property.
