import React from "react";

const Header = () => {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "ERC20",
      link: "/create",
    },
    {
      name: "Contact Us",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
  ];
  return (
    <header class="header-one">
      <div class="header-menu-area header-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-3 d-flex align-items-center">
              <div class="logo">
                <a href="/">
<<<<<<< HEAD
                  <img src="img/logo/brand.png" alt="" />
=======
                  <img src="img/logo/blx.png" alt="" width={120} height={50} />
>>>>>>> 8715f7d6db4cb101a1a7085db6d9aa5a3f4331e8
                </a>
              </div>
            </div>
            <div class="col-xl-10 col-lg-10 col-md-9">
              <div class="header-right ">
                <a href="#" class="top-btn coin-btn">
                  Buy token
                </a>
              </div>
              <div class="header_menu f-right">
                <nav id="mobile-menu">
                  <ul className="new-nav-class" class="main-menu">
                    {menuList.map((menu, i) => (
                      <li class="resulta" key={i + 1}>
                        <a href={menu.link}>{menu.name}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
