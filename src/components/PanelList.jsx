export default function PanelList({ props }){
    return (
        <>
        {props.map((item) => (<a className="sm:text-s md:text-xl opacity-60 font-semibold mx-[3%]" href={item.Link}>{item.Name}</a>))}
        </>
    )
}
