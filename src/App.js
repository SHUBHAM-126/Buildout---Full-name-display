import { useState } from 'react'

function App() {

  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')

  const [fullName, setFullName] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()

    setFullName(`${fName} ${lName}`)

  }

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>First Name:</span>
          <input type="text" value={fName} onChange={(e) => setFName(e.target.value)} required />
        </label><br />
        <label>
          <span>Last Name:</span>
          <input type="text" value={lName} onChange={(e) => setLName(e.target.value)} required />
        </label> <br/>
        <button type="submit">Submit</button>
      </form>

      {fullName && <p>{`Full Name: ${fullName}`}</p>}
    </div>
  );
}

export default App;
