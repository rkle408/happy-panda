import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import PlaySound from "../components/PlaySound";

import SideBar from "../components/SideBar";

import PandaEmotion from '../components/PandaEmotion';

import { Link } from "react-router-dom";

// May need to be data?.panda.pandaEmotions

import Auth from '../utils/auth';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const { loading, data } = useQuery(QUERY_USER);
  // eslint-disable-next-line no-unused-vars
  const emotion = data?.pandaEmotions || [];

  return (
    <main>
    <div className="container">
        <div className="columns">
            {Auth.loggedIn() ? (
            <div className="column is-one-quarter mt-2">
                <aside className="menu is-mobile">
                    <p className="menu-label">
                        Meditations 
                    </p>
                    <ul className="menu-list">
                        <li><a href="https://www.youtube.com/watch?v=pY0Ldqwmz_Q" target="_blank" rel="noreferrer">5-4-3-2-1 Grounding</a></li>
                        <li><a href="https://www.youtube.com/watch?v=cEqZthCaMpo" target="_blank" rel="noreferrer">Deep Breaths</a></li>
                        <li><a href="https://www.youtube.com/watch?v=qTN_MtV5TFw" target="_blank" rel="noreferrer">Blow Out the Candle</a></li>
                        <li><a href="https://www.youtube.com/watch?v=cZJAsW_5SRA" target="_blank" rel="noreferrer">10-Minute Mediation</a></li>
                    </ul>
                    <p className="menu-label">
                        Emotional Intelligence
                    </p>
                    <ul className="menu-list">
                        <li><a href="https://www.youtube.com/watch?v=0QXmmP4psbA" target="_blank" rel="noreferrer">You Are Not Your Thoughts</a></li>
                        <li><a href="https://www.youtube.com/watch?v=6D4oP8UJQ90" target="_blank" rel="noreferrer">What is Disgust?</a></li>
                        <li><a href="https://www.youtube.com/watch?v=cultneKkP8g" target="_blank" rel="noreferrer">Finding Positivity</a></li>
                    </ul>
                    <p className="menu-label">
                        Parent Resources
                    </p>
                    <ul className="menu-list">
                        <li><a href="https://www.childrenscolorado.org/doctors-and-departments/departments/psych/mental-health-professional-resources/primary-care-articles/pediatric-coping-skills/" target="_blank" rel="noreferrer">Basic Coping Skills</a></li>
                        <li><a href="https://psychcentral.com/health/coping-skills-for-kids#emotional-methods" rel="noreferrer">Managing Stress in Kids</a></li>
                        <li><a href="https://www.kayatoastforthesoul.com/post/8-self-talk-strategies-for-when-your-emotions-get-intense" target="_blank" rel="noreferrer">Self-Talk Strategies</a></li>
                        <li><a href="https://www.youtube.com/c/headspace" target="_blank" rel="noreferrer">Headspace Youtube Channel</a></li>
                        <li><a href="https://www.youtube.com/channel/UCo0zW6kLPq2Ns_51AaZN0lQ/videos" target="_blank" rel="noreferrer">Lessons for SEL Youtube Channel</a></li>
                        <li><a href="https://www.youtube.com/watch?v=kNw8V_Fkw28&t=269s" target="_blank" rel="noreferrer">Self-Love and Acceptance</a></li>
                        <li><a href="https://www.youtube.com/c/headspace" target="_blank" rel="noreferrer">Headspace Youtube Channel</a></li>
                    </ul>
                </aside>
            </div>
            ) : (
                <p className="column is-one-quarter">
                You need to be logged in to see your pandas. Please{' '}
                <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
              </p>
            )}
            {Auth.loggedIn() ? (
                <PandaEmotion/>
            ):(
                <div className="column is-half" style = {{borderRadius:"10px"}}>
        <section className="hero is-info welcome is-small" style = {{backgroundColor:"rgba(255, 255, 255, 0)"}}>
            <div className="panda hero-body mt-4" style={{borderRadius:"10px"}}>
                <div className="container">
                    <div className='columns'>
                    <h1 className="title column mb-0">
                        Welcome Back.
                        {/* This will tell user what emotion panda has */}
                    </h1>
                    <PlaySound className="column" src="Welcome-back.mp3" />
                    </div>
                    <h2 className="subtitle">
                        Your panda missed you!
                        {/* This will give a hint as to how to help the panda */}
                    </h2>
                    
                    <div>
                        <img
                            src={require(`./pandas/happy.PNG`)}
                            alt="sad panda">
                        </img>
                    </div>
                </div>
            </div>
        </section>
    </div>
            )}
           
        </div>
    </div>
    </main>
  );
};

export default Home;
