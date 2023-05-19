import sliderImg from "../images/slide.jpg";
import tableImg from "../images/table.jpg";
import accordionImg from "../images/accordion.jpg";
import formImg from "../images/form.jpg";
import heroImg from "../images/hero.jpg";
import orderImg from "../images/orderlist.jpg";
import cardImg from "../images/card.jpg";
import allImg from "../images/together.jpg";

const COMPONENTS = [
    {
      title: "Slider",
      path: "/gallery",
      info: "Innovative & animated ways to showcase more than one image, video, or design resources on your website",
      imagePath: sliderImg,
      btnText: "Explore Slider",
      // "src": "../images/slider-fail.png",
    },
    {
      title: "Accordion",
      path: "/faq",
      info: "Used to generate vertically stacked content in a page. It is intended to save vertical space by hiding content, reducing scrolling.",
      imagePath: accordionImg,
      btnText: "Explore Accordion",
    },
    {
      title: "Form",
      path: "/contact",
      info: "It collects user data and serves as the display or user interface within the system for that particular user.",
      imagePath: formImg,
      btnText: "Explore Form",
    },
    {
      title: "Table",
      path: "/table",
      info: "Data component that you can add to pages within your app for users to track, update, and automate your data at a glance.",
      imagePath: tableImg,
      btnText: "Explore Table",
    },
    {
      title: "Hero",
      path: "/hero",
      info: "Flexible component that can combine images, colours, text, links and CTAs for home page banners or promotional content.",
      imagePath: heroImg,
      btnText: "Explore Hero",
    },
    {
      title: "Ordered List",
      path: "/orderlist",
      info: "Organize and present information in a specific order or to present information in a structured sequence and sequential manner.",
      imagePath: orderImg,
      btnText: "Explore OrderList",
    },
    {
      title: "Card",
      path: "/cards",
      info: "Small information card or a mini digital container that holds related content or data in a visually appealing way.",
      imagePath: cardImg,
      btnText: "Explore Card",
    },
    {
      title: "All-In-One",
      path: "/all-at-glance",
      info: "Combining all the components into a single page for your better understanding and knowledge along with accessibility checkpoints",
      imagePath: allImg,
      btnText: "Explore All-In-One",
    },
];

export default COMPONENTS;