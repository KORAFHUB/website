import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star,manage,scale,app  } from "../assets";
import { gql } from "@apollo/client";


export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "#features",
    title: "Features",
  },
  {
    id: "/contact",
    title: "Contact",
  },
  {
    id: "/blog",
    title: "Blog",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "High-quality, professional results, improved efficiency and productivity of digital systems.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "Our expertise spans across businesses of all sizes. We tailor our services to meet the unique needs of each client.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Cutting-edge technology",
    content:
      "With the blend of the latest technology, innovation, and experience, Korafhub always endeavor to deliver a masterpiece in terms of mobile app development.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Privacy Policy",
        link: "/privacy",
      },
      {
        name: "Explore",
        link: "#",
      },
      {
        name: "Terms & Services",
        link: "/Terms",
      },
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Newsletters",
        link: "/newletter",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://twitter.com/korafhub",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/korafhub/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];





export const blogvalue = [
  {
    id: "1",
    content:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    name: "David Okoroafor",
    bio: "Founder @korafhub",
    title: "Boost your conversion rate",
    img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    tag: "Welcome",
    date: "Mar 16, 2020"
  },
 
];



export const postDocument = gql`
query MyQuery($id: ID!) {
  post(where: {id: $id}) {
    content {
      html
    }
    date
    title
    author {
      name
      title
      picture {
        url
      }
    }
    coverImage {
      url
    }
  }
}

`


export const blogdocument = gql`
{
  posts {
    excerpt
    id
    title
    tags
    date
    coverImage {
      url
    }
    content {
      html
    }
    author {
      name
      title
      picture {
        url
      }
    }
  }
}
`