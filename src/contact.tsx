/*
React Portfolio Project - (c)2024 Lance Stubblefield
--------------------------------------------------------------------------------------
Requires Vite, React.JS, React-Router-Dom, Typescript, Tailwind CSS, PostCSS, PostCSS-custom-properties
contact.tsx; web3forms used for form submission
######################################################################################
 */

import React from "react";
import {useForm} from "react-hook-form";
import './contact.css'

function Contact() {
    interface FormData {
        name: string;
        company: string;
        phone: string;
        email: string;
        message: string;
        file: string;
    }

    const {register, reset, handleSubmit, formState: {errors}} = useForm<FormData>();
    const [result, setResult] = React.useState("");

    const onSubmit = async (data: FormData) => {
        console.log(data);
        setResult("Sending....");
        const formData = new FormData();

        formData.append("access_key", "0d584a33-c65d-4991-843b-6a67e1248023"); // Lance's Key
        for (const key in data) {
            if (key === "file") {
                formData.append(key, data[key][0]);
            } else {
                formData.append(key, data[key as keyof FormData]);
            }
        }

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            reset();
            setResult(res.message);
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };
    const clearForm = () => {
        reset();
        setResult("");
    }
    return (
        <>
            <div className="mainHead">
                <h1>Contact Me</h1>
                <hr/>
            </div>
            <div className="mainBody">
                <div className="contactContent">
                    <div className="contactContainer">
                        <div className="leftPane">
                            <h2>Want more information?</h2>
                            <p>
                               Get in touch - let's start a new project!
                                <br/> <br/>
                            </p>
                            <h4>Your new website awaits!</h4>
                        </div>
                        <div className="rightPane">
                            <div className="contactCard">
                                <form onSubmit={handleSubmit(onSubmit)} id="contactForm">
                                    <input type="text" {...register("name", {
                                        required: "*Name Required", maxLength: 80,
                                    })}
                                           className="formInput" id="formName" placeholder="Name (required)"/>
                                    <span className="errorMsg">{errors.name?.message || ""}</span>

                                    <input type="text" {...register("company", {maxLength: 80,})} className="formInput"
                                           id="formCompany" placeholder="Company Name"/>

                                    <input type="tel" {...register("phone", {maxLength: 80,})} className="formInput"
                                           id="formPhone" placeholder="Phone"/>

                                    <input type="email" {...register("email", {
                                        required: "*Valid Email Address Required", pattern: {
                                            value: /^\S+@\S+$/i, message: "Please enter a valid email",
                                        },
                                    })}
                                           className="formInput" id="formEmail" placeholder="Email (required)"/>
                                    <span className="errorMsg">{errors.email?.message || ""}</span>

                                    <textarea {...register("message", {required: "*Message Required",})}
                                              id="formMessage"
                                              placeholder="Enter Message Here"></textarea>
                                    <span className="errorMsg">{errors.message?.message || ""}</span>

                                    <input type="file" {...register("file")} className="formInput" id="formFile"
                                           placeholder="Attach File"/>

                                    <div className="h-8 w-full text-white">{result}</div>
                                    <button id="formButton" type="submit" className="btn">Send</button>
                                    <button id="clearButton" type="reset" className="btn" onClick={clearForm}>Clear
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="mainFoot">

            </div>
        </>
    )
}

export default Contact
