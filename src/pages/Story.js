import { FiX } from "react-icons/fi";
import { useState } from 'react';
import './Story.css';



const Story = () =>{

    const [click, setClick] = useState(false);

    const clickHandler = () => {
      setClick(!click);
    }

    return(
        
      <div className='css-story'>
      <span className={click ? 'css-inner-story active' : 'css-inner-story'}>
        After years of turmoil, Oda Nobunaga finally seized control of Japan, but his desire for power only grew. He sought immortality, and the temple of Honnou-Ji would bring it to him.
        He prepared an ancient ritual of reincarnation that would see him reborn as The Sixth Sky Demon King, but word of the ritual got out, and the feudal lords stormed Honnou-ji to stop
        Nobunaga while it was still possible. In the end, a young Spirit Walker named Kanna disrupted the ritual, and the would-be dark lord's plans crumbled around him.
        <br />
        <br />
        But victory came at a cost. Just as the ritual was disrupted, a great pillar of light lurched forth from the temple and transported everyone to a strange world. Now, Kanna must conquer
        this strange place and regain lost strength and allies in order to stop the dark ambitions of Nobunaga's followers!
      </span>
      <p className={click ? 'css-story-btn' : 'css-story-btn active'} onClick={clickHandler}>
        {click ? <FiX /> : 'Story'}
      </p>
    </div>
    )
}

export default Story;