import Panel from '../layouts/Panel'
import Sns from '../components/Sns'

export default function About(){
    return (
        <>
        <div className="mx-72 my-32">
            <span className="text-2xl font-bold">Hi! I'm Akadanar</span>
            <p className='text-xl'>A senior high school student who have an interest in physics and computer science.</p>
        </div>
        <Panel/>
        <Sns/>
        </>
    )
}