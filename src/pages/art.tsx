
import { useRouter } from "next/router";
import { useState } from "react";

import Modal from "@/components/modal";
import ArtNavBar from "@/components/nav/ArtNavBar";
import Seo from '@/components/Seo';



export default function Art() {
  const [visible, setVisible] = useState(false)
  const router = useRouter()
  return (
    <>
      <Seo templateTitle="艺术馆" />
      <ArtNavBar />
      <Modal border={false} footer={null} visible={visible} width={800} onClose={() => setVisible(false)}>
        <div className="w-full flex bg-base-100 shadow-xl flex-wrap">
          <figure className="w-full lg:w-6/12 md:w-6/12 sm:w-6/12"><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
          <div className="card-body w-full lg:w-6/12 md:w-6/12 sm:w-6/12">
            <h5 className="card-title">作品名字</h5>
            <h5 className="card-title">作者名字</h5>
            <h5 className="card-title">上传日期</h5>
            <h5 className="card-title">作品简介</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur eum provident! Numquam iste eius ratione, repudiandae non consequuntur vitae libero! Nemo nulla quibusdam laudantium dolor eum sequi ducimus adipisci.</p>
            <h5 className="card-title">AI信息</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nostrum nesciunt ducimus perspiciatis sunt illum, enim et id! Non deserunt beatae tempora animi nisi quas, laborum natus fugiat provident repellat?</p>
          </div>
        </div>
      </Modal>
      <section className="container mx-auto h-96">
        <figure className="h-full overflow-hidden">
          <img src="https://placeimg.com/1536/680/people" />
        </figure>
      </section>
      <section className="container mx-auto ">
        <h2 className="text-3xl py-12 font-semibold ">热门作品推荐</h2>
        <div className="flex flex-wrap">
          {[1, 2, 3].map(item => {
            return (
              <article onClick={() => setVisible(true)} className='p-4  w-full lg:w-4/12 md:w-4/12 sm:w-4/12' key={item}>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h4 className="card-title">作者名字</h4>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto ">
        <h2 className="text-3xl py-12 font-semibold ">热门艺术家推荐</h2>
        <div className="flex flex-wrap">
          {[1, 2, 3].map(item => {
            return (
              <article onClick={() => router.push('/artDetail')} className='p-4  w-full lg:w-4/12 md:w-4/12 sm:w-4/12' key={item}>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h4 className="card-title">作艺术家名字</h4>
                    <p>艺术家title</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto ">
        <h2 className="text-3xl py-12 font-semibold ">分类浏览</h2>
        <div className="flex flex-wrap">
          {[1, 2, 3].map(item => {
            return (
              <article className='p-4  w-full lg:w-4/12 md:w-4/12 sm:w-4/12' key={item}>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h4 className="card-title">作艺术家名字</h4>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
