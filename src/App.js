import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './Layout/MainLayout';
import Login from "./Pages/Login/Login.js"
import OrdenesServicio from './Pages/OrdenesServicio/OrdenesServicio';
function App() {

  //control de rutas, elemtos e items para el menu desplegable
  /**  
   * menuItems se compone por un array de objetos
   * estos objetos tiene la informacion relevante
   * 1 - name - Nombre que se mostrar en el Menu
   * 2 - path - El control de rutas para el menu y el react-router-dom
   * 3 - element - Componente a renderizar para la ruta especificada
   * 4 - childrens - items hijos que adoptan tambien las propiedades name, path y element
  */
  const menuItems= [
    { name: "Órdenes de servicio", path : "/ordenes-servicio", element: <OrdenesServicio/> },
    { name: "Reportes", childrens: [
      { name:"Ver ubicación", path:"/ver-ubicación", element: <></> },
      { name:"Estado dispositivos", path:"/estado-dispositivos", element: <></> },
      { name:"Consolidado órdenes", path:"/consolidado-ordenes", element: <></> },
      { name:"Reporte visitas", path:"/reporte-visitas", element: <></> },
      { name:"Repuestos solicitados", path:"/repuestos-solicitados", element: <></> },
      { name:"Repuestos Instalados", path:"/repuestos-instalados", element: <></> },
      { name:"Consolidado técnico", path:"/consolidado-tecnico", element: <></> },
      { name:"Órdenes en cotización", path:"/ordenes-cotización", element: <></> },
      { name:"Cronograma manten.", path:"/cronograma-manten", element: <></> },
    ]},
    { name: "Administración", childrens:[
      { name: "Admin montacargas", path: "/admin-montacargas", element: <></>},
      { name: "Organigrama Técnicos", path: "/organigrama-tecnicos", element: <></>},
      { name: "Creación de clientes", path: "/creacion-clientes", element: <></>},
      { name: "Gestión clientes", path:"/gestion-clientes", element: <></>}
    ]},
    { name: "Indicadores", childrens:[
      { name:"Cronograma de Mantenimientos", path:"/cronograma-mantenimientos", element: <></>}
    ]}
  ]

  return (
    <Routes>
      <Route path= '/login' element={<Login/>} />
      <Route path= '/Dashboard' element={<MainLayout menuItems={menuItems} />} />
      {
        menuItems.map((value)=>{
          return (!value.childrens)
          ? (<Route key={value} path={value.path} element={<MainLayout menuItems={menuItems} >{value.element}</MainLayout>} />)
          : (
            value.childrens.map((child)=>{
              return (<Route key={value} path={child.path} element={<MainLayout menuItems={menuItems} >{child.element}</MainLayout>} />)
            }) 
          )
        })
      }
    </Routes>
      
  );
}

export default App;
