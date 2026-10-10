function Header()
{
    return (
        <div className="header">
                <img  src="https://logos-world.net/wp-content/uploads/2022/12/Myntra-Logo.png" width="80px" height={"80px"} />
                <div className="option">
                    <button>Men</button>
                    <button>Women</button>
                    <button>Kids</button>
                    <button>Home & Living</button>
                    <button>Beauty</button>
                    <button>Studio</button>
                </div>

                <input placeholder="search for products and more" />

                <div className="profile">
                    <button>Profiles</button>
                    <button>Wishlists</button>
                    <button>Bag</button>

                </div>
        </div>
    )
}

export default Header