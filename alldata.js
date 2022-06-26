function AllData(){
  const ctx = React.useContext(UserContext);
  
  return (
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
      {ctx.users.map((user, index) => (
      <tr>
      <th scope="row">{index + 1}</th>
      <td> {user.name} </td>
      <td> {user.email} </td>
      <td> {user.password} </td>
      </tr>
      ))}
      </tbody>
      </table>
  )};