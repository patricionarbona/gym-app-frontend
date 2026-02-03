function Login() {
  return (
    <>
      <div className="bg-gray-400 w-1/2 m-auto">
        <form className="flex flex-col" action="">
          <fieldset>
            <label htmlFor="email">correo:</label>
            <input name="email" type="email" />
          </fieldset>
          <fieldset>
            <label htmlFor="password">contraseña</label>
            <input type="password" name="password" id="" />
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Login;
