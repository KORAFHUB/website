import { scale } from "../../assets";
import styles, { layout } from "../../style";
import Button from "./Button";

const Success = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        We help Promises <br className="sm:block hidden" />Enterprises reach Success
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We support both non-crypto talented teams and promising blockchain projects through
       financing, expertise, tech and tooling - from game ideation to launch, and beyond.
      </p>

      
    </div>

    <div className={layout.sectionImg}>
      <img src={scale} alt="mobile app" className="w-[70%] h-[90%] rounded-3xl" />
    </div>
  </section>
);

export default Success;
