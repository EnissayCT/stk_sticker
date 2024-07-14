import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {  customer1, customer2, card4, card1, card2, card3, cardpack } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: card1,
        bigShoe: card1,
    },
    {
        thumbnail: card2,
        bigShoe: card2,
    },
    {
        thumbnail: card3,
        bigShoe: card3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Models' },
    { value: '500+', label: 'Clients' },
    { value: '99%', label: 'Satisfaction' },
];

export const products = [
    {
        imgURL: card1,
        rating: 4.9,
        name: "SpongeBob dollar",
        price: "50 DHs",
    },
    {
        imgURL: card2,
        rating: 5,
        name: "Porche 911",
        price: "100 DHs",
    },
    {
        imgURL: card3,
        rating: 4.5,
        name: "HxH card",
        price: "50 Dhs",
    },
    {
        imgURL: card4,
        rating: 5,
        name: "Cowboy Bebop",
        price: "99 DHs",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Categories",
        links: [
            { name: "Men", link: "/" },
            { name: "Women", link: "/" },
            { name: "Kids", link: "/" },
            { name: "Anime", link: "/" },
            { name: "Gaming", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "yassine@stk.com", link: "mailto:yassine@stk.com" },
            { name: "+212625297293", link: "tel:+212625297293" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
