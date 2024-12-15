import Star from "@/components/Star";
import Image from "next/image";

const avatar = [
  {
    src: "/images/image-colton.jpg",
    alt: "colton",
    name: "Colton smith",
    comment: `“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”`,
  },
  {
    src: "/images/image-irene.jpg",
    alt: "irene",
    name: "Irene Roberts",
    comment: `“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. ”`,
  },
  {
    src: "/images/image-anne.jpg",
    alt: "anne",
    name: "Anne Wallace",
    comment: `“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”`,
  },
];

export default function Home() {
  return (
    <main className="sm:h-screen w-full flex items-center max-sm:justify-center p-6 bg-secondary-lightGrayishMagenta">
      <section className="max-w-screen-lg mx-auto flex flex-col gap-14">
        <div className="flex w-full max-sm:flex-col max-sm:gap-4">
          <div className="w-full sm:w-1/2 gap-6 flex flex-col max-sm:items-center max-sm:text-center">
            <h1 className="w-4/5 leading-10 text-5xl text-primary-veryDarkMagenta font-bold">
              10,000+ of our users love our products.
            </h1>
            <p className="text-secondary-darkGrayishMagenta w-10/12">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col gap-4">
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                className={`${
                  i === 0 ? "sm:m-0" : i === 1 ? "sm:ml-10" : "sm:ml-20"
                } w-full sm:w-4/5 flex items-center p-4 px-7 bg-primary-softPink bg-opacity-10 rounded-lg gap-8`}
              >
                <Star />
                <div>
                  <h1 className="text-primary-veryDarkMagenta font-bold">
                    Rated 5 Stars in Reviews
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex max-sm:flex-col w-full gap-6">
          {avatar.map((data, i) => (
            <div
              className={`${
                i === 0 ? "sm:mt-0" : i === 1 ? "sm:mt-3" : "sm:mt-6"
              } w-full sm:w-1/3 h-52 flex flex-col gap-4 bg-primary-veryDarkMagenta rounded-lg p-8`}
            >
              <div className="flex gap-4 items-center">
                <div>
                  <Image
                    src={data.src}
                    alt={data.alt}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white font-bold text-sm">{data.name}</h1>
                  <p className="text-sm text-secondary-darkGrayishMagenta">
                    Verified Buyer
                  </p>
                </div>
              </div>
              <p className="text-white text-sm">{data.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
