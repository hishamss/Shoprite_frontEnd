# Shoprite-React

<h3>Deployed on AWS</h3>
<a href="http://ec2-3-101-140-233.us-west-1.compute.amazonaws.com:3000/">Link</a>
<br>
Demo Users:<br>
Admin user >> username: admin / password: pass
<br>
Regular user >> username: user / password: pass
<hr>
<h3>Product Description</h3>
This is front-end website for Shoprite API server build mainly using ReactJS. This website provides a management interface for the store manager to add, list, update and delete the store's employees information.
<hr>
<h3>CI/CD Pipeline Using Jenkins</h3>

Below is the steps I used to setup the build pipeline:

- On EC2 instance, install npm, node and express
- Installed Jenkins on Tomcat server
- Enabled webhook on github repository to trigger Jenkins build pipeline whenever new changes pushed to the main branch
- Created pipeline stages including cleaning the public folder for express, run npm install, run npm build, and copy the new build folder to express public folder
<hr>
<h3>Usage</h3>

- Admin/user login from the landing page
- Both admin and user can see the list of the available employees in the store, but only the admin is able to change their roles, delete them and add new employees
- If the user logout, he/she will be redirected to the landing page and his session will be removed from the cookies

<h3>Demo Video</h3>

!["Demo Video"](/DemoVideo.gif)

<h3>Technology Used</h3>
<hr>
<table>
<tr>
<th>Technology</th>
<th>Link</th>
</tr>
<tr>
<td>React</td>
<td>https://reactjs.org/</td>
</tr>
<tr>
<td>React Bootstrap</td>
<td>https://react-bootstrap.github.io/</td>
</tr>
<tr>
<td>Redux</td>
<td>https://www.npmjs.com/package/redux</td>
</tr>
<tr>
<td>React-router-dom</td>
<td>https://www.npmjs.com/package/react-router-dom</td>
</tr>
<tr>
<td>Axios</td>
<td>https://www.npmjs.com/package/axios</td>
</tr>
<tr>
<td>js-cookie</td>
<td>https://www.npmjs.com/package/js-cookie</td>
</tr>
<tr>
<td>Query Parsing - qs</td>
<td>https://www.npmjs.com/package/qs</td>
</tr>
</table>
<hr>
<h3>Author</h3>

- <a href="http://portfolio.hishamsaymeh.com/">Portfolio</a>
- <a href="https://www.linkedin.com/in/hisham-saymeh">LinkedIn</a>
- <a href="https://github.com/hishamss">GitHub</a>
