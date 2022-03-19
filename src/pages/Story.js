import { FiX } from "react-icons/fi";
import { useState } from 'react';
import './Story.css';



const Story = () => {

  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  }

  return (

    <div className='css-story'>
      <span className={click ? 'css-inner-story active' : 'css-inner-story'}>
      (1)陰陽師是日本特色職業，種族分類屬於曉之陣，職業分類屬於法師，創角時男女皆可選擇。<br/>
      (2)主武器是扇子(雙手武器)，副武器也是扇子(裝備在花狐身上)，而且身邊還有可愛的花狐，可以轉換成不同的型態，主屬性為智力，副屬性為幸運。<br/>
      (3)陰陽師的角色卡：B級BOSS傷害+1%、A級BOSS傷害+2%、S級BOSS傷害+3%、SS級BOSS傷害+4%<br/>
      (4)陰陽師沒有MP，取而代之的是使用靈力。<br/>
      (5)傳授技能為總傷害+10%
      </span>
      <p className={click ? 'css-story-btn' : 'css-story-btn active'} onClick={clickHandler}>
        {click ? <FiX /> : 'Introduction'}
      </p>
    </div>
  )
}

export default Story;