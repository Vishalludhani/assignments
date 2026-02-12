1. Generate package.json
    npm innit

2. change main to server.js
3. change type to module in package
4. create server.js
5. install express and import it in server.js and create http server and assign port


### Connect MongoDB Database structure
        REST API ----> mongodb native driver -----> MongoDB server
        REST API ----> mongodb ODM tool (mongoose) -----> MongoDB server
        



6. Use mongoose, it generates the mysql(raw) queries by itself, ODM - Object Document Mapping 
    it includes built-in casting,query generation
    Install mongoose and connect to mongodb server

7. Create schema of the resoure (Blue print of the document)
8. Create model of the schema
9. Perform Database operations on the model    