function Topbar({ toggle }){
    return(
        <div className="topbar">
        <div className="toggle" onClick={() => toggle()}>
          <ion-icon name="menu-outline" />
        </div>
        <div className="search">
          <label>
            <input type="text" placeholder="Search here" name="" id="" />
            <ion-icon name="search-outline" />
          </label>
        </div>
        <div className="user">
          <img src={process.env.PUBLIC_URL + "/images/user.jpg"} alt="user" />
        </div>
      </div>
    )
}
export default Topbar;