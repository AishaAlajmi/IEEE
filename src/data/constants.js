import Img1 from '../images/Rectangle 11.png';
import Img2 from '../images/Rectangle 10.png';
import MEDIA from '../images/Ellipse 15.png';
import PUBLICITY from '../images/Ellipse 13.png';
import EXECUTION from '../images/Ellipse 11.png';
import con from '../images/Group 29.png';
import cre from '../images/Group 30.png';
import Collaboration from '../images/Group 31.png';
import soci from '../images/Group 32.png';

export const Bio = {
  name: "Welcome to IEEE Club!",
  description:
    "The world's largest professional organization promotes innovation and technological excellence for humanity. We empower students in technical fields and embrace modern concepts for effective technological advancement and societal progress.",
};
// Core values of the organization
export const CoreValuesList = [
  { id: 1, title: "Continuous Evolution", image: con },
  { id: 2, title: "Creativity", image: cre },
  { id: 3, title: "Collaboration", image: Collaboration },
  { id: 4, title: "Social Responsibility", image: soci },
];

export const Gallary = [
  {
    id: 9,
    image: Img1,

  },
  {
    id: 4,
    image:
      Img2
  },
  {
    id: 2,
    image:
      Img1
  },
  {
    id: 1,
    image: Img2,

  },
];export const Committees = [
  {
    id: 9,
    title: "SOCIAL MEDIA AND WEBSITE",
    description:
      "This committee is responsible for managing the club's online presence, including social media accounts and the official website. They ensure timely updates, engaging content, and a professional online image. Members collaborate on campaigns, design visuals, write posts, and analyze engagement metrics to improve outreach and strengthen the club's connection with its audience.",
    image: MEDIA,
  },
  {
    id: 4,
    title: "PUBLICITY",
    description:
      "The Publicity committee handles all promotional efforts for the club. From designing posters and banners to planning creative marketing campaigns, this team ensures the club's events and initiatives reach the widest audience possible. They specialize in creating compelling visuals, coordinating with other committees, and utilizing both traditional and digital platforms to maximize visibility.",
    image: PUBLICITY,
  },
  {
    id: 2,
    title: "EXECUTION AND FINANCE",
    description:
      "This committee oversees the practical implementation of events and manages the club’s financial resources. They ensure every event is well-organized, all materials and logistics are in place, and budgets are adhered to. Members are responsible for fundraising, expense tracking, and finding innovative ways to optimize resources while ensuring the success of all activities.",
    image: EXECUTION,
  },
  {
    id: 1,
    title: "SOCIAL MEDIA AND WEBSITE",
    description:
      "The Social Media and Website team works tirelessly to enhance the digital footprint of the club. They design user-friendly website interfaces, share impactful stories, and post updates about ongoing projects and achievements. Their efforts directly contribute to maintaining the club's reputation as a forward-thinking, innovative organization.",
    image: PUBLICITY,
  },
];

export const projects = [
  {
    id: 9,
    title: "IEEE Day Celebration",
    description:
      "The IEEE Day Celebration focuses on honoring innovation and technological advancements. It includes workshops, talks by industry professionals, and interactive activities aimed at inspiring creativity and collaboration among participants. The event showcases the latest projects and achievements of the club, fostering a sense of pride and motivation.",
    image: Img1,
  },
  {
    id: 4,
    title: "KAUST Trip",
    description:
      "The KAUST Trip offers participants an exclusive opportunity to explore one of the leading research universities in the world. Attendees gain insights into cutting-edge research, visit state-of-the-art labs, and network with experts in various fields of technology and science. The trip is designed to ignite curiosity and encourage academic growth.",
    image: Img2,
  },
  {
    id: 2,
    title: "Engineering Day 2024",
    description:
      "Engineering Day 2024 celebrates the ingenuity and creativity of engineering students. The event includes project exhibitions, technical competitions, and inspiring keynote speeches. Participants have the chance to showcase their work, collaborate with peers, and learn from industry leaders, making it an unforgettable experience.",
    image: Img1,
  },
  {
    id: 1,
    title: "IEEE Day Celebration",
    description:
      "This annual celebration highlights the impact of IEEE in advancing technology for humanity. The event features panel discussions, networking sessions, and hands-on workshops, allowing attendees to engage with like-minded individuals and gain inspiration for future innovations. It's a platform to honor technological excellence and collaboration.",
    image: Img2,
  },
];
