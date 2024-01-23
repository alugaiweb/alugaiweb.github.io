function showMenuMobile() {
    let menuMobileOpen = document.querySelector('.menu-mobile');
    menuMobileOpen.classList.add('open-menu-mobile')
}

function closedMenuMobile() {
    let menuMobileClosed = document.querySelector('.menu-mobile');
    menuMobileClosed.classList.remove('open-menu-mobile')
}

function filtrosShow() {
    let menuFiltro = document.querySelector('.filtros');
    if (menuFiltro.classList.contains('open', 'border-filtro')) {
        menuFiltro.classList.remove('open', 'border-filtro');
        document.querySelector('.icon-arrow').src = "assets/icons/chevron-down-solid.svg";
    } else {
        menuFiltro.classList.add('open', 'border-filtro');
        document.querySelector('.icon-arrow').src = "assets/icons/chevron-up-solid.svg";
    }
}

function openMenuLog() {
    let menuLog = document.querySelector('.menu-log');
    if (menuLog.classList.contains('open-menu-log', 'border-menu-log', 'width-btn-log')) {
        menuLog.classList.remove('open-menu-log', 'border-menu-log', 'width-btn-log');
    } else {
        menuLog.classList.add('open-menu-log', 'border-menu-log', 'width-btn-log'); 
    }
}

function openMenuLogMob() {
    let menuLogMob = document.querySelector('.menu-log-mob');
    if (menuLogMob.classList.contains('open-menu-log-mob', 'border-menu-log-mob', 'width-btn-log-mob', 'menu-log-mobile', 'menu-log-mobile-user')) {
        menuLogMob.classList.remove('open-menu-log-mob', 'border-menu-log-mob', 'width-btn-log-mob', 'menu-log-mobile', 'menu-log-mobile-user');
    } else {
        menuLogMob.classList.add('open-menu-log-mob', 'border-menu-log-mob', 'width-btn-log-mob', 'menu-log-mobile', 'menu-log-mobile-user'); 
    }
}

