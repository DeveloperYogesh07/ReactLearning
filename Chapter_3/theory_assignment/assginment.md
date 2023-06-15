Question1 -> what is JSX?

Answer1 -> JSX is a html like syntax . It makes easier to write the HTML like syntax into js file .
  whenever we have to write the big html  we use JSX. JSX uses the React.createElement behind the scene.
  and React.createElement gives the object and then it is converted into html and then rendered into DOM .

  ---------------------------------------------------------------------------------------------------------------------------



  Question2 -> superpower of JSX ?

  Answer2 ->  With the help of JSX we can write big html like markup language inside js file. it readable and easy to maintain
   Using JSX, we can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.
         

 ---------------------------------------------------------------------------------------------------------------------------


 Quetion3 -> Role of type attribute in script tag? What options can I use there?

 Answer3 -> type attribute specify the type of scrpt .The type attribute identifies the content between the <script> and 
 </script> tags. It has a Default value which is “text/javascript”.

text/javascript : It is the basic standard of writing javascript code inside the <script> tag.
text/ecmascript : this value indicates that the script is following the EcmaScript standards.
module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
text/babel : This value indicates that the script is a babel type and required bable to transpile it.
text/typescript: As the name suggest the script is written in TypeScript.


---------------------------------------------------------------------------------------------------------------------------

Question4 -> {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

Answer4 -> {TitleComponenet}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.


{<TitleComponent/>} : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.

<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.
