import Head from 'next/head'
import ItemInner from '../components/index/ItemInner'
import DevelopInfo from '../components/index/DevelopInfo'
import Teamwork from '../components/index/Teamwork'
import Address from '../components/index/Address'
import HoriLine from '../components/index/HoriLine'
import {data,teamwork,itemInner,address } from './data.json'
export default function Home() {

  return (
    <div >
      <Head>
        <title>地域電腦有限公司</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className='w-4/5 h-72'>
          <img  className='' src='/banner.png'></img>
          <ItemInner id='AboatUs' name='關於我們' title={data.title} inner={data.inner}></ItemInner>
          <HoriLine></HoriLine>
          <ItemInner id='Develop' title='開發項目'
            inner='我們的開發項目涵蓋多個範疇，能滿足不同客戶的需求，以下為我們的產品︰'
          ></ItemInner>
          {itemInner.map((item,index)=>{
             return (
              <DevelopInfo key={index}
                src={item.src}
                title={item.title}
                info={item.info}
                isend='ture'>
              </DevelopInfo>
             )
          })}
          <HoriLine></HoriLine>
          <ItemInner id='Partner' title='合作夥伴'></ItemInner>
          <Teamwork teamwork={teamwork}></Teamwork>
          <HoriLine></HoriLine>
          <ItemInner id='ContectUs' title='聯絡我們'></ItemInner>
            { address.map(item=><Address key={item.inner} src={item.src} inner={item.inner} ></Address>) }
          <div className='flex w-3/4 justify-center mx-auto my-10'>
            <img src='/logo-banner.png' width='328px' height='60px'></img>
          </div>
        </div>
        <div className='menu'>
          <div className='my-8'>
            <img src='/logo.png' width='120px' height='120px'></img>
          </div>
          <h5>地域電腦有限公司</h5>
          <h5>Region Computer</h5>
          <p className='my-6 text-md italic text-gray-50'>地域，想像無極限</p>
          <p className='mb-6 text-md italic text-gray-50'>Region, a place to imagine</p>
          <div className='w-full'>
            <a href='#AboatUs' className='menuItem'>關於我們</a>
            <a href='#Develop' className='menuItem'>開發項目</a>
            <a href='#Partner' className='menuItem'>合作夥伴</a>
            <a href='#ContectUs' className='menuItem'>聯絡我們</a>
            </div>
        </div>
      </div>
    </div>
  )
}
