import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  //estados para el control de la informacion del usuario ( variables )
  const [ userName, setuserName ] = useState( "" )
  const [ userPass, setuserPass ] = useState( "" )

  //declaramos una variable para utilizar el react rouer sin depender de la vista o el componente <Link/>
  let navigate = useNavigate()
  
  const Submit = (event) =>{
    //previene la recarga de la pagina
    event.preventDefault()

    //Cambia la url
    navigate("/Dashboard")
  }

  return (
    <div>
      
      <div className="logo">
        <img className="img-responsive" src={process.env.PUBLIC_URL+"/assets/img/logo.jpeg" }/>
        {/*</img><img className="img-responsive" src="./assets/img/logoRoyalAmerica.png">*/}
      </div>
      <div className="background">
        <div className="row form-container">
          <div className="formulario">
            <h2>Inicia sesión</h2>
            <br />
            <form onSubmit={ (event) => Submit(event)}>
              <div className="form-group">
                <label >Usuario</label>
                <input onChange={ ({target})=> setuserName(target.value)} value={userName} type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label >Contraseña</label>
                <input onChange={ ({target})=> setuserPass(target.value)} value={userPass} type="password" className="form-control" />
              </div>
              <div className="form-group button">
                <button type="submit" className="btn btn-default" style={{width: "100%", background:"rgb(66,82,110)", color: "white"}}>Iniciar sesión</button>
              </div>
            </form>
          </div>
        </div>
        { /*Footer*/}
        <footer className="page-footer footer">
          <div>
            <p>© 2022 Global Circuit</p>
          </div>
        </footer>
        { /*Footer*/}
      </div>
    </div>
  );
}

export default Login;
