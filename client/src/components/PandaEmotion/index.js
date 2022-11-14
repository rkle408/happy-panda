import { QUERY_ME } from '../../utils/queries';
import { UPDATE_USER } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import PlaySound from "../PlaySound";
import { useEffect, useState } from 'react';

const emotions=["angry","worried","lonely","jealous","disappointed"];
const hints = ["Panda needs to release some negative energy, exercise really helps!",
"Sometimes writing down your worries helps with anxiety!", 
"If you have no one to talk to, listening to music might help!", 
"Others might have things you want, but you have so many things to be thankful for!",
"It's sad when things don't go your way. Try some calming techniques!"];

const PandaEmotion = () => {
    // const { loading, data } = useQuery(QUERY_ME);
    // const userName = data?.me.username || [];
    // console.log(userName);
    
    const [emotion,setEmotion] = useState("happy");
    const [hint, setHint] = useState("");
    var randomIndex = Math.floor(Math.random()*emotions.length);
    var randomEmotion = emotions[randomIndex];
    var randomHint = hints[randomIndex];
    
    //const [createEmotion, { error }] = useMutation(UPDATE_USER)
    const changeEmotion = async () => {
        try {
            //await createEmotion({variables:{username:userName,pandaEmotion:randomEmotion}});
            setEmotion(randomEmotion);
            setHint(randomHint);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(()=>{
       // await changeEmotion()
       setEmotion(randomEmotion);
       setHint(randomHint);
       changeEmotion();
        },[]);


        function handleAnswer(event){
            if(event.target.id===emotion){
                console.log("correct");
                switch(emotion) {
                    case "angry":
                        window.open('https://www.youtube.com/watch?v=fzjfsOUmg3I', '_blank')
                      break;
                    case "lonely":
                        window.open('https://www.youtube.com/watch?v=GYEOwClY-cQ', '_blank')
                      break;
                      case "disappointed":
                        window.open('https://www.youtube.com/watch?v=tN5gSwhBMek', '_blank')
                        break;
                        case "worried":
                        window.open('https://www.youtube.com/watch?v=JzKZ75ELpro', '_blank')
                      break;
                      case "jealous":
                        window.open('https://www.youtube.com/watch?v=6CLuYV9Hlkk', '_blank')
                      break;
                  }
                  
                    setEmotion("happy");
                    setHint("Good job! Panda is happy again!");
                    
            }
            
        }

        
    return (
    <div className='columns'>
        <div className="column is-two-thirds" style = {{borderRadius:"10px"}}>
        <section className="hero is-info welcome is-small" style = {{backgroundColor:"rgba(255, 255, 255, 0)"}}>
            <div className="panda hero-body mt-5" style={{borderRadius:"10px"}}>
                <div className="container">
                    <div className='columns'>
                    <h1 className="title column mb-0">
                        Panda is {emotion}!
                        {/* This will tell user what emotion panda has */}
                    </h1>
                    <PlaySound className = "column" src= {require(`../../pages/audio/${emotion}.mp3`)} />
                    </div>
                    <h2 className="subtitle" style={{width:"650px"}}>
                        {hint}
                        {/* This will give a hint as to how to help the panda */}
                    </h2>
                    
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <img
                            height="400px"
                            width="400px"
                            src={require(`../../pages/pandas/${emotion}.PNG`)}
                            alt="sad panda">
                        </img>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    <div className="column is-one-third mt-5">
        <aside className="menu is-mobile">
                    <p className="menu-label">
                        Choose what will help Panda!
                    </p>
                    <ul className="menu-list">
                        <li className='columns'><button onClick={handleAnswer} className = "column m-2" id = "angry" style = {{backgroundColor:"#a601f8"}}>Go on a walk</button><PlaySound className = "column" src= {require(`../../pages/audio/walk.mp3`)}/></li>
                        <li className='columns'><button onClick={handleAnswer} className = "column m-2" id = "lonely" style = {{backgroundColor:"#006eff"}}>Listen to Music</button><PlaySound className = "column" src= {require(`../../pages/audio/music.mp3`)}/></li>
                        <li className='columns'><button onClick={handleAnswer} className = "column m-2" id = "worried" style= {{backgroundColor:"#00ff62"}}>Journal my feelings</button><PlaySound className = "column" src= {require(`../../pages/audio/write.mp3`)}/></li>
                        <li className='columns'><button onClick={handleAnswer} className = "column m-2" id = "disappointed" style= {{backgroundColor:"#ffc30f"}}>Take Deep Breaths</button><PlaySound className = "column" src= {require(`../../pages/audio/breathe.mp3`)}/></li>
                        <li className='columns'><button onClick={handleAnswer} className = "column m-2" id = "jealous" style= {{backgroundColor:"#ff730f"}}>Count Five Things I'm Grateful For</button><PlaySound className = "column" src= {require(`../../pages/audio/gratitude.mp3`)}/></li>
                    </ul>
                </aside>
    </div>
    </div>
    )
}
export default PandaEmotion;