// Blog section constant
const articles = [
  {
    id: 1,
    date: "June 04, 2024",
    title: "Transforming Industries And Changing Lives With AI",
    imageUrl: "/blog/blogimage1.png",
    link: "/article1",
  },
  {
    id: 2,
    date: "June 04, 2024",
    title: "How AI is Changing The Face Of Digital Marketing",
    imageUrl: "/blog/blogimage2.png",
    link: "/article2",
  },
  {
    id: 3,
    date: "June 04, 2024",
    title: "Exploring The Ethics Of AI And Robotics In Society",
    imageUrl: "/blog/blogimage3.png",
    link: "/article3",
  },
  {
    id: 4,
    date: "June 04, 2024",
    title: "Exploring The Ethics Of AI And Robotics In Society",
    imageUrl: "/blog/blogimage4.png",
    link: "/article4",
  },
  {
    id: 5,
    date: "June 04, 2024",
    title: "Exploring The Ethics Of AI And Robotics In Society",
    imageUrl: "/blog/blogimage5.png",
    link: "/article5",
  },
  {
    id: 6,
    date: "June 04, 2024",
    title: "Exploring The Ethics Of AI And Robotics In Society",
    imageUrl: "/blog/blogimage6.png",
    link: "/article6",
  },
];

// Contact section constants

const ContactUs = [
  {
    id: 1,
    imageUrl: "/contact/phone.png",
    title: "Phone",
    details: "+44 7456 393704",
  },
  {
    id: 2,
    imageUrl: "/contact/location.png",
    title: "Address",
    details:
      "Office 8785 182-184 High Street North, East Ham, London, United Kingdom, E6 2JA",
  },
  {
    id: 3,
    imageUrl: "/contact/email.png",
    title: "Email",
    details: "info@robx.ai",
    link: "mailto:info@robx.ai",
  },
  {
    id: 4,
    imageUrl: "/contact/phone.png",
    title: "Follow Us",
    details: [
      {
        name: "linkedin/robx.ai",
        url: "https://www.linkedin.com/company/robx-ai",
      },
      { name: "instagram/robx.ai", url: "https://www.instagram.com/robx.ai" },
    ],
  },
];
//Post Data
const postData = [
  {
    title1: "Transforming Industries and Changing Lives With AI.",
    date: "June 04, 2024",
    image: "/singleblog/AI-tech.png",
    text: "Emphasizes the profound influence of artificial intelligence across multiple fields. AI enhances efficiency, drives innovation, and enables automation, revolutionizing industries like healthcare, finance, and manufacturing. By offering personalized solutions and improving decision-making, AI empowers individuals and businesses, paving the way for a more connected and efficient world, while creating new opportunities and elevating the quality of life.",
    quote:
      "The purpose of the patent system is to foster and encourage new inventions of usefulness.",
    vrImage: "/singleblog/process-transform.png",
    title: "Top Transforming Process",
    paragraphs: [
      "We are a team of the our dedicated patent professionals, united by our commitment tour excellence patent protection. With years of collective experience across diverse industries team of this dedicated patent professionals, united by our",
      "Expertise In Patent Protection",
      "Commitment To Excellence",
      "Collaborative Partnership",
      "We are a team of the dedicated patent professionals, united by our commitment tour excellence patent protection. With years of collective experience across diverse industries.",
    ],
  },
];
// Latest Post
const latestPost = [
  {
    id: 1,
    imageUrl: "/singleblog/post-1.png",
    title: "How AI Is Changing The Face of Digital Marketing.",
    date: "June 04, 2024",
  },
  {
    id: 2,
    imageUrl: "/singleblog/post-2.png",
    title: "Shaping the Future of Learning and Teaching",
    date: "June 10, 2024",
  },
  {
    id: 3,
    imageUrl: "/singleblog/post-3.png",
    title: "The Rise of the Internet of Things, Connecting Our World",
    date: "July 07, 2024",
  },
];

const popularTags = [
  {
    id: 1,
    tag: "Coding AI",
  },
  {
    id: 2,
    tag: "Digital AI",
  },
  {
    id: 3,
    tag: "Future AI",
  },
  {
    id: 4,
    tag: "Tech Blog",
  },
  {
    id: 5,
    tag: "Tech Innovate",
  },
];

const servicesData = [
  {
    id: 1,
    imageUrl: "/services/logo.png",
    title: "Web Development",
    description:
      "Building and maintaining websites and web applications, focusing on front-end and back-end technologies.",
  },
  {
    id: 2,
    imageUrl: "/services/logo.png",
    title: "Computer Vision",
    description: " Analyzes and interprets visual data from images or videos.",
  },
  {
    id: 3,
    imageUrl: "/services/logo.png",
    title: "Recommendation Systems",
    description: " Suggests products or content based on user preferences.",
  },
  {
    id: 4,
    imageUrl: "/services/logo.png",
    title: "Chatbots",
    description:
      "Simulates human conversation for customer support or information",
  },
  {
    id: 5,
    imageUrl: "/services/logo.png",
    title: "Mobile Development",
    description:
      "Creating applications for mobile devices like smartphones and tablets, involving coding and design.",
  },
  {
    id: 6,
    imageUrl: "/services/logo.png",
    title: "Generative AI (GenAI)",
    description:
      "Creating new content or data, such as text, images, or audio, using AI models.",
  },
  {
    id: 7,
    imageUrl: "/services/logo.png",
    title: "Robotics",
    description:
      "Developing intelligent robots capable of performing tasks autonomously.",
  },
  {
    id: 8,
    imageUrl: "/services/logo.png",
    title: "Machine Learning ",
    description:
      "Algorithms that learn patterns from data for decision-making.",
  },
  {
    id: 9,
    imageUrl: "/services/logo.png",
    title: "Deep Learning ",
    description:
      "Neural networks with multiple layers for complex pattern recognition.",
  },
  {
    id: 10,
    imageUrl: "/services/logo.png",
    title: "Data Analysis",
    description:
      "Interpreting and analyzing data to uncover insights and patterns.",
  },
  // {
  //   id: 11,
  //   imageUrl: "/services/logo.png",
  //   title: "Natural Language Processing",
  //   description:
  //     "we specialize in creating bespoke AI solutions tailored to your specific business.",
  // },
];

