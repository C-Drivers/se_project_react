import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import avatar_false from "../../assets/avatar_false.svg";
//
function Header(){
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Logo for website" />
                <p className="header__d-l">DATE LOCATION</p>
                <button className="header__add-clothes-btn">+ Add Clothes</button>
                <div className="header__user-container">
                <p className="header__username">NAME</p>
                <img src={avatar} alt="user_profile-picture" className="header__pfp" />
                </div>
        </header>
    )
    
}

export default Header;