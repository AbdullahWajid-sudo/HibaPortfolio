export interface Projects {
  id: number;
  title: string;
  technologies: string[];
  image: string;
  link: string;
  gallery?: string[];
}

export const projects: Projects[] = [
  {
    id: 1,
    title: "Halo Residence",
    technologies: ["AutoCad", "SketchUp", "D5"],
    image: "/projects/holo.jpeg",
    link: "https://abdullahwajid-sudo.github.io/QuizApp/",
    gallery: [
      "/projects/Halo/0.png",
      "/projects/Halo/1.png",
      "/projects/Halo/2.png",
      "/projects/Halo/3.png",
      "/projects/Halo/4.png",
      "/projects/Halo/5.png",
      "/projects/Halo/6.png",
      "/projects/Halo/7.png",
      "/projects/Halo/8.png",
      "/projects/Halo/9.png",
      "/projects/Halo/10.png",
      "/projects/Halo/11.png",
      "/projects/Halo/12.png",
      "/projects/Halo/13.png",
      "/projects/Halo/14.png",
      "/projects/Halo/15.png",
      "/projects/Halo/16.png",
      "/projects/Halo/17.png",
      "/projects/Halo/18.png",
      "/projects/Halo/19.png",
      "/projects/Halo/20.png",
      "/projects/Halo/21.png",
      "/projects/Halo/22.png",
      "/projects/Halo/23.png",
      "/projects/Halo/24.png",
      "/projects/Halo/25.png",
      "/projects/Halo/26.png",
    ],
  },
  {
    id: 2,
    title: "Manuscript Museum",
    technologies: ["SketchUp", "Blender", "D5", "AutoCad"],
    image: "/projects/whisper.jpeg",
    link: "https://to-do-app-phi-ten-47.vercel.app/",
    gallery: [
      "/projects/thesis/12.png",
      "/projects/thesis/13.png",
      "/projects/thesis/14.png",
      "/projects/thesis/1.png",
      "/projects/thesis/2.png",
      "/projects/thesis/3.png",
      "/projects/thesis/4.png",
      "/projects/thesis/5.png",
      "/projects/thesis/6.png",
      "/projects/thesis/7.png",
      "/projects/thesis/8.png",
      "/projects/thesis/9.png",
      "/projects/thesis/10.png",
      "/projects/thesis/11.png",
      "/projects/thesis/cafe.png",
    ],
  },
  {
    id: 3,
    title: "Biomorphic Heights",
    technologies: ["SketchUp", "AutoCad", "Enscape"],
    image: "/projects/bio.jpeg",
    link: "https://socialmedia.abdullahwajid.com",
    gallery: [
      "/projects/LandScape/1.png",
      "/projects/LandScape/2.png",
      "/projects/LandScape/3.png",
      "/projects/LandScape/4.png",
      "/projects/LandScape/5.png",
    ],
  },
  {
    id: 4,
    title: "DAC Executive Redesign",
    technologies: ["AutoCad", "SketchUp", "D5"],
    image: "/projects/house.jpeg",
    link: "https://socialmedia.abdullahwajid.com",
    gallery: [
      "/projects/Office/1.png",
      "/projects/Office/2.png",
      "/projects/Office/3.png",
    ],
  },
  {
    id: 5,
    title: "Courtyard of Whispering Arches",
    technologies: ["AutoCad", "SketchUp", "D5"],
    image: "/projects/mugal.jpeg",
    link: "https://socialmedia.abdullahwajid.com",
    gallery: [
      "/projects/Office/1.png",
      "/projects/Office/2.png",
      "/projects/Office/3.png",
    ],
  },
];
