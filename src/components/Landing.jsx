import React from "react";
import UndrawBooks from '../assets/Undraw_Books.svg'
// import { Link } from "react-router-dom";
// I was trying to use Link to go to a section but it wasn't working so replaced with a href on this page

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Australia's most awarded online Library Platform</h1>
                        <h2>Find your dream book with <span className="purple">Library</span></h2>
                        <a href="#featured">
                            <button className="btn">Browse books</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />

                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing;