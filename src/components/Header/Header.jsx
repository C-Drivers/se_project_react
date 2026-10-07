import "./Header.css";
function Header(){
    return (
        <header className="header">
            <img className="header__logo" src="" alt="" />
                <p className="header__d-l">DATE LOCATION</p>
                <button className="header__add-clothes-btn">+ Add Clothes</button>
                <div className="header__user">
                <p className="header__username">NAME</p>
                <img src="" alt="" className="header__pfp" />
                </div>
        </header>
    )
    
}

export default Header;