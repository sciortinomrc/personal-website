import whatcanicook_scr from "../images/screenshots/whatcanicook.png"
import whatcanicook_cs from "../images/case_studies/whatcanicook.png"
import king_scr from "../images/screenshots/king.png"

export const projects = [
    {
        type: "main",
        title: "What Can I Cook",
        description: "Vegan recipe finder",
        url: "",
        caseStudy: whatcanicook_cs,
        img: whatcanicook_scr,
        stack:[ "react","redux","sass","python","figma"],
        stores: {
            apple: false,
            google: true
        }
        
    },
    {
        type: "main",
        title: "King",
        description: "Multiplayer card game",
        url: "https://king.mrcdev.co.uk?demo=true",
        caseStudy: null,
        img: king_scr,
        stack: ["jquery","css","python"],
        stores: {
            apple: false,
            google: false
        }
    }
]