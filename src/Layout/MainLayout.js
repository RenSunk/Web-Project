import Menu from "./Menu/Menu"

function MainLayout({ children, menuItems }) {
    return (
        <div style={{ display: "flex" }}>
            <Menu
                menuItems={menuItems}
            />
            {children}

        </div>
    )
}

export default MainLayout