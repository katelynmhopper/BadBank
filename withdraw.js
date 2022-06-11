function Withdraw(){
  const ctx = React.useContext(UserContext);  


    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [withdraw, setWithdraw]   = React.useState('');
    const [balance, setBalance] = React.useState(ctx.users[0].balance);
    const [disabled, setDisabled] = React.useState(true);
  
  
    const validate = amount => {
        if (!amount) {
          setStatus('Error: please enter a value');
          return false;
        } if (amount >= 0) {
          setStatus('Error: Withdraw cannot be zero or a positive number');
          return false;
        } if (!Number(amount)) {
          setStatus('Error: please enter a value');
        }
        return true;
    }
    const makeWithdraw = amount => {
      if (!validate(amount)) return;
      setBalance(Number(balance) + Number(amount));
      setShow(false);
      setStatus('');
      ctx.users[0].balance =- Number(amount)
    }
    console.log('>>>>>', {balance});
  
  function clearForm(){
    setWithdraw('');
    setShow(true);
  }
  
  
  React.useEffect(() => {
    if (!withdraw) {
      setDisabled(true); 
    } else {
      setDisabled(false);
    }
  },   [withdraw]);
  
  
    return (
      <Card
        bgcolor="warning"
        header="Withdraw"
        status={status}
        body={show ? (  
                <>
                <h3>Balance: ${balance}</h3> <br/>
                How much do you wand to withdraw?<br/>
                <input type="withdraw" className="form-control" id="withdraw" placeholder="Withdraw Amount -$" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/> <br/>
                <button type="submit" className="btn btn-light" onClick={() => makeWithdraw(withdraw)} disabled={disabled}>Withdraw</button>
                </>
              ):(
                <>
                <h5>Withdraw has been made!</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdraw?</button>
                </>
              )}
      />
    )
  }