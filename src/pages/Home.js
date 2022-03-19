import wordImage from './images/word.png';
import Story from "./Story";
import './Home.css'
import { motion } from 'framer-motion';
import Slider from './Slider';
import { Link } from 'react-router-dom';



const Home = () => {

  return (
    <>
      <div className='css-banner'>
        <motion.div animate={{
          y: ['600px', '500px', '600px']
        }}
          transition={{
            duration: 4,
            repeat: Infinity
          }
          }>
          <img src={wordImage} alt="homepage-img" className='bounce-word-img' />
        </motion.div>

      </div>
      <Story />
      <p style={{ textAlign: 'center', marginTop: '5vh', fontSize: '3vh' }}>Gallery</p>
      <Slider />
      <div className='css-skill-box'>
        <Link to="/skills">技能 Skills</Link>
      </div>
      <div className='css-grinding-box'>
        <Link to="/skills">練等 Grinding</Link>
      </div>
    </>
  );
};



export default Home;