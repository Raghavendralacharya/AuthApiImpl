steps:
1. npm install command will install all the dependencies defined in the package json
2. node server.js will start the server
3. As per the requirement 3 api implemented 
    1. Sign Up
    2. Sign In
    3. List User with pagination feature


    1. Sign Up:
            Url : http://localhost:8080/api/auth/signup
            sample payload: {
                            "fName": "raghav",
                            "lName": "Acharya",
                            "email": "raghav@gmail.com",
                            "password": "raghav@2496",
                            "empId": "31",
                            "orgName": "Pratishthan"
                            }

    2. Sign in: 
            Url : http://localhost:8080/api/auth/signin
            sample payload: {
                            "email": "raghav@gmail.com",
                            "password": "raghav@2496"
                            }
            sign in will return the access token which needs to be passed for the further flow.

    3. List User with pagination feature :
            Url :http://localhost:8080/api/test/listuser?fName=&lName=Acharya&empId=&page=1&size=5
            
        page param is the which page data to be fetched and size param is how many record should be there in a page.
        access token has to be passed in the key field "x-access-token"
        
4. Code base uses the mognodb to store the data.

        
