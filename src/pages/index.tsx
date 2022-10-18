
import { useRouter } from 'next/router';
import { useState } from 'react';

import RegisterForm from '@/components/form';
import Modal from '@/components/modal';
import IndexNavBar from '@/components/nav/IndexNavBar';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [visible, setModal] = useState(false)
  const [code, setCode] = useState(false)
  const router = useRouter()
  const jump = () => {
    router.push('/artList')
  }
  const jumpDetail = () => {
    router.push('/artDetail')
  }
  return (
    <>
      <Seo />
      <IndexNavBar />
      <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
        <div className="container mx-auto items-center flex">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <article className="prose">
              <h1 >
                HI
              </h1>
              <h2>
                用科技赋能作者
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aenean euismod bibendum
                laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin
                sodales pulvinar sic tempor. Sociis
                natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam
                fermentum, nulla luctus pharetra vulputate,
                felis tellus mollis orci, sed rhoncus pronin
                sapien nunc accuan eget.
              </p>
              <Modal footer={null} visible={visible} title="手机预约" border={false} onClose={() => setModal(false)}>
                <RegisterForm />
              </Modal>
              <label htmlFor="modal" className='btn btn-primary modal-button' onClick={() => setModal(true)}>立即预约体验</label>
            </article>
          </div>
          <img
            className="w-6/12"
            src="/images/pattern_nextjs.png"
            alt="..."
          />
        </div>

      </section>
      <section className="flex items-center justify-center flex-col md:flex-row py-4">
        <p className='font-semibold text-xl'>想要了解更多信息，欢迎加入社群</p>
        <p className='pl-20'>
          <button className="btn btn-primary">DC</button>
          <button className="btn btn-primary ml-4" onClick={() => window.location.href = 'https://twitter.com/XMonstersBarNFT'}>twitter</button>
        </p>
      </section>
      <section className='pt-20 container mx-auto'>
        <div dir="rtl" className="container mx-auto items-center flex mb-4 lg:flex-row md:flex-row flex-col">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <article className="prose">
              <h1 >
                HIdsadsa
              </h1>
              <h2>
                用科技赋能作者
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aenean euismod bibendum
                laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin
                sodales pulvinar sic tempor. Sociis
                natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam
                fermentum, nulla luctus pharetra vulputate,
                felis tellus mollis orci, sed rhoncus pronin
                sapien nunc accuan eget.
              </p>
              <button className='btn btn-primary'>我想入驻平台</button>
            </article>
          </div>
          <img
            className="w-6/12"
            src="/images/pattern_nextjs.png"
            alt="..."
          />
        </div>

        <div className='flex flex-wrap'>
          {
            [1, 2, 3].map(item => {
              return <div key={item} className="w-full lg:w-4/12 px-4 mb-4">

                <article onClick={jumpDetail} className="prose border border-stone-500">
                  <div className='relative flex flex-col min-w-0 break-words bg-primary w-full mb-6 shadow-lg   ease-linear translate-all'>
                    <img src="/images/pattern_nextjs.png" alt="" className='align-middle border-none max-w-full h-10  object-cover' />
                  </div>
                  <h2 className='text-center'>
                    艺术家名字
                  </h2>
                  <h3 className='text-center'>
                    艺术家
                  </h3>
                  <p className='p-4'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aenean euismod bibendum
                    laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo. Proin
                    sodales pulvinar sic tempor. Sociis
                    natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Nam
                    fermentum, nulla luctus pharetra vulputate,
                    felis tellus mollis orci, sed rhoncus pronin
                    sapien nunc accuan eget.
                  </p>
                  <div className='text-center py-4 cursor-pointer'>
                    <div className='text-primary text-xl'>更多信息</div>
                  </div>
                </article>
              </div>
            })
          }
        </div>

        <div className='text-center py-8'>
          <button className='btn btn-primary' onClick={jump}>发现更多艺术家</button>
        </div>
      </section>
      <section className='container mx-auto py-36'>
        <div className='flex flex-wrap'>
          <div className="lg:w-6/12 md:w-6/12 sm:w-full p-4">
            <article className="">
              <h1 className='card-title text-2xl'>
                HI
              </h1>
              <h2 className='card-title my-6'>
                用科技赋能作者
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aenean euismod bibendum
                laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin
                sodales pulvinar sic tempor. Sociis
                natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam
                fermentum, nulla luctus pharetra vulputate,
                felis tellus mollis orci, sed rhoncus pronin
                sapien nunc accuan eget.
              </p>
            </article>
          </div>
          <figure className="h-full overflow-hidden">
            <img src="https://placeimg.com/600/400/people" />
          </figure>
        </div>
        <div className='flex flex-wrap'>
          {
            [1, 2].map(item => {
              return <div key={item} className="lg:w-6/12 md:w-6/12 sm:w-full p-4 ">
                <article className="prose border border-stone-500">
                  <div className='relative flex flex-col min-w-0 break-words bg-primary w-full mb-6 shadow-lg   ease-linear translate-all'>
                    <img src="/images/pattern_nextjs.png" alt="" className='align-middle border-none max-w-full h-10  object-cover' />
                  </div>
                  <h3 className='text-center'>
                    艺术家名字
                  </h3>
                  <p className='p-4'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aenean euismod bibendum
                    laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo. Proin
                    sodales pulvinar sic tempor. Sociis
                    natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Nam
                    fermentum, nulla luctus pharetra vulputate,
                    felis tellus mollis orci, sed rhoncus pronin
                    sapien nunc accuan eget.
                  </p>
                  <div className='text-center py-4 cursor-pointer'>
                    <div className='text-primary text-xl'>更多信息</div>
                  </div>
                </article>
              </div>
            })
          }
        </div>
      </section>
      <footer className='bg-black   text-white w-full  '>
        <div className='container mx-auto'>
          <p className='p-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, totam quod consectetur perferendis veniam praesentium atque nostrum reprehenderit nam debitis, molestiae ex id! Rem, odit tempora cupiditate pariatur dicta hic?</p>
          <div className='text-center'>
            <button className='btn btn-primary' onClick={() => setCode(true)}>加入同盟</button>
          </div>
          <div className='text-center pt-24 pb-40 flex flex-wrap'>
            {
              [1, 2, 3, 4, 5].map(item => {
                return <span className='bg-white h-10 rounded-lg inline-block w-5/12  mb-6 mx-4' key={item}>logo</span>
              })
            }
          </div>
        </div>
      </footer>
      <Modal visible={code} onClose={() => setCode(false)} border={false} footer={null}>
        <div className='flex items-center flex-col'>
          <figure className="h-full overflow-hidden">
            <img src="https://placeimg.com/300/300/people" />
          </figure>
          <p className='text-2xl font-semibold mt-4'>扫码添加小助手</p>
          <p className='text-2xl font-semibold my-4'>扫码添加小助手</p>
          <p className='text-2xl font-semibold'>扫码添加小助手</p>
        </div>
      </Modal>
    </>

  );
}
