import { SiTailwindcss, SiReact, SiNextdotjs, SiVite, SiFirebase, SiRedux, SiMysql, SiPrisma, SiPostgresql } from "react-icons/si";

export const cardContent = [
  {
    id: 0,
    title: "Malit",
    description: "Malit is a restaurant management tool created by a group of friends who are passionate about programming.",
    imageUrl: "/malitmock.jpg",
    link: 'https://www.malit.com.mx',
    skills: [
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <SiTailwindcss size="40" />
      },
      {
        icon: <SiVite size="40" />
      },
      {
        icon: <SiFirebase size="40" />
      }
    ]
  },
  {
    id: 1,
    title: "Firebase Auth",
    description: "A simple application of authentication with firebase google",
    imageUrl: "/firebaseApp.jpg",
    link: 'https://fir-app-a2ec9.web.app',
    skills: [
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <SiVite size="40" />
      },
      {
        icon: <SiTailwindcss size="40" />
      },
      {
        icon: <SiFirebase size="40" />
      },
    ]
  },
  {
    id: 2,
    title: "Redux App",
    description: "A aplication using redux",
    imageUrl: "/redux-toolkit.jpg",
    link: 'https://redux-rtc-crud.vercel.app',
    skills: [
      {
        icon: <SiVite size="40" />
      },
      {
        icon: <SiReact size='40'/>
      },
      {
        icon: <SiTailwindcss size="40" />
      },
      {
        icon: <SiRedux size="40" />
      },
    ]
  },
  {
    id: 3,
    title: "NextCRUD App",
    description: "This is a simple application CRUD, Create, Read, Update, Delete tasks using SQLite and PostgreSQL, Nextjs, Prisma and Tailwindcss",
    imageUrl: "/nextjsprisma.jpg",
    link: 'https://nextjs-prisma-crud-ewxun8nyb-vaancillo.vercel.app',
    skills: [
      {
        icon: <SiNextdotjs size="40" />
      },
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <SiTailwindcss size="40" />
      },
      {
        icon: <SiMysql size="40" />
      },
      {
        icon: <SiPrisma size='40'/>
      },
      {
        icon: <SiPostgresql size='40'/>
      }
    ]
  }
];
