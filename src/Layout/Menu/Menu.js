import { Link } from "react-router-dom"
import  DropdownMenu  from "../../Components/DropdownMenu"
import "./Menu.css"

function Menu({ menuItems }) {
    return (
        <>
            <div className="Contenedor-principal">
                {
                    menuItems.map((value) => {
                        return (!value.childrens) ? (
                            <Link key={value} to={value.path} className="Item">
                                <p>{value.name}</p>
                            </Link>
                        ) : (
                            <>
                                <DropdownMenu
                                    key={value}
                                    item={value.name} 
                                    >
                                {value.childrens.map((child, i) => {
                                    return (
                                        <Link
                                            key={child+i} 
                                            to={child.path}   
                                            className="Item">
                                                <p>{child.name}</p>
                                        </Link>
                                    )
                                })}
                                </DropdownMenu>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Menu