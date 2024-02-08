import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
// TODO: SEO

const Home = () => {
  return (
    <main>
      <section className="md:flex md:h-[600px]">
        <div className="relative order-2 h-96 md:h-auto md:w-1/3">
          <Image
            src="/assets/images/pexels-wouter-de-jong-571169.jpg"
            alt="Photographer with sea landscape"
            fill
            objectFit="cover"
          />
        </div>
        <div className="space-y-6 bg-black px-8 py-16 md:flex md:w-2/3 md:flex-col md:justify-center">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            CREATE AND SHARE YOUR PHOTO STORIES.
          </h1>
          <p className="text-base text-zinc-400">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <button className="flex items-center gap-x-4 text-white">
            GET AN INVITE <ArrowLongRightIcon className="h-6 w-6" />
          </button>
        </div>
      </section>
      <section className="md:flex md:h-[600px]">
        <div className="relative h-96 md:h-auto md:w-1/3">
          <Image
            src="/assets/images/pexels-caio-56759.jpg"
            alt="Office Desk"
            fill
            objectFit="cover"
          />
        </div>
        <div className="space-y-6 bg-white px-8 py-16 md:flex md:w-2/3 md:flex-col md:justify-center">
          <h1 className="text-3xl font-bold text-black md:text-5xl">
            BEAUTIFUL STORIES EVERY TIME
          </h1>
          <p className="text-base text-zinc-700">
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
          </p>
          <button className="flex items-center gap-x-4 text-black">
            VIEW THE STORIES <ArrowLongRightIcon className="h-6 w-6" />
          </button>
        </div>
      </section>
      <section className="md:flex md:h-[600px]">
        <div className="relative order-2 h-96 md:h-auto md:w-1/3">
          <Image
            src="/assets/images/pexels-kyle-loftus-3379933.jpg"
            alt="Photographer"
            fill
            objectFit="cover"
          />
        </div>
        <div className="space-y-6 bg-white px-8 py-16 md:flex md:w-2/3 md:flex-col md:justify-center">
          <h1 className="text-3xl font-bold text-black">
            DESIGNED FOR EVERYONE
          </h1>
          <p className="text-base text-zinc-700">
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <button className="flex items-center gap-x-4 text-black">
            VIEW THE STORIES <ArrowLongRightIcon className="h-6 w-6" />
          </button>
        </div>
      </section>

      <div className="md:grid md:grid-cols-2">
        <section className="relative">
          <div className="absolute z-10 h-96 w-full bg-black/40"></div>
          <div className="relative h-96">
            <Image
              src="/assets/images/pexels-pixabay-417173.jpg"
              alt="Mountain"
              fill
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
            <h1 className="text-xl font-bold">The Mountains</h1>
            <p>by John Appleseed</p>
            <hr className="my-4" />
            <button className="flex w-full items-center justify-between">
              <span className="text-sm font-semibold">READ STORY</span>{" "}
              <ArrowLongRightIcon className="h-6 w-6" />
            </button>
          </div>
        </section>
        <section className="relative">
          <div className="absolute z-10 h-96 w-full bg-black/40"></div>
          <div className="relative h-96">
            <Image
              src="/assets/images/pexels-victor-wang-2415499.jpg"
              alt="Mountain"
              fill
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
            <h1 className="text-xl font-bold">Sunset Cityscapes</h1>
            <p>by Benjamin Cruz</p>
            <hr className="my-4" />
            <button className="flex w-full items-center justify-between">
              <span className="text-sm font-semibold">READ STORY</span>{" "}
              <ArrowLongRightIcon className="h-6 w-6" />
            </button>
          </div>
        </section>
        <section className="relative">
          <div className="absolute z-10 h-96 w-full bg-black/40"></div>
          <div className="relative h-96">
            <Image
              src="/assets/images/pexels-paige-deasley-10080993.jpg"
              alt="Mountain"
              fill
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
            <h1 className="text-xl font-bold">18 Days Voyage</h1>
            <p>by Alexei Borodin</p>
            <hr className="my-4" />
            <button className="flex w-full items-center justify-between">
              <span className="text-sm font-semibold">READ STORY</span>
              <ArrowLongRightIcon className="h-6 w-6" />
            </button>
          </div>
        </section>
        <section className="relative">
          <div className="absolute z-10 h-96 w-full bg-black/40"></div>
          <div className="relative h-96">
            <Image
              src="/assets/images/pexels-pixabay-417273.jpg"
              alt="Mountain"
              fill
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
            <h1 className="text-xl font-bold">Architectural</h1>
            <p>by Samantha Brooks</p>
            <hr className="my-4" />
            <button className="flex w-full items-center justify-between">
              <span className="text-sm font-semibold">READ STORY</span>
              <ArrowLongRightIcon className="h-6 w-6" />
            </button>
          </div>
        </section>
      </div>

      <section className="mx-auto flex max-w-lg flex-col items-center space-y-6 bg-white px-8 py-16">
        <Image
          src="/assets/images/responsive.png"
          alt="Responsive"
          width={80}
          height={80}
        />
        <h1 className="text-xl font-bold text-black">100% Responsive</h1>
        <p className="text-center text-base text-zinc-700">
          No matter which the device you&apos;re on, our site is fully
          responsive and stories look beautiful on any screen.
        </p>
      </section>
      <section className="mx-auto flex max-w-lg flex-col items-center space-y-6 bg-white px-8 pb-16">
        <Image
          src="/assets/images/infinity.png"
          alt="Responsive"
          width={80}
          height={80}
        />
        <h1 className="text-xl font-bold text-black">No Photo Upload Limit</h1>
        <p className="text-center text-base text-zinc-700">
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk
          and share all of your stories in one go.
        </p>
      </section>
      <section className="mx-auto flex max-w-lg flex-col items-center space-y-6 bg-white px-8 pb-16">
        <Image
          src="/assets/images/bullhorn.png"
          alt="Responsive"
          width={80}
          height={80}
        />
        <h1 className="text-xl font-bold text-black">Available to Embed</h1>
        <p className="text-center text-base text-zinc-700">
          Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more.
        </p>
      </section>
    </main>
  );
};

export default Home;
