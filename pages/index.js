"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = __importDefault(require("next/head"));
const hero_1 = __importDefault(require("../components/hero"));
const navbar_1 = __importDefault(require("../components/navbar"));
const sectionTitle_1 = __importDefault(require("../components/sectionTitle"));
const data_1 = require("../components/data");
const video_1 = __importDefault(require("../components/video"));
const benefits_1 = __importDefault(require("../components/benefits"));
const footer_1 = __importDefault(require("../components/footer"));
const testimonials_1 = __importDefault(require("../components/testimonials"));
const cta_1 = __importDefault(require("../components/cta"));
const faq_1 = __importDefault(require("../components/faq"));
const popupWidget_1 = __importDefault(require("../components/popupWidget"));
const Home = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1.default, null,
        React.createElement("title", null, "Nextly - Free Nextjs & TailwindCSS Landing Page Template"),
        React.createElement("meta", { name: "description", content: "Nextly is a free landing page template built with next.js & Tailwind CSS" }),
        React.createElement("link", { rel: "icon", href: "/favicon.ico" })),
        React.createElement(navbar_1.default, null),
        React.createElement(hero_1.default, null),
        React.createElement(sectionTitle_1.default, { pretitle: "Nextly Benefits", title: " Why should you use this landing page" }, "Nextly is a free landing page & marketing website template for startups and indie projects. Its built with Next.js & TailwindCSS. And its completely open-source."),
        React.createElement(benefits_1.default, { data: data_1.benefitOne }),
        React.createElement(benefits_1.default, { imgPos: "right", data: data_1.benefitTwo }),
        React.createElement(sectionTitle_1.default, { pretitle: "Watch a video", title: "Learn how to fullfil your needs" }, "This section is to highlight a promo or demo video of your product. Analysts says a landing page with video has 3% more conversion rate. So, don't forget to add one. Just like this."),
        React.createElement(video_1.default, null),
        React.createElement(sectionTitle_1.default, { pretitle: "Testimonials", title: "Here's what our customers said" }, "Testimonails is a great way to increase the brand trust and awareness. Use this section to highlight your popular customers."),
        React.createElement(testimonials_1.default, null),
        React.createElement(sectionTitle_1.default, { pretitle: "FAQ", title: "Frequently Asked Questions" }, "Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests."),
        React.createElement(faq_1.default, null),
        React.createElement(cta_1.default, null),
        React.createElement(footer_1.default, null),
        React.createElement(popupWidget_1.default, null)));
};
exports.default = Home;
