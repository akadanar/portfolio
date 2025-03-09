import githubLogo from '/GitHub_Logo.png'
import xLogo from '/X_Logo.png'
import facebookLogo from '/Facebook_Logo.png'

export default function Sns(){
    return (
        <>
        <div className="flex fixed w-full justify-center mb-auto bottom-12">
            <a href="https://github.com/akadanar" target="_blank"><img className='size-12 mx-5' src={githubLogo} alt="Github" /></a>
            <a href="https://x.com/akadanar" target="_blank"><img className='size-12 mx-5' src={xLogo} alt="Twitter" /></a>
            <a href="https://www.facebook.com/akadanar" target="_blank"><img className='size-12 mx-5' src={facebookLogo} alt="Facebook" /></a>
        </div>
        </>
    )
}