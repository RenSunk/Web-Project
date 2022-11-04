import { useRef } from "react"
import "./DropdownMenu.css"
import "../Layout/Menu/Menu.css"
function DropdownMenu({ children, item }) {

    //referencia para el manejo de eventos del <div></div>
    const divRef = useRef(null)

    //funcion que se encarga de hacer el coportamiento del menu desplegable
    function visible() {
        if (divRef.current.classList.contains('hidden')) {
            divRef.current.classList.remove('hidden');
            setTimeout(function () {
                divRef.current.classList.remove('visuallyhidden');
            }, 10);
        } else {
            divRef.current.classList.add('visuallyhidden');
            divRef.current.addEventListener('transitionend', function (e) {
                divRef.current.classList.add('hidden');
            }, {
                capture: false,
                once: true,
                passive: false
            });
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div
                className="Item"
                onClick={() => visible()}>
                <p>{item}</p>
            </div>
            <div ref={divRef} className="box visuallyhidden hidden" >
                {children}
            </div>

        </div>
    )
}

export default DropdownMenu