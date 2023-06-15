Question1 -> what is Emmet?

Answer1 -> Emmet is a free ad-on on our text-editor. Emmet allow us to type shortcut and then expanded into full pieces of code. By using Emmet we can save time. Also relying on Emmet's auto completion means fewer typos and missing tags, leading to more valid files. i.e. when we use shift+1 in html code we there will be a boiler plate of html in our code.

----------------------------------------------------------------------------------------------------------

Question2 -> Diffrence between library and framework?

Answer2 -> library -> Libraries provide developers with predefined functions and classes to make their work easier and boost the development process.By using a library, we can control the flow of the application and call the library. Libraries are a collection of helper modules, objects, classes, functions, message templates, pre-written code, etc.
     
Framework -> Framework is like the foundation upon which developers build applications for specific platforms.  when we use a framework, the control is inverted, i.e., the framework controls the flow and calls your code. Frameworks consist of a lot of APIs, compilers, toolsets, support programs, libraries, etc.

----------------------------------------------------------------------------------------------------------

Question3 -> What is CDN? Why do we use it?

Answer3 -> A content delivery network (CDN) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to where users are. Data centers across the globe use caching, a process that temporarily stores copies of files, so that we can access internet content from a web-enabled device or browser more quickly through a server near you. CDNs cache content like web pages, images, and video in proxy servers near to our physical location. This allows us to do things like watch a movie, download software, check your bank balance, post on social media, or make purchases, without having to wait for content to load.


we could think of a CDN like an ATM. Having a cash machine on practically every corner makes it fast and efficient to get money. There’s no wait time in long bank lines, and the ATMs are placed in many convenient locations for immediate access.

we use CDN  to reduce latency, or reduce the delay in communication created by a network's design.

----------------------------------------------------------------------------------------------------------

Question4 ->  Why is React known as React?

Answer4 -> React known as React because it Reacts.React is a JavaScript library that helps developers to build user interfaces – the things we interact with on websites. It has become popular because of its simplicity and flexibility and is used by companies like Facebook, Instagram and Airbnb.

   React is a JavaScript library. To avoid writing time consuming repetitive functions in JavaScript we can use different libraries, i.e. pre-written JavaScript code. React is one of many libraries and it’s completely frontend and specializes in things that the user interacts with when they’re using a website. This could be buttons, search bars and menus.


----------------------------------------------------------------------------------------------------------

Question5 -> What is crossorigin in script tag?

Answer5 ->  The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests.

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.


----------------------------------------------------------------------------------------------------------

Question6 -> What is diference between React and ReactDOM?

Answer6 -> The react package holds the react source for components, state, props and all the code that is react.

The react-dom package as the name implies is the glue between React and the DOM. Often, you will only use it for one single thing: mounting your application to the index.html file with ReactDOM.render().

The reason React and ReactDOM were split into two libraries was due to the arrival of React Native (A react platform for mobile development).

React components are such a great way to organize UI that it has now spread to mobile to react is used in web and in mobile. react-dom is used only in web apps.


----------------------------------------------------------------------------------------------------------

Question7 -> What is difference between react.development.js and react.production.js files via CDN?

Answer7 -> The development build is used - as the name suggests - for development reasons. we have Source Maps, debugging and often times hot reloading( allows you to make changes to your code and immediately see the results on the device or emulator without losing the current state of the app) ability in those builds.


The production build, runs in production mode which means this is the code running on your client's machine. The production build runs uglify and builds your source files into one or multiple minimized files. There's also no hot reloading included. Source Maps might be included as separate files depending on our webpack devtool settings.

----------------------------------------------------------------------------------------------------------

Question8 -> What is async and defer?

Answer8 -> async and defer are boolean attriburtes which are use along with script tags to load external script efficently into out webpage.

when we load a page in browser there are two major thing happning in out browser.
1. html parsing
2. loading of the scripts 
        -> fetching the script from network
        -> actully executing script line by line

With normal script tag -> when browser parsing html line by line and when it encounters script tag then browser pause the parsing at that time and then fetches the scripts from network and gets into browser and executes it.
 after fetch of script and execution ,then html parsing.

 
 With async ->  while using async attribute meanwhile the html parsing is going on any of our script with
 the async tag fetch from the network asynchronusly along with html parsing.
 as soon as script are fetched and available inside browser then html parsing stopped and script is executed then and there.
 once script is executed html parsing starts like regular.


with defer -> in case of defer,the html parsing goes on and script are fetched in parallel from the network and the html parsing continuos to goes on , these script are only executed once the html parsing is fully completed ,so it does not matter when the script are available unlike async tag

note-> async does not maintain order of execution. but defer does.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------