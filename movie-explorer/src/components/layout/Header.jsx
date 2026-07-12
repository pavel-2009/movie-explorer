export function Header() {
    return (
        <header className="app-header">
            <div className="head">
                <div className="menu-button" aria-label="Меню">
                    <svg className="menu" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21" stroke="#F9FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 6H21" stroke="#F9FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 18H21" stroke="#F9FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <a className="title" href="#" aria-label="Movie Explorer">
                    <span className="title__first">Movie</span>
                    <span className="title__second">Explorer</span>
                </a>
                <button className="icon-button" aria-label="Поиск">
                    <svg className="icon-button__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}