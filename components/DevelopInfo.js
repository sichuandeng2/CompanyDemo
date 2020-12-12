import HoriLine from './HoriLine'
export default ({src, title, info, isend=false})=>{
    return (
        <>
            <div className='w-3/4 mx-auto my-6'>
                <div className='flex items-center mb-8'>
                    <img width='300px' height='200px' src={src}></img>
                    <div className='px-8 inline-block'>
                        <h3 className='text-mx my-2 font-bold text-gray-600'>{title}</h3>
                        <p className='my-2 text-gray-500'>{info}</p>
                    </div>
                </div>
                {!isend && <HoriLine></HoriLine>}
            </div>
            
        </>
    )
}