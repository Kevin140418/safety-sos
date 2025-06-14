import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Feedback() {
    const navigate = useNavigate();
    const [data, setData] = React.useState({
        userName: "",
        rating: "1",
        review: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/addFeedback", data);
            if (response.data.success) {
                alert(response.data.message);
                navigate("/");
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    console.log(data);

    return (
        <>
            <Header />
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">
                        Feedback Us
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <Link to="/Home" style={{ textDecoration: 'none' }}>Home</Link>
                            </li>
                            <li className="breadcrumb-item" aria-current="page">
                                Feedback
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Fact Start */}
            {/* Fact End */}
            {/* Feedback Start */}
            <div className="container-fluid py-5 mt-5">
                <div className="container py-5">
                    <div
                        className="text-center mx-auto pb-5 wow fadeIn"
                        data-wow-delay=".3s"
                        style={{ maxWidth: 600 }}
                    >
                        <h5 className="text-primary">Get In Touch</h5>
                        <h1 className="mb-3">Feedback us for more saftey</h1>
                    </div>
                    <div className="contact-detail position-relative p-5">
                        <div className="row g-5 mb-5 justify-content-center">
                            <div
                                className="col-xl-4 col-lg-6 wow fadeIn"
                                data-wow-delay=".3s"
                            >
                                <div className="d-flex bg-light p-3 rounded">
                                    <div
                                        className="flex-shrink-0 btn-square bg-secondary rounded-circle"
                                        style={{ width: 64, height: 64 }}
                                    >
                                        <i className="fas fa-map-marker-alt text-white" />
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="text-primary">Address</h4>
                                        <Link
                                            to="https://goo.gl/maps/Zd4BCynmTb98ivUJ6"
                                            className="h5"
                                        >
                                            Navrangpura, Ahmedabad.
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-4 col-lg-6 wow fadeIn"
                                data-wow-delay=".5s"
                            >
                                <div className="d-flex bg-light p-3 rounded">
                                    <div
                                        className="flex-shrink-0 btn-square bg-secondary rounded-circle"
                                        style={{ width: 64, height: 64 }}
                                    >
                                        <i className="fa fa-phone text-white" />
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="text-primary">Call Us</h4>
                                        <Link className="h5" to="tel:+0123456789">
                                            +91 9737463550
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-4 col-lg-6 wow fadeIn"
                                data-wow-delay=".7s"
                            >
                                <div className="d-flex bg-light p-3 rounded">
                                    <div
                                        className="flex-shrink-0 btn-square bg-secondary rounded-circle"
                                        style={{ width: 64, height: 64 }}
                                    >
                                        <i className="fa fa-envelope text-white" />
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="text-primary">Email Us</h4>
                                        <Link className="h5" to="safetyfirstsos1@gmail.com">
                                        safetyfirstsos1@gmail.com
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                                <div className="p-5 h-100 rounded contact-map">
                                    <iframe
                                        className="rounded w-100 h-100"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14112.673034713187!2d72.5613104!3d23.03883135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f521640d4b%3A0x6853ee97a9a2996b!2sNavrangpura%2C%20Ahmedabad%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1742117467394!5m2!1sen!2sin"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        title="aaa"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                                <form className="p-5 rounded Feedback-form" onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            className="form-control border-0 py-3"
                                            placeholder="Your Name"
                                            name="userName"
                                            value={data.userName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-control border-0 py-3 mb-4">
                                        Rating <span></span>
                                        <output id="range-value">
                                            {data.rating}
                                        </output>
                                        <input
                                            type="range"
                                            min={1}
                                            max={5}
                                            name="rating"
                                            step={0.5}
                                            defaultValue={1}
                                            onChange={handleChange}
                                            className="form-range border-0 py-3"
                                            placeholder="Project"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <textarea
                                            className="w-100 form-control border-0 py-3"
                                            rows={6}
                                            cols={10}
                                            name="review"
                                            onChange={handleChange}
                                            value={data.review}
                                            placeholder="Message"
                                        />
                                    </div>
                                    <div className="text-start">
                                        <button
                                            className="btn bg-primary text-white py-3 px-5"
                                            type="submit"
                                        >
                                            Send Feedback
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Feedback;
