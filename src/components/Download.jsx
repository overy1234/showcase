import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Demo video</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>My E-mail overy1234@naver.com </p>
        </div>
        <button className={styles.btnPrimary}  onClick={() => window.open( "https://www.youtube.com/channel/UCVf_Yq4z4aMM8nA6onOl2Kw")} >Connect</button>
        <div className={styles.flexCenter}>
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Download