import React, { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'



const MyForm = () => {

    const [formMsg, setFormMsg] = useState(true);


    const handleFormSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            'service_wi8sgwq',
            'template_ciqmng9',
            event.target,
            'user_rR5UNb0nYAyNKkiYRAD6M'
        ).then(result => {
            console.log('contact us result', result);

            // setFormMsg('Thanks! We will get back to you as soon as possible.')

            if (result.status === 200) {
                setFormMsg(false)
                let timerInterval
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thanks you!',
                    text: 'Thanks! We will get back to you as soon as possible.',
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })
            }

        }).catch(error => {
            console.log('error', error);
            // setFormMsg(error)
        })
        event.target.reset();
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="form-floating mb-3 form-group">
                    <input type="text" name="name" id="name" className="form-control" placeholder="Your Name " required />
                    <label>Your name</label>
                </div>

                <div className="form-floating mb-3 form-group">
                    <input type="text" name="user_email" id="user_email" className="form-control" placeholder="Your email address " required />
                    <label>Your email</label>
                </div>

                <div className="form-floating mb-3 form-group">
                    <input type="text" name="subject" id="subject" className="form-control" placeholder="Your Subject" required />
                    <label className="text-secondary">Subject</label>
                </div>

                <div className="form-floating mb-3 form-group">
                    <textarea type="text" name="message" className="form-control" id="your-message" cols="30" rows="10" placeholder="Your message" required></textarea>
                    <label className="text-secondary">Your message</label>
                </div>
                <button className="btn btn-dark rounded-pill" type="submit">
                    <FontAwesomeIcon icon={faPaperPlane} /> Submit
                </button>
            </form>

            {
                !formMsg &&

                <p className="mt-3 text-success fw-bold">Thank you for your message.</p>
            }

        </div>

    );
};

export default MyForm;
