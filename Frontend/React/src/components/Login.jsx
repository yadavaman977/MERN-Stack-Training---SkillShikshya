const Login = () => {
  return (
    <div>
        <h1>Login Form</h1>
        <form>
            <label htmlFor="username">Username :</label>
            <input type="text" id='Username' placeholder='Enter Username' />
            <label htmlFor="username">Password :</label>
            <input type="password" id='password' placeholder='Enter Password' />
        </form>
    </div>
  )
}

export default Login