function AllData(){
  const ctx = React.useContext(UserContext); 

  const [status, setStatus]     = React.useState(ctx.users);
  const [show, setShow]         = React.useState(ctx.users);
  const [name, setName]         = React.useState(ctx.users.name);
  const [email, setEmail]       = React.useState(ctx.users.email);
  const [password, setPassword] = React.useState(ctx.users.password);
  


  ctx.users.length = 3;
  console.log(ctx.users);
  
  console.log(JSON.stringify(ctx))
  console.log('>>>', ctx.users)
  console.log('>>>>>', ctx.users[0].name)

  const firstName = ctx.users[0].name; 
  console.log('Test', firstName)
  const firstEmail = ctx.users[0].email; 
  console.log('Test', firstEmail)
  const firstPassword = ctx.users[0].password; 
  console.log('Test', firstPassword)

 // const secondName = ctx.users[1].name; 
  //console.log('Colton', secondName);
   console.log('attempt', ctx.users[1]) //this shows in the console but I can't use the data within it to pass into the table



  return(
  <table className="table ">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td> {firstName} </td>
        <td> {firstEmail} </td>
        <td> {firstPassword} </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>  </td>  
        <td> "ctx.users[1].name" </td>
        <td></td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  
  )};