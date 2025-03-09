import profilePic from '/profile.jpg'

export default function Header(){
    return (
        <>
        <div className="sm:mx-[23%] mx-14 mt-48 sm:mb-px mb-20">
            <p className="lg:text-3xl sm:text-2xl text-xl"><b>Hi, I'm Akadanar</b></p>
            <p className="lg:text-lg sm:text-base text-sm"><span>Backend Developer and Linux Enthusiast</span></p>
            <img src={profilePic} className="sticky rounded-full size-[30%] ml-auto z-10" alt="" />
        </div>
        
        </>
    )
}
