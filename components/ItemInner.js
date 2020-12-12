export default  ({id,name,title,inner})=>{
    return (
        <>
            <div id={id} className='w-3/4 mx-auto my-6'>
                <h1 className='text-5xl my-9 text-green-600 font-bold'>{name}</h1>
                <h3 className='text-2xl my-2 font-bold text-gray-600'>{title}</h3>
                <p className='my-10 text-gray-500'>{inner}</p>
            </div>
        </>
    )
}