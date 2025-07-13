const changeNavItems = ()=> {
    const navItems = document.querySelector(".header-nav__list");
    
    navItems.addEventListener("click", (event) => {
        event.target.classList.add("header-nav__active");
    })

    
    console.log(navItems);
}

