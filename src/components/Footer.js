import React from 'react';
import './components.scss';
import SchaufussStarLogo from './../imgs/SchaufussStarLogo.png';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__bar wrapper'>
                <div>
                    <h4>Address/Contact:</h4>
                    <ul>
                        <li>Sir Frederick Ashton Rights Holders Trust</li>
                        <li>Saint Stephen’s</li>
                        <li>105 St Stephen Street </li>
                        <li>Edinburgh EH3 5AB</li>
                        <br />
                        <li>
                            <b>(+44) 0131 226 4000</b> 
                        </li>
                    </ul>
                </div>

                <div>
                    <h4>Founding Trustees: </h4>
                    <ul>
                        <li>Wendy Ellis Somes</li>
                        <li>Jean-Pierre Gasquet</li>
                        <li>Peter Schaufuss</li>
                        <li>Brian Eagles</li>
                    </ul>
                </div>
                <div>
                    <h4>Board of Trustees: </h4>
                    <ul>
                        <li>Brian Eagles</li>
                        <li>Michael Johnston</li>
                        <li>Peter Schaufuss</li>
                        <li>Luke Schaufuss</li>
                        <li>Colin Morrison (honorary)</li>
                    </ul>
                </div>
                <div>
                    <h4>Patrons: </h4>
                    <ul>
                        <li>Dame Beryl Grey</li>
                        <li>Natalia Makarova</li>
                        <li>Angela Rippon</li>
                        <li>Lynn Seymour</li>
                        <li>Lady Solti</li>
                        <li>Doreen Wells, Marchioness of Londonderry</li>
                        <li>Wayne Eagling</li>
                        <li>Wayne Sleep</li>
                    </ul>
                </div>
                <div>
                    <span>
                        <h4>Legal: </h4>
                        <ul>
                            <li>Burlingtons Legal LLP</li>
                            <li>5 Stratford Place</li>
                            <li>London W1C 1AX</li>
                        </ul>
                    </span>
                    <span>
                        <h4>Accounts:</h4>
                        <ul>
                            <li>Nyman Libson Paul</li>
                            <li>124 Finchley Road</li>
                            <li>London NW3 5JS</li>
                        </ul>
                    </span>
                </div>
            </div>
            <img
                src={SchaufussStarLogo}
                alt='Schaufus Entertainment'
                className='footer__img'
            />

            <p>
                Sir Frederick Ashton Rights Holders Trust is a limited liability
                company registered in England, Wales and Scotland No.7820677 
            </p>
            <p>Registered Charity No.1147498 and SC049547</p>

            <p className='footer__copy-rights'>
                Sir Frederick Ashton Right Holders Trust &copy;{' '}
                {new Date().getFullYear()}
            </p>
        </footer>
    );
}

export default Footer;
