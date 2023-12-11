# NodejsApplication
Deploying a sample node.js(express.js) application on Elastic Beanstalk and even deploying a REST API  POST request that returns Hello World on requesting the API.
Prerequisites:
  -An AWS account with access to Elastic Beanstalk, EC2, and Elastic Load Balancing
  -Node.js and NPM installed
  -Familiarity with Node.js, Express.js and AWS services
  -SSH client (e.g., PuTTY)
  -Text editor (e.g., Sublime Text, Visual Studio Code)
1. Create your Node.js application
2. Deploy your application to Elastic Beanstalk:
     2.1  Create the Elastic Beanstalk application:
          -Open the AWS Management Console and navigate to Elastic Beanstalk.
          -Click "Create application" and choose "Web Server".
          -Select "Node.js" platform and choose a desired version (e.g., Node.js 16.13.0).
          -Under "Application code", choose "Upload your code" and select your index.js file.
          -Configure your environment settings as needed (e.g., instance type, security groups).
          -Click "Create application" to create the Elastic Beanstalk application.
     2.2  Create the Elastic Beanstalk environment:
         -Click on "Create environment" to deploy your code.
         -Choose your desired configuration options (e.g., environment name, CNAME, key pair).
         -Click on "Create environment" to start the deployment process.
3. After the successful deployment of the Node.js application, you will get a Domain name from AWS.
4. Check the Node.js application on a local browser using the Domain Name given by AWS
   Here is the sample for example [Nodejs_sample](http://nodejssample-env.eba-ayv9pyrj.ap-south-1.elasticbeanstalk.com/)
