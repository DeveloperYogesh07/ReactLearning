Question1 -> is JSX is manditory for react ?

Answer1 -> no, JSX is not manditory for react. React is just a library which provides us lot of things . But it does not force to use JSX.

----------------------------------------------------------------------------------------------------------


Question2 -> is ES6 is manditory for react ?

Answer2 -> no, not manditory.


----------------------------------------------------------------------------------------------------------

Question3 -> how can we write comment in JSX?

Answer3 -> inside {} we can write any valid js code . so we can write comment also . like -
  { 
    // -> this is valid comment
  }


  --------------------------------------------------------------------------------------------------------


Question4 -> what is <React.Fragment></React.Fragment> and <> </> ?

Answer4 -> these are the empty div . jsx can have only one parent or root if we give a <div> as a parent it look so ugly so we use <> </> these are empty div and both are same.


----------------------------------------------------------------------------------------------------------

Question5 -> what is Virtual DOM ?

Answer5 -> Virtul Dom is represantation of Actul dom . 

----------------------------------------------------------------------------------------------------------

Question6 -> what is Reconciliation in React ?

Answer6 -> Reconciliation is the process where we have a DIFF algorithm which finds out difference between the trees. So when it finds the difference it will  Re-Renders the only portion which is required .


----------------------------------------------------------------------------------------------------------

Question7 -> What is react fiber ?

answer7 -> React Fiber is an ongoing reimplementation of React's core algorithm .The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.


----------------------------------------------------------------------------------------------------------

Question8 -> why do we need keys in react ? when do we need keys?

Answer8 -> A key is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists. Keys should be given to the elements within the array to give the elements a stable identity. key should be given when there are same div .


----------------------------------------------------------------------------------------------------------


Question9 -> Can we use index as keys in React?

Answer9 -> Yes, we can use the index as keys, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.



----------------------------------------------------------------------------------------------------------


Question10 -> What is props in React? Ways to.

Answer10 ->  props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.


----------------------------------------------------------------------------------------------------------


Question11 -> What is Config Driven UI?

Answer11 ->     Config Driven UI are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort. A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.



---------------------------------------------------------------------------------------------------------


Question12 -> Difference between Virtual DOM and Real DOM?

Answer12 -> DOM stands for Document Object Model, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.

Virtual DOM->
The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.


Real DOM->
The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .