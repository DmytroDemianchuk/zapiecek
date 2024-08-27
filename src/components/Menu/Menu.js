import React from 'react';
import './Menu.css'; // Переконайтесь, що ви маєте відповідний CSS

// Імпорт зображень
import lobsterBisqueImg from '../img/menu/lobster-bisque.jpg';
import breadBarrelImg from '../img/menu/bread-barrel.jpg';
import cakeImg from '../img/menu/cake.jpg';
import caesarImg from '../img/menu/caesar.jpg';
import tuscanGrilledImg from '../img/menu/tuscan-grilled.jpg';
import mozzarellaImg from '../img/menu/mozzarella.jpg';
import greekSaladImg from '../img/menu/greek-salad.jpg';
import spinachSaladImg from '../img/menu/spinach-salad.jpg';
import lobsterRollImg from '../img/menu/lobster-roll.jpg';

const Menu = () => (
    <section id="menu" className="menu section-bg">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>Menu</h2>
                <p>Sprawdź Nasze Smaczne Menu</p>
            </div>

            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
                {/* <ul id="menu-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-starters">Starters</li>
                    <li data-filter=".filter-salads">Salads</li>
                    <li data-filter=".filter-specialty">Specialty</li>
                </ul> */}
            </div>

            <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={lobsterBisqueImg} className="menu-img" alt="Lobster Bisque" />
                    <div className="menu-content">
                        <a href="#">Ruskie</a><span>$5.95</span>
                    </div>
                    <div className="menu-ingredients">
                    Nadziewane ziemniakami i serem, to klasyka polskiej kuchni
                    </div>
                </div>

                <div className="col-lg-6 menu-item filter-specialty">
                    <img src={breadBarrelImg} className="menu-img" alt="Bread Barrel" />
                    <div className="menu-content">
                        <a href="#">Pierogi z Mięsem:</a><span>$6.95</span>
                    </div>
                    <div className="menu-ingredients">
                    Zazwyczaj nadziewane mielonym wieprzowym lub wołowym, oferując sycącą i aromatyczną opcję
                    </div>
                </div>

                <div className="col-lg-6 menu-item filter-starters">
                    <img src={cakeImg} className="menu-img" alt="Crab Cake" />
                    <div className="menu-content">
                        <a href="#">Pierogi z Kapustą i Grzybami</a><span>$7.95</span>
                    </div>
                    <div className="menu-ingredients">
                    Wegetariańska ulubienica, wypełniona kiszoną kapustą i leśnymi grzybami.
                    </div>
                </div>

                <div className="col-lg-6 menu-item filter-salads">
                    <img src={caesarImg} className="menu-img" alt="Caesar Selections" />
                    <div className="menu-content">
                        <a href="#">Pierogi ze Szpinakiem i Serem</a><span>$8.95</span>
                    </div>
                    <div className="menu-ingredients">
                    Kremowe i aromatyczne nadzienie, lekkie wegetariańskie danie
                    </div>
                </div>

                <div className="col-lg-6 menu-item filter-specialty">
                    <img src={tuscanGrilledImg} className="menu-img" alt="Tuscan Grilled" />
                    <div className="menu-content">
                        <a href="#">Kiełbasa z Grilla</a><span>$9.95</span>
                    </div>
                    <div className="menu-ingredients">
                    Grillowana polska kiełbasa podawana z musztardą i chrzanem, idealne uzupełnienie każdego posiłku
                    </div>
                </div>

                <div className="col-lg-6 menu-item filter-starters">
                    <img src={mozzarellaImg} className="menu-img" alt="Mozzarella Stick" />
                    <div className="menu-content">
                        <a href="#">Żurek</a><span>$4.95</span>
                    </div>
                    <div className="menu-ingredients">
                    Tradycyjna kwaśna zupa żytniowa z białą kiełbasą, wędzonym boczkiem i jajkiem na twardo, często serwowana w chlebowym misie
                    </div>
                </div>

                <div className="col-lg-6 menu-item filter-salads">
                    <img src={greekSaladImg} className="menu-img" alt="Greek Salad" />
                    <div className="menu-content">
                        <a href="#">Placki Ziemniaczane</a><span>$9.95</span>
                    </div>
                    <div className="menu-ingredients">
                    Chrupiace placki ziemniaczane, złociste i smażone, podawane z kwaśną śmietaną lub bogatym gulaszem.
                    </div>
                </div>

                <div className="col-lg-6 menu-item filter-salads">
                    <img src={spinachSaladImg} className="menu-img" alt="Spinach Salad" />
                    <div className="menu-content">
                        <a href="#">Bigos</a><span>$9.95</span>
                    </div>
                    <div className="menu-ingredients">
                    Syte danie, składające się z mieszanki mięs, kapusty kiszonej i świeżej, długo duszone z przyprawami
                    </div>
                </div>
{/* 
                <div className="col-lg-6 menu-item filter-specialty">
                    <img src={lobsterRollImg} className="menu-img" alt="Lobster Roll" />
                    <div className="menu-content">
                        <a href="#">Lobster Roll</a><span>$12.95</span>
                    </div>
                    <div className="menu-ingredients">
                        Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
                    </div>
                </div> */}
            </div>
        </div>
    </section>
);

export default Menu;
