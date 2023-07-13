import styles from "../../style";
import { GetStarted, Footer, Navbar, } from "..";

const Contact = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

  
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <div className="mx-auto max-w-2xl text-center">
                    <h2 className={styles.heading2}>Contact Us</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Aute magna irure deserunt veniam aliqua magna enim voluptate.
                    </p>
                </div>
        <GetStarted />
        <Footer />
      </div>
    </div>
  </div>
);
//09160264150
export default Contact;