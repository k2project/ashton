import React, { useState } from 'react';
import './Home.scss';
import ashtonImg from './../imgs/ashton2.jpg';

function Home() {
    return (
        <div className='home'>
            <Trust />
            <HomeLinks />
        </div>
    );
}

export default Home;

function Trust() {
    const [showAll, setShowAll] = useState(false);
    return (
        <section className='trust'>
            <img
                src={ashtonImg}
                alt='sir Frederick Ashton'
                className='trust__img'
            />
            <div className='trust__about wrapper'>
                <h1 className='trust-title'>
                    <span className='trust-title__sir-txt'>Sir</span>
                    <span className='trust-title__frederick-txt'>
                        Frederick
                    </span>
                    <span className='trust-title__ashton-txt'>Ashton</span>
                    <span className='trust-title__holders-txt'>
                        Right Holders
                    </span>{' '}
                    <span className='trust-title__trust-txt'>Trust</span>
                </h1>
                <div className='trust__desc'>
                    <p>
                        The Sir Frederick Ashton Rights Holders Trust was
                        founded in 2011 by Wendy Ellis Somes, Jean- Pierre
                        Gasquet and Peter Schaufuss, the rights holders of the
                        ballets{' '}
                        <i>
                            Symphonic Variations, Cinderella, La Fille mal
                            gardée
                        </i>
                        and <i>Romeo and Juliet</i>. 
                    </p>
                    <p>
                        The three rights holders shared a passion for the work
                        of Sir Frederick Ashton and had a common vision about
                        how to further his legacy through both performances
                        and educational work around the world.
                    </p>
                    {!showAll && (
                        <button onClick={() => setShowAll(true)}>
                            Read more ...
                        </button>
                    )}
                    {showAll && (
                        <>
                            <p>
                                Today, the ambitions of the Trust’s founding
                                members continue with a new board of trustees at
                                the helm and new headquarters in Edinburgh,
                                situated in Saint Stephens, at the centre of the
                                Scottish capital. Designed in the late 1820s by
                                William Playfair, Saint Stephens is one of
                                Edinburgh’s most iconic buildings: it is fitting
                                that the new large venue at Saint Stephen's will
                                be named ‘Ashton Hall’ in honour of one of the
                                most iconic figures of British ballet, Sir
                                Frederick Ashton.
                            </p>
                            <button onClick={() => setShowAll(false)}>
                                &larr;
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
function HomeLinks() {
    return (
        <article className='home-links'>
            <a
                href='https://www.rosetheatreedinburgh.com'
                className='home-link home-link--rte'
            >
                <span className='home-link__bg' />
                <span className='home-link__cover' />
                <span className='home-link__caption'>
                    Rose Theatre <br />
                    Edinburgh
                    <spn className='btn'>Visit</spn>
                </span>
            </a>

            <a
                href='http://saintstephenstheatreedinburgh.com'
                className='home-link home-link--sse'
            >
                <span className='home-link__bg' />
                <span className='home-link__cover' />
                <span className='home-link__caption'>
                    Saint's Stephen <br />
                    Edinburgh
                    <spn className='btn'>Visit</spn>
                </span>
            </a>
            <a
                href='https://www.edinburghfestivalballet.com'
                className='home-link home-link--efb'
            >
                <span className='home-link__bg' />
                <span className='home-link__cover' />
                <span className='home-link__caption'>
                    Edinburgh Festival <br /> Ballet &amp; School
                    <spn className='btn'>Visit</spn>
                </span>
            </a>
        </article>
    );
}
