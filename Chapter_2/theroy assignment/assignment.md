Question1 -> What is `NPM`?

Answer1 -> NPM is a package manager. There is no official full form of NPM . We have to use some packages in our projects so we have to use a package manager which is NPM. 
  our React app is powered by lot of packages and for production ready app we have to do lot of things with our code like -  minimize it, bundle things and remove console log  , so for that we need helper packages and those helper packages come inside NPM.


---------------------------------------------------------------------------------------------------=

Question2 -> What is `Parcel/Webpack`? Why do we need it?

Answer2 -> Parcel/Webpack are bundlers . bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser. 
We need bundlers because bundlers do lot of things like -
    -- Create a server
    -- HMR(hot module replacement)
    -- file watcher algo(written in c++)
    -- minify our code(not for devleopment build)
    -- cleaining our code
    -- Dev and production build
    -- Super fast build algorithm
    -- Image optimization
    -- consistent hashing algorihtm
    -- caching while development
    -- compression(rename)
    -- compatible with older version of browser
    -- zero config
    -- can test with https

---------------------------------------------------------------------------------------------------=

Question3 -> What is `.parcel-cache`?

Answer3 -> Parcel(our bundler) also need some space . So parcer use .parcel_cache doing all things like , HMR,file watcher algo etc. Everything will be stored in .parcel-cache. it stores information about our project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

---------------------------------------------------------------------------------------------------=

Question4 -> What is `npx` ?

Answer4 -> NPX stands for `Node Package eXecute`. The command npx means execute using npm. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it.


---------------------------------------------------------------------------------------------------=

Question5 -> What is difference between `dependencies` vs `devDependencies`?

Answer5 -> dependencies means those packages on which our project are dependent . it simply means our project is dependent on This. For create our app we have to use those packages or library . like - React. we use command `npm install <dependencie>`
      The word `devDependencies` means the packages or library which are we need only in development environment . we dont need them on producer side like - parcel. we use command 
        `npm intall -D devDependencies`.


---------------------------------------------------------------------------------------------------=

Question6 -> What is Tree Shaking?

Answer6 -> Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.



---------------------------------------------------------------------------------------------------=


Question7 -> What is Hot Module Replacement?

Answer7 -> Hot Module Replacement is a feature that enables us to see code changes in the browser without having to refresh it.


---------------------------------------------------------------------------------------------------=


Question8 -> List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.

Answer8 -> My 5 favourite 5 superpowers of parcel are -
         1. Hot module Replacement
         2. minify of code
         3. Image optimization
         4. test with HTTPS also
         5. compatible with older version also


  1. Hot module replacement means the parcel provides us the functionlity that we can see our code changes in the browser without even refreshing our browser. This can be more helpfull for time saving .

  2. Image optimization - The most of heavy things on website it image. the parcel also does the image optimization.

  3. compatible with older version also , parcel provides the functionlity that our project can compatible with older version of browswer also .

  4. test with HTTPS also , we can test our app with HTTPS also .


---------------------------------------------------------------------------------------------------=


Question9 -> What is `.gitignore`? What should we add and not add into it?

Answer9 -> whenever we upload a project on github we should add a `.gitignore` file also. this file is a .md file and git hub ignore this file , it will not be commited on github . anything which is auto-genrated will put inside 
gitignore file . we should add node_modules , parcel_cache etc. file im .gitignore file. 


--------------------------------------------------------------------------------------------------=

Question10 -> What is the difference between `package.json` and `package-lock.json`?

Answer10 -> `package.json` holds all the information about our project. It typically contains information about the project such as its name, version, author, and license. It also lists the project's dependencies on other packages, along with their version numbers, so that these dependencies can be automatically installed when the project is set up or updated. 

`package-lock.json` is a file that is automatically generated by npm when a package is installed. It records the exact version of every installed dependency, including its sub-dependencies and their versions.


--------------------------------------------------------------------------------------------------=

Question11 -> Why should I not modify `package-lock.json`?

Answer11 -> we should not modify our`package-lock.json` because this file contains the record of the exact version of every intalled dependency , including its sub-dependencies and their versions . Basically it locks the version . It will tell what exactly version of library we are using. so we can't modify it.



--------------------------------------------------------------------------------------------------=

Question12 -> What is `node_modules` ? Is it a good idea to push that on git?

Amswer12 ->  `node_modules` are packages which we are using in our project . these are a cache for the external modules that your project depends upon. When we npm install them, they are downloaded from the web and copied into the node_modules folder . it is not a good idea to push  it on git because it can re-generate easily. and these are very heavy files also.


--------------------------------------------------------------------------------------------------=

Question13 -> What is the `dist` folder?

Answer13 -> dist folder keep the files minified . when we use command `npx parcel build index.html` then parcel will create a production build and put all the production files into our dist folder.


--------------------------------------------------------------------------------------------------=

Question14 -> What is `browserlists`?

Answer 14 ->  browserlist is a thing which will make out code compatable for a lot of browswer.

--------------------------------------------------------------------------------------------------=


