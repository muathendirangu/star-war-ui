# A fullstack graphQL server and client application to showcase Starwars catalogue of movies

The application consist of two parts A Node.js Apollo GraphQL server and A Typescript/React UI

   ## Clone the repository
   ```
     $ git clone https://github.com/muathendirangu/star-war-ui.git
   ```

   ### Running the GraphQL server locally
          - cd into the server directory
          ```
          $ cd server
          ```
          - install dependencies
          ```
          $ yarn install
          ```
          - Then execute the following app to run the server
          ```
          $ yarn start:dev
          ```
  ### Running the Typescript/React UI
    - cd into the client directory
    ```
    $ cd client
    ```
    - install dependencies
    ```
    $ yarn install
    ```
    - Then execute the following app to run the client
    ```
    $ yarn start
    ```


### Improvements.
1. Observability i.e Add tracing for http requests in order to identify bottlenecks such as latency.
   
#### Technologies used
 1. `TypeScript` - for type safety and compile-time type checking
 2. `Node.js` runtime
 3. `Apollo sever` - To enable creation of a graphql server
 4. `Nodemon` nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
 5. `Apollo Data source rest` - This package exports a (RESTDataSource) class which is used for fetching data from a REST API and exposing it via GraphQL within Apollo Server.
 


