import styles from "../../style";
import { Design, Business,AppdevSection,GetStarted, Success, WebdevSection, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "..";

const Page = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        
        <Business />
        <Design />
        <WebdevSection />
        <AppdevSection/> 
        <Success/>
        {/* <Testimonials />
        <Clients /> */}
        <CTA />
        {/* <GetStarted /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default Page;
