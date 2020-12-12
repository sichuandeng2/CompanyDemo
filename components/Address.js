export default ({src,inner})=>{
    return (
        <div className='flex items-center w-3/4 mx-auto my-6'>
            <img width='60px' height='60px' src={src}></img>
            <p className='text-2xl text-green-300'>{inner}</p>
        </div>
    )
}