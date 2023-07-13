import { web } from "../../assets";
import styles, { layout } from "../../style";
import Button from "./Button";

const WebdevSection = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Website and Web <br className="sm:block hidden" />App Development
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Providing efficient web app development services globally. 
      Our web app development services are not limited to local clients but we also welcome global clients. 
      AppClues offer progressive web app development solutions for greater reliability, high-performance, and striking visual appeal.
      </p>

     
    </div>

    <div className={layout.sectionImg}>
      <img src={web} alt="webapp" className="w-[70%] h-[90%] rounded-3xl" />
    </div>
  </section>
);

export default WebdevSection;
