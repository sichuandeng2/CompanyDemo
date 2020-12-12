import Head from 'next/head'
import ItemInner from '../components/ItemInner'
import DevelopInfo from '../components/DevelopInfo'
import Teamwork from '../components/Teamwork'
import Address from '../components/Address'
import {useRef} from 'react'
import HoriLine from '../components/HoriLine'


export default function Home() {
  
  let data ={
    title:'電子互動產品、軟件及系統開發',
    inner:'我們是一間資訊科技公司，致力研發新穎的電子互動裝置與物聯網相關設備，專注開發各項軟件、系統和產品，曾與不同的學校、公司及政府部門合作，因此具有豐富的經驗，歡迎有意合作者與我們洽談。'
  }
  let teamwork = [
    {
        src:'partner01.png',
        name:'地球物理暨氣象局'
    },
    {
        src:'partner02.png',
        name:'澳門科學館'
    },
    {
        src:'partner03.png',
        name:'聖若瑟教區中學第一校'
    },
    {
        src:'partner04.png',
        name:'化地瑪聖母女子學校'
    },
    {
        src:'partner03.png',
        name:'聖若瑟教區中學第六校'
    },
    {
        src:'partner05.png',
        name:'明記海產有限公司'
    },
    {
        src:'partner06.png',
        name:'早雲設計整合制作公司'
    },
    {
        src:'partner07.png',
        name:'澳門財經專業進修中心'
    }
]
  return (
    <div >
      <Head>
        <title>地域電腦有限公司</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
        <div className='w-4/5 h-72'>
          <img className='' src='/banner.png'></img>
          <ItemInner id='AboatUs' refs={elAboatUs} name='關於我們' title={data.title} inner={data.inner}></ItemInner>
          <HoriLine></HoriLine>
          <ItemInner id='Develop' title='開發項目'
            inner='我們的開發項目涵蓋多個範疇，能滿足不同客戶的需求，以下為我們的產品︰'
          ></ItemInner>
          <DevelopInfo 
            src='/pic01.png' 
            title='學生成長檔案' 
            info='融合九大智能分類的電子成長檔案，全面地記錄學生的學習及課外活動狀況，並以九大智能分類幫助學生找出興趣及亮點所在，發展最適合的路向。'>
          </DevelopInfo>
          <DevelopInfo 
            src='/pic02.png' 
            title='室內導覽系統' 
            info='用戶移動到特定位置時，能使用應用程式來獲得不同資訊，可作導覽、尋寶遊戲等應用，豐富用戶體驗。'>
          </DevelopInfo>
          <DevelopInfo 
            src='/pic03.png' 
            title='Petmap 寵物地圖' 
            info='協助飼主尋找走失寵物的產品，裝置輕便、用電量低，配合應用程式即可使用。'>
          </DevelopInfo>
          <DevelopInfo 
            src='/pic04.png' 
            title='線上夾公仔機系統' 
            info='透過手機應用程式，實時遠端遙控實體夾娃娃機進行夾娃娃遊戲，完全沒有地域及時間限制，任何時間及地點都可以夾娃娃。'>
          </DevelopInfo>
          <DevelopInfo 
            src='/pic05.png' 
            title='線上夾公仔機系統' 
            info='` 貨單管理系統
            分散式氣象監察系統
            智能健身管理系統
            勇闖恐龍世界（VR遊戲）
            STEM學習平台
            智慧相冊 `'
            isend='true'>
          </DevelopInfo>
          <HoriLine></HoriLine>
          <ItemInner id='Partner' title='合作夥伴'></ItemInner>
          <Teamwork teamwork={teamwork}></Teamwork>
          <HoriLine></HoriLine>
          <ItemInner id='ContectUs' title='聯絡我們'></ItemInner>
          <Address src='/phone.png' inner='66631416' ></Address>
          <Address src='/address.png' inner='公司總部：飛能便度圍14-A號友勝大廈地下C座' ></Address>
          <Address src='/address.png' inner='分公司地址（珠海）：珠海市橫琴新區環島東路1889號18棟436室' ></Address>
          <Address src='/address.png' inner='分公司地址（東莞）：廣東省東莞市松山湖園區科技四路16號2棟413室' ></Address>
          <Address src='/mail.png' inner='kevin@region.mo' ></Address>
          <div className='flex w-3/4 justify-center mx-auto'>
            <img src='/logo-banner.png' width='328px' height='60px'></img>
          </div>
        </div>
        <div className='fixed top-0 right-0 flex flex-col items-center w-1/5 h-screen bg-green-300'>
          <div className='my-8'>
            <img src='/logo.png' width='120px' height='120px'></img>
          </div>
          <h2 className='text-2xl font-bold text-white'>地域電腦有限公司</h2>
          <h2 className='text-2xl font-bold text-white'>Region Computer</h2>
          <p className='my-6 text-md italic text-gray-50'>地域，想像無極限</p>
          <p className='mb-6 text-md italic text-gray-50'>Region, a place to imagine</p>
          <div className='w-full'>
            <a href='https://company-demo.vercel.app#AboatUs' className='block w-full h-8 border-2 text-center border-red-900 text-white'>關於我們</a>
            <a href='https://company-demo.vercel.app#Develop' className='block w-full h-8 border-2 text-center border-red-900 text-white'>開發項目</a>
            <a href='https://company-demo.vercel.app#Partner' className='block w-full h-8 border-2 text-center border-red-900 text-white'>合作夥伴</a>
            <a href='https://company-demo.vercel.app#ContectUs' className='block w-full h-8 border-2 text-center border-red-900 text-white'>聯絡我們</a>
          </div>
        </div>
      </div>

    </div>
  )
}
