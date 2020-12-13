import custemStyle from '../style/index.module.css'
let Address= ({src,inner})=>{
    return (
        <div className={custemStyle.address}>
            <img width='60px' height='60px' src={src}></img>
            <p className='text-2xl text-green-300'>{inner}</p>
        </div>
    )
}
export default Address