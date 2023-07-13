import { apple, manage, google } from "../../assets";
import styles, { layout } from "../../style";

const Design = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={manage} alt="Design" className="w-[70%] h-[90%] relative z-[5] rounded-3xl" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
     Product Design  <br className="sm:block hidden" /> And Prototyping
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our team of certified Product designers are highly-skilled in designing mobile apps
      for numerous platforms with adding multiple features in harmony. At Korafhub, we make
       sure that our clients like the design and our experts create an interacting diagram
        and process flows to define the UI design and functionality. You can trust us as we
         have gained expertise and deep know-how on mobile app development that covers all niche industries.
      </p>
{/* 
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Design;
