import ArtNavBar from "@/components/nav/ArtNavBar";
import Seo from "@/components/Seo";
import { useRouter } from "next/router";

export default function ArtList() {

  const router = useRouter()
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
        <div className="lg:p-20 flex flex-wrap">
          {
            new Array(20).fill(0).map((item, index) => {
              return (
                <div key={index} className="card card-compact w-full lg:w-4/12 md:w-6/12  px-4 mb-4" onClick={() => router.push('/artDetail')}>
                  <div className="border">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                      <h2 className="text-2xl font-semibold">艺术家名字</h2>
                      <p className="text-xl font-semibold">艺术家title</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
