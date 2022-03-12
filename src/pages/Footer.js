import { AiFillGithub , AiFillMail } from "react-icons/ai";
import './Footer.css';
const Footer = () => {
    return (
        <div className="css-footer">
            <a href="https://github.com/gary880"> <AiFillGithub /> Github</a>
            <p><AiFillMail style={{verticalAlign:'middle'}}/>: easycard32145@gmail.com</p>
        </div>


    );

};


export default Footer;