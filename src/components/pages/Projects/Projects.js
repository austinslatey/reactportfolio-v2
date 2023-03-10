import React from "react";
import './Projects.css'
import bugInvaders from './assets/bugInvaders.png'
import winterWonderland from './assets/winterWonderland.png'
import cubeMatcher from './assets/cubeMatcher.png'
import concertScout from './assets/concertScout.png'
import travelBug from './assets/travelBug.png'
import recipEase from './assets/recipEase.png'
import jamming from './assets/jamming.png'
import catWorx from './assets/catWorx.png'
import tsunamiCoffee from './assets/tsunamiCoffee.png'


export default function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <div className="cardContainer">
                <div className="card">
                    <div className="img-container">
                        <img src={bugInvaders} alt="bugInv"></img>
                    </div>
                    <div className="card-text">
                        <p>Phaser.js Skill Path</p>
                        <a href="https://austinslatey.github.io/bug-invaders/">BugInvaders</a>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img src={cubeMatcher} alt="cubeMatch"></img>
                    </div>
                    <div className="card-text">
                        <p>Phaser.js Skill Path</p>
                        <a href="https://austinslatey.github.io/Cube-Matcher/">CubeMatcher</a>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img src={winterWonderland} alt="winterWonderland"></img>
                    </div>
                    <div className="card-text">
                        <p>Phaser.js Skill Path</p>
                        <a href="https://austinslatey.github.io/winter-wonderland/">WinterWonderland</a>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img src={concertScout} alt="concertScout"></img>
                    </div>
                    <div className="card-text">
                        <p>Full Stack Bootcamp: Group Projects</p>
                        <a href="https://austinslatey.github.io/concert-scout/">ConcertScout</a>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img src={travelBug} alt="travelBug"></img>
                    </div>
                    <div className="card-text">
                        <p>Full Stack Bootcamp: Group Projects</p>
                        <a href="https://github.com/Metelak/Travel-bug">TravelBug</a>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img src={recipEase} alt="recipEase"></img>
                    </div>
                    <div className="card-text">
                        <p>Full Stack Bootcamp: Group Projects</p>
                        <a href="https://github.com/austinslatey/RecipEase">RecipEase</a>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img src={jamming} alt="jamming"></img>
                    </div>
                    <div className="card-text">
                        <p>Side Project</p>
                        <a href="https://bucolic-baklava-e825fb.netlify.app">Jamming</a>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img src={catWorx} alt="catWorx"></img>
                    </div>
                    <div className="card-text">
                        <p>Side Project</p>
                        <a href="https://github.com/austinslatey/Catwork-Security">CatWorx</a>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img src={tsunamiCoffee} alt="tsunamiCoffee"></img>
                    </div>
                    <div className="card-text">
                        <p>Side Project</p>
                        <a href="https://austinslatey.github.io/Tsunami-Coffee/">TsunamiCoffee</a>
                    </div>
                </div>
            </div>
        </div>
    );
}