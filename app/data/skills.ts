export interface Skill {
  id: number;
  name: string;
  icon: string;
  color: string;
  value: number;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "SketchUp",
    icon: "/icons/sketchup.png",
    color: "#005F9E",
    value: 97,
  },
  {
    id: 2,
    name: "AutoCad 2d",
    icon: "/icons/AutoCad.png",
    color: "#DE472F",
    value: 95,
  },
  {
    id: 3,
    name: "D5",
    icon: "/icons/d5.png",
    color: "#764BA2",
    value: 97,
  },
  {
    id: 4,
    name: "3d Max",
    icon: "/icons/3dmax.png",
    color: "#36687F",
    value: 80,
  },

  {
    id: 5,
    name: "Photoshop",
    icon: "/icons/photoshop.png",
    color: "#001E36",
    value: 90,
  },
  {
    id: 6,
    name: "Lumion",
    icon: "/icons/lumion.png",
    color: "#40758B",
    value: 90,
  },
  {
    id: 7,
    name: "Blender",
    icon: "/icons/blender.png",
    color: "#E87D0D",
    value: 70,
  },

  {
    id: 8,
    name: "Illustrator",
    icon: "/icons/illustrator.png",
    color: "#FF9A00",
    value: 65,
  },
  {
    id: 9,
    name: "Vray",
    icon: "/icons/vray.png",
    color: "#5599FF",
    value: 95,
  },
  {
    id: 10,
    name: "Fusion 360",
    icon: "/icons/fusion.png",
    color: "#FAA21B",
    value: 65,
  },
  {
    id: 11,
    name: "MS Office",
    icon: "/icons/ms_office.png",
    color: "#D83B01",
    value: 85,
  },
  {
    id: 12,
    name: "Enscape",
    icon: "/icons/enscape.png",
    color: "#F59C1B",
    value: 85,
  },
];
