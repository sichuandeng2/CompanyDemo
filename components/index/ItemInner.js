import customStyle from '../style/index.module.css' 
function ItemInner({id,name,title,inner}){
    return (
        <>
            <div id={id} className={customStyle.title}>
                <h1>{name}</h1>
                <h2>{title}</h2>
                <p className='my-10 text-gray-500'>{inner}</p>
            </div>
        </>
    )
}

export default ItemInner