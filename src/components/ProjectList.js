import Peach from "../resources/peach.png";
import Bruincreates from "../resources/bruincreates.png";
import Github from "../resources/github.png"
import Email from "../resources/email.png"
import LinkedIn from "../resources/linkedin.png"

export const projectList = [
    {
        id: 0,
        name: "Super Peach Sisters",
        content: ["Built replica of Super Princess Peach Video Game in C++", "Object Oriented Programming with Encapsulation, Polymorphism and Multi-Level Inheritance"],
        image: Peach,
        github: "https://github.com/ryean0/Super-Peach-Sisters"
    },
    {
        id: 1,
        name: "Bruin Creates",
        content: ["E-commerce marketplace for UCLA students to buy and sell pre-owned items", "Frontend Project Lead"],
        image: Bruincreates,
        github: "http://github.com/ryean0"

    },
    {
        id: 2,
        name: "Bruin Creates",
        content: ["E-commerce marketplace for UCLA students to buy and sell pre-owned items", "Frontend Project Lead"],
        image: Bruincreates,
        github: "http://github.com/ryean0"

    }
]

export const contactList = [
    {
        id: 0,
        type: "github",
        link: "http://github.com/ryean0",
        image: Github
    },
    {
        id: 1,
        type: "email",
        link: "ryanphua1@gmail.com",
        image: Email
    },
    {
        id: 2,
        type: "linkedin",
        link: "https://www.linkedin.com/in/ryan-phua-3080311b3/",
        image: LinkedIn
    }
]