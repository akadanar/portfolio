import { Link } from "react-router-dom"
import PanelList from "../components/PanelList"

export default function Panel(){
    const panelItem = [{
        Name: 'Home',
        Link: '/'    
    },
        {Name: 'Blog',
        Link: 'https://medium.com/@akadanar'
         },
        {Name: 'Projects',
        Link: '/projects'
         },
        {Name: 'About',
        Link: '/about'
        },]
    return (
        <>
        <div className="text-center my-14 fixed w-full bottom-20 z-99">
            <PanelList props={panelItem} />   
        </div>
        </>
    )
}