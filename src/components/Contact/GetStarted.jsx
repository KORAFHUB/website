import { web } from "../../assets";
import styles, { layout } from "../../style";
import { Switch } from '@headlessui/react'
import { useState, useRef } from 'react'
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';





function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}



const GetStarted = () => {
    const [agreed, setAgreed] = useState(false)
    const [success, setsuccess] = useState(false)
    const [unsuccess, setunsuccess] = useState(false)

    const form = useRef();



    const timer = setTimeout(() => {
        setsuccess(false)
      }, 10000);


    const onsubmit = (e) => {
        e.preventDefault();
        setsuccess(true)
        const email = e.target.email.value
        const firstname = e.target.firstname.value
        const lastname = e.target.lastname.value
        const company = e.target.company.value
        const phonenumber = e.target.phonenumber.value
        const requirement = e.target.message.value

        const data = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            company: company,
            phonenumber: phonenumber,
            requirements: requirement
        }
        // console.log(process.env.NODE_ENV)
        // console.log(process.env.REACT_APP_SERVICEID)
        // console.log(process.env.REACT_APP_PUBLICKEY)
            // emailjs.send("service_6y1ddh9","template_0sjsw6t", data,"a12yVIcaqjMO63lOK")
            // .then((response) => {
            //     setsuccess()
            //     document.getElementById("loginform").reset();
            //    console.log('SUCCESS!', response.status, response.text);
            // }, (err) => {
            //    console.log('FAILED...', err);
            // });

            timer

}

return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Starting a Project? <br className="sm:block hidden" /> Get in touch
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Whether it's Web or Mobile solution, their ability to start quickly and hit the ground running is outstanding
                When it comes to work we are absolute professionals. Our diverse skills and ability to dive into new projects are also noteworthy.
            </p>
        </div>


        <div className={layout.sectionInfo}>



            <form ref={form} onSubmit={onsubmit} className="mx-auto mt-16 max-w-xl sm:mt-10" id="loginform">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstname" className={`${styles.paragraph} max-w-[470px] mt-5`}>
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="lastname" className={`${styles.paragraph} max-w-[470px] mt-5`}>
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                    <div className="sm:col-span-2">
                        <label htmlFor="company" className={`${styles.paragraph} max-w-[470px] mt-5`}>
                            Company
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                    <div className="sm:col-span-2">
                        <label htmlFor="email" className={`${styles.paragraph} max-w-[470px] mt-5`}>
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                    <div className="sm:col-span-2">
                        <label htmlFor="phonenumber" className={`${styles.paragraph} max-w-[470px] mt-5`}>
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <label htmlFor="country" className="sr-only">
                                    Country
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                >
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>EU</option>
                                    <option>NG</option>
                                    <option>AU</option>
                                    <option>GH</option>
                                </select>

                            </div>
                            <input
                                type="tel"
                                name="phonenumber"
                                id="phonenumber"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                    <div className="sm:col-span-2">
                        <label htmlFor="message" className={`${styles.paragraph} max-w-[470px] mt-5`}>
                            Project Requirements
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>





                    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <Switch.Label className="text-sm leading-6 text-gray-600">
                            By selecting this, you agree to our{' '}
                            <Link to="/privacy" className="font-semibold text-indigo-600">
                                privacy&nbsp;policy
                            </Link>
                            .
                        </Switch.Label>
                    </Switch.Group>


                    <div className="mt-10">
                        {agreed ? <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Let's talk
                        </button> : null}
                    </div>

                    <div className="sm:col-span-2">
                        {
                            success ?
                                <div class="bg-green-100 rounded-md p-3 flex">
                                    <svg
                                        className="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M0 0h24v24H0z" stroke="none" />
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>

                                    <div className="text-green-700">
                                        <div className="font-bold ">Thanks for Contacting Us!</div>

                                    </div>
                                </div>
                                : null
                        }
                    </div>


                </div>

            </form>
        </div>

    </section>
);

}





export default GetStarted;

