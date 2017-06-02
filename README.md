# ICA02 Gruppe 10
# Ubuntu instance on UH-IaaS
Our application allows users to connect to a webpage which contains a field where they can input their username and retrieve names that were submitted by other users. However, it is important to note that the nodes are hardcoded in and do not represent actual computers who are connected to the webpage. While actual computers can connect to the webpage by using their web browser, only the hardcoded nodes will be listed.


## Getting Started
To create our application there were certain steps that needed to be taken to be able to achieve the functionality that we have in our application:

1. The first step was to create a new GitHub repository in order to make it easier for us to collaborate together. This has also given us the opportunity to make our project open source.
2. The second step was to write the JavaScript code and HTML. We began by first writing a basic HTML code where we implemented three functions. "PostNames" is the first function, this makes it possible for the user to write and submit a username on the webpage. The second function was "GetNames" this functions allows the user to retrieve usernames that were submitted on the webpage and display them. The third function was "MakeNameList" this function places the names that were submitted into a neat array list. https://github.com/maghov/ICA02/blob/master/index.html
3. The third step was to pull the GitHub repository to our cloud instance in order to make it accessible for all of our group teammates that use the cloud instance.
4. The fourth step was to install a node package manager. This was done by using the command "sudo apt install npm" (npmjs.com, 2017)

### Prerequisites
- Ubuntu Server
- Secure Socket Shell
- OpenStack
- Docker


### Installing
#### Instance
1. The first step was to set up a keypair to get secure access to our virtual machine by using SSH (Secure Socket Shell) http://searchsecurity.techtarget.com/definition/Secure-Shell

2. Afterwards we set up our instance, chose the operating system and chose the hardware specifications. Ubuntu server was also the chosen operating system.

3. Step three consisted of creating security groups and opening HTTP ports in the "Access & Security / Manage Security Group Rules" tab (Port: 80) 

#### Docker
1. The first step to installing Docker is running the command "sudo apt-get install -y docker-engine" in the terminal

2. The second step is to launch a container in order to test out the functionality of Docker and to see if it is installed correctly. The command "sudo docker run hello-world" can be used in order to download and run an image in a container.

3. The third step is to deploy a static HTML website as a container. This was a part of our in class assignment. This was also the most challenging point and we had a lot of difficulties connecting to the open port.

4. To be able host our image on our cloud instance we had to create an image and run the image with port 8000. This was done to make the page available for everyone who had access to the IP of our instance. The task was to create a http protocol and host it on our cloud instance. We also had to have a way for people to insert and return usernames from a list. To run our test image we used the command "sudo docker run -d -p 8000:8000:80 --name static-site prakhar1989/static-site"


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- Docker Engine
- Ubuntu Server
- OpenStack

## Authors
- Magnus Høvik
- John Jensen
- Eirik Oliversen
- Mohammad Hussain
- Erik Angell Berg

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/maghov/ICA02/blob/master/LICENSE) file for details