// Our Team section

const ourTeam = [
  {
    id: 1,
    imageUrl: "/team/img1.png",
    name: "Dr. Atif Ali",
    designation: "CEO",
  },
  {
    id: 2,
    imageUrl: "/team/img2.png",
    name: "Ali Raza",
    designation: "CTO",
  },
  {
    id: 3,
    imageUrl: "/team/img3.png",
    name: "Taimor Ali Khan",
    designation: "HR Manager",
  },
  {
    id: 4,
    imageUrl: "/team/img4.png",
    name: "Daniyal Ahmed",
    designation: "Full Stack Developer",
  },
  {
    id: 5,
    imageUrl: "/team/img5.png",
    name: "Muhammad Bilal",
    designation: "Graphic Designer",
  },
  {
    id: 6,
    imageUrl: "/team/img6.png",
    name: "Usman Qamar",
    designation: "Front End Developer",
  },
  {
    id: 7,
    imageUrl: "/team/img7.png",
    name: "Abdul Basit",
    designation: "Front End Developer",
  },
  {
    id: 8,
    imageUrl: "/team/img8.png",
    name: "Shehbaz Ali",
    designation: "Front End Developer",
  },
];

const homeFAQs = [
  {
    id: 1,
    question: "What types of AI solutions does ROBX.AI offer?",
    answer:
      "ROBX.AI offers a range of AI solutions, including natural language processing (NLP), machine learning (ML), computer vision, robotic process automation (RPA), speech recognition, and AI-powered analytics.",
  },
  {
    id: 2,
    question: "How can AI benefit my business?",
    answer:
      "AI can streamline operations, improve decision-making, enhance customer experiences, and provide predictive insights. Whether you're looking to automate repetitive tasks, personalize customer interactions, or gain deeper insights from data, AI can help achieve these goals.",
  },
  {
    id: 3,
    question: "What industries does ROBX.AI serve?",
    answer:
      "ROBX.AI serves a variety of industries, including healthcare, retail, finance, manufacturing, and more. Our solutions are tailored to meet the unique needs and challenges of each sector.",
  },
  {
    id: 4,
    question: "Do you offer custom AI solutions?",
    answer:
      "Yes, we specialize in creating custom AI solutions tailored to your business's specific needs. Our team works closely with you to understand your requirements and develop AI models and systems that align with your goals.",
  },
  {
    id: 5,
    question: "How do I get started with implementing AI in my business?",
    answer:
      "Getting started with AI involves understanding your business needs and identifying the right AI solutions. You can reach out to our team for a consultation, where we'll discuss your objectives and how our AI services can help you achieve them. We guide you through the entire process, from planning to deployment and ongoing support.",
  },
];
// services section Faqs
const servicesFAQs = [
  {
    id: 1,
    question:
      "What is the difference between Machine Learning and Deep Learning?",
    answer:
      "Machine Learning involves algorithms that learn patterns from data, while Deep Learning is a subset of Machine Learning that uses neural networks with multiple layers for more complex pattern recognition.",
  },
  {
    id: 2,
    question: "How does Data Engineering differ from Data Analysis?",
    answer:
      "Data Engineering focuses on designing and building systems for data collection, storage, and processing, whereas Data Analysis involves interpreting and analyzing data to extract insights.",
  },
  {
    id: 3,
    question: "What are the key applications of Generative AI (GenAI)?",
    answer:
      "Generative AI is used in content creation, such as generating text, images, music, and even code, as well as in applications like chatbots, art creation, and synthetic data generation.",
  },
  {
    id: 4,
    question: "What skills are essential for Mobile Development?",
    answer:
      "Essential skills for Mobile Development include proficiency in programming languages like Swift, Kotlin, or Java, understanding of mobile UI/UX design, and knowledge of mobile platforms like iOS and Android.",
  },
  {
    id: 5,
    question: "What is involved in Web Development?",
    answer:
      "Web Development involves building and maintaining websites or web applications, including front-end development (user interface), back-end development (server-side logic), and ensuring responsive design and functionality.",
  },
];

const projectImages = [
  { src: "/project/project1.png", alt: "project 1" },
  { src: "/project/project2.png", alt: "project 2" },
  { src: "/project/project3.webp", alt: "project 3" },
  { src: "/project/project4.png", alt: "project 4" },
  { src: "/project/project5.png", alt: "project 5" },
  { src: "/project/project6.png", alt: "project 6" },
  { src: "/project/project7.webp", alt: "project 7" },
  { src: "/project/project8.webp", alt: "project 8" },
]; // Project Images

export {
  articles,
  ContactUs,
  postData,
  popularTags,
  latestPost,
  servicesData,
  ourTeam,
  homeFAQs,
  servicesFAQs,
  projectImages,
};
