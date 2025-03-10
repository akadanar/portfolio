import Panel from '../layouts/Panel'
import Sns from '../components/Sns'

export default function About(){
    return (
        <>
        <div className="mx-[12%] my-32">
            <span className="sm:text-xl md:text-2xl font-bold">Hi! I'm Akadanar</span>
            <p className="sm:text-lg md:text-xl">A senior high school student who have an interest in physics and computer science.</p>
        </div>
        <Panel/>
        <Sns/>
        </>
    )
}