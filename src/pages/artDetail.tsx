import ArtNavBar from "@/components/nav/ArtNavBar"
import Seo from "@/components/Seo"

const ArtDetail = () => {

  return (
    <>
      <Seo />
      <ArtNavBar />
      <section className="container mx-auto h-96">
        <div className="bg-accent h-full">
          <figure className="h-full overflow-hidden">
            <img src="https://placeimg.com/1536/680/people" />
          </figure>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="lg:px-24 lg:flex-row md:flex-row sm:py-4 flex items-center flex-col sm:items-center">
          <div className="avatar">
            <div className="w-48 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="pl-10 py-4 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quas officia animi aliquid quae! Temporibus exercitationem corporis nisi vero tempore. Beatae porro blanditiis tempore a ut voluptas vero odio libero.
          </div>
        </div>
        <div className="lg:px-24 px-10  w-full">
          <article className="">
            <h2 className="card-title text-2xl ">艺术家名字</h2>
            <h2 className="card-title text-2xl my-6">个人简介</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae officiis nemo, ut praesentium est tenetur dolore delectus molestias at itaque aspernatur? Ab error, similique quidem nulla modi dolorum veniam illum.</p>
            <h2 className="card-title text-2xl my-6">元宇宙系列</h2>
            <figure>
              <img src="https://placeimg.com/800/360/animal" />
            </figure >
            <h2 className="card-title text-2xl my-6">简介</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque facilis quaerat consequuntur sed nemo, dolorum distinctio autem? In, a suscipit vero ex sapiente illo at quibusdam commodi amet dolorum.</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default ArtDetail
