import { app } from "../../assets";
import styles, { layout } from "../../style";
import Button from "./Button";

const AppdevSection = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={app} alt="mobile app" className="w-[70%] h-[90%] rounded-3xl" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Mobile <br className="sm:block hidden" />App Development
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Delivering the best, unbeatable, and unparalleled mobile app solutions in this trend of technology.
       We propel brands, humanize technology, & change the culture of mobile tech. 
       Our Mobile App Development service offers custom solutions for businesses looking to expand their reach and engage with customers on-the-go.
      </p>

      
    </div>

  </section>
);

export default AppdevSection;
