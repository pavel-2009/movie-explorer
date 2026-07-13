export function Header() {
    return (
        <header class="app-header">
            <div class="head">
                <div class="menu-button" aria-label="Меню">
                    <svg class="menu" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 6H21" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 18H21" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <a class="title" href="#" aria-label="Movie Explorer">
                    <span class="title__first">Movie</span>
                    <span class="title__second">Explorer</span>
                </a>
                <form action="/search" className="search-form">
                    <input type="text" placeholder="Поиск фильмов..." className="search-form__input"/>
                </form>
                <button class="icon-button" aria-label="Поиск">
                    <svg class="icon-button__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}