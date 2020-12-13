import Link from 'next/link'
let Teamwork =  ({teamwork})=>{
    return (<>
        <div className='grid grid-cols-2 w-3/4 mx-auto mb-20 '>
            {teamwork.map((item,index)=>{
                return (
                    <div  key={item+index}>
                    <Link href={item.href} >
                        <a className='flex items-end w-72 h-16'>
                            <img width='36px' height='24px'  src={item.src}></img>
                            <div>{item.name}</div>
                        </a>
                    </Link>
                    </div>
                )
            })}
        </div>
    </>)
}

export default Teamwork