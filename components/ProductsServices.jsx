import React, { useState } from 'react'; 
import FeedbackForm from './FeedbackForm';

const ProductsAndServices = () => {
    const [isFeedbackVisible, setFeedbackVisible] = useState(false);
const toggleFeedbackForm = () => {
        setFeedbackVisible((prev) => !prev);
    };
const scrollToFeedback = () => {
        const feedbackForm = document.getElementById("feedback-form");
        feedbackForm.scrollIntoView({ behavior: 'smooth' });
    };

    const products = [
        {
            title: 'Custom Software Development',
            description: 'Tailored software solutions that address specific business challenges and are built to your requirements.',
        },
        {
            title: 'Mobile Applications',
            description: 'Robust mobile apps for iOS and Android, designed to provide users with a seamless experience.',
        },
        {
            title: 'SaaS Solutions',
            description: 'Cloud-based applications offering subscription pricing and continuous updates.',
        },
        {
            title: 'E-commerce Platforms',
            description: 'Scalable e-commerce solutions to enhance your retail presence online.',
        },
        {
            title: 'AI-Powered Solutions',
            description: 'Implementing AI to optimize processes and enhance user experience.',
        },
        {
            title: 'API Development and Integration',
            description: 'Creating and integrating APIs for seamless connectivity across platforms.',
        },
        {
            title: 'Cybersecurity Products',
            description: 'Comprehensive security solutions to protect your data and infrastructure.',
        },
        {
            title: 'IoT Solutions',
            description: 'Innovative IoT applications for both personal and industrial use cases.'
        }
    ];

    const services = [
        {
            title: 'Consulting Services',
            description: 'Strategic advice to help businesses identify technology needs and plan for digital transformation.',
        },
        {
            title: 'Cloud Solutions',
            description: 'Migration and management of cloud services to enhance business operations.',
        },
        {
            title: 'UI/UX Design Services',
            description: 'Creating user-friendly interfaces and experiences tailored to your audience.',
        },
        {
            title: 'Quality Assurance and Testing',
            description: 'Thorough testing to ensure the quality and reliability of software products.',
        },
        {
            title: 'Maintenance and Support',
            description: 'Ongoing support and maintenance to keep your software running smoothly.',
        },
        {
            title: 'Data Analytics and Business Intelligence',
            description: 'Utilizing data to create actionable insights for informed decision-making.',
        },
        {
            title: 'Training and Workshops',
            description: 'Educational programs to upskill teams on various technologies and best practices.',
        }
    ];

    return (
        <div className="container mx-auto p-6">
            <div className="fixed right-0 top-1/3 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-l shadow-lg hover:bg-green-600 transition duration-200">
                <button onClick={() => { toggleFeedbackForm(); scrollToFeedback(); }} className="flex flex-col items-center">
                    <span className="text-sm">Feedback</span>
                </button>
            </div>
         {isFeedbackVisible && (
                <div id="feedback-form" className="fixed right-16 top-1/3 bg-white shadow-lg p-4 rounded-lg transition-all duration-300">
                    <FeedbackForm />
                </div>
            )}

            <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Products and Services</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 border-l-4 border-blue-600 hover:bg-blue-50 cursor-pointer">
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{product.title}</h3>
                            <p className="text-gray-700">{product.description}</p>
                        </div>
                     
                    ))}
                    </div>
                </section>
    
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 border-l-4 border-green-600 hover:bg-green-50 cursor-pointer">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                                <p className="text-gray-700">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }
    
    export default ProductsAndServices;
    