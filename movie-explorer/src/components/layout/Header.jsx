import { useState } from "react";
import { TabletMenuPopup } from "./TabletMenuPopup";
import { Link } from "react-router-dom";

export function Header() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false);

    return (
        <>
            <header className="app-header">
                <div className="head">
                    <button
                        type="button"
                        className="menu-button"
                        aria-label="Меню"
                        aria-expanded={isTabletMenuOpen}
                        onClick={() => setIsTabletMenuOpen((prev) => !prev)}
                    >
                        <svg className="menu" width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 6H21" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 18H21" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <Link className="app-header__logo title" to="/" aria-label="Movie Explorer">
                        <div className="title" aria-label="Movie Explorer">
                            <span className="title__first">Movie</span>
                            <span className="title__second">Explorer</span>
                        </div>
                    </Link>

                    <div
                        className="search-trigger"
                        onMouseEnter={() => setIsSearchVisible(true)}
                        onMouseLeave={() => setIsSearchVisible(false)}
                    >
                        <form action="/search" className={`search-form${isSearchVisible ? " search-form--visible" : ""}`}>
                            <input type="text" placeholder="Поиск фильмов..." className="search-form__input" />
                        </form>

                        <button className="icon-button" aria-label="Поиск">
                            <svg className="icon-button__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <TabletMenuPopup isOpen={isTabletMenuOpen} onClose={() => setIsTabletMenuOpen(false)} />
        </>
    )
}