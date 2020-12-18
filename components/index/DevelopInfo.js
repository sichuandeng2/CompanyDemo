import HoriLine from './HoriLine'
import custemStyle from '../style/index.module.css'
let Develop = ({ src, title, info, isend = false }) => {
    return (
        <>
            <div className={custemStyle.title}>
                <div className='flex items-center mb-8'>
                    <img style={{width:'300px', height:'200px'}} src={src}></img>
                    <div className='px-8 inline-block'>
                        <h3>{title}</h3>
                        <p className='my-2 text-gray-500'>{info}</p>
                    </div>
                </div>
                {!isend && <HoriLine></HoriLine>}
            </div>

        </>
    )
}
export default Develop