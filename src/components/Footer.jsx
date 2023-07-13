import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { Link } from "react-router-dom";

function Footer() {
  var today = new Date();

  return (

    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="korafhub"
            className="w-[299px] h-[92.14px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to provide innovative tech solution to your company.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}


          <div className="max-w-xl lg:max-w-lg">
            <form action="https://api.smtprelay.co/contact/add?version=2" data-id="BlNreoDadW" method="post" id="ewf_subscriptionForm_BlNreoDadW" className="EWF__form Inline">
              <fieldset>

              </fieldset>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-3xl">Subscribe to our newsletter.</h2>
              <p className="mt-4 text-base leading-8 text-gray-300">The latest news, articles, and resources, sent to your inbox weekly.</p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email" />
                <fieldset className="webform-options style-updated" >
                  <div id="trackconsentscript">
                  </div>
                  <input type="submit" name="submit" value="Subscribe" id="eesubmit" className="EWF__subscribe" />
                  <input type="hidden" name="publicaccountid" value="e65082d2-ab46-445d-bd93-ed21c8a0d471" />
                  <input type="hidden" name="returnUrl" value="" />
                  <input type="hidden" name="activationReturnUrl" value="" />
                  <input type="hidden" name="alreadyactiveurl" value="" />
                  <input type="hidden" name="activationTemplate" value="" />
                  <input type="hidden" name="source" value="WebForm" />
                  <input type="hidden" name="verifyemail" value="false" id="ewf_verifyEmails" />
                  <input type="hidden" id="ewf_captcha" name="captcha" value="false" />
                  <input type="hidden" name="sendActivation" value="true" />
                  <input type="hidden" name="notifyEmail" value="" />
                
                <button type="submit" name="dismissForm" id="ewf_dismissForm" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
                </fieldset>
              </div>

            </form>
          </div>


        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          {`Copyright Ⓒ ${today.getFullYear()} korafhub. All Rights Reserved.`}
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );

}

export default Footer;
