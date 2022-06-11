function AllData(){
    const ctx = React.useContext(UserContext); 
    return (
      <Card
        bgcolor="primary"
        txtcolor="white"
        header="All Data"
        text="Data collected from your account."
        body={(<>
               <h3>{JSON.stringify(ctx)}</h3> <br/>
              </>
        )}
          />
      )
}
