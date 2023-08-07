//Import Images
import thegolfer from "./img/golfer-small.png";
import thehockeyplayer from "./img/hockey-small.png";
import theracer from "./img/racer-small.png";
import thegolfer2 from "./img/golfer2.png";
import thehockeyplayer2 from "./img/hockey2.png";
import theracer2 from "./img/racer2.png";

export const MovieState = () => {
  return [
    {
      title: "Tiger Woods",
      mainImg: thegolfer,
      secondaryImg: thegolfer2,
      url: "/work/tiger-woods",
      awards: [
        {
          title: "Background and Family",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Professional Career",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Endorsements and Achievements",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Alexander Ovechkin",
      mainImg: thehockeyplayer,
      url: "/work/alexander-ovechkin",
      secondaryImg: thehockeyplayer2,
      awards: [
        {
          title: "Background and Family",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Professional Career",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Endorsements and Achievements",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Lewis Hamilton",
      mainImg: theracer,
      url: "/work/lewis-hamilton",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Background and Family",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Profesional Career",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Endorsements and Achievements",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};