let Teamwork =  ({teamwork})=>{

    return (<>
        <div className='grid grid-cols-2 w-3/4 mx-auto mb-20 '>
            {teamwork.map((itme,index)=>{
                return (
                    <div className='flex items-end w-72 h-16' key={index}>
                        <img width='36px' height='24px'  src={itme.src}></img>
                        <p>{itme.name}</p>
                    </div>
                )
            })}
        </div>
    </>)
}

export default Teamwork