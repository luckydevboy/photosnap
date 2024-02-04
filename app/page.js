import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
// TODO: SEO

const Home = () => {
  return (
    <main>
      <section className="relative h-96">
        <Image
          src="/assets/images/pexels-wouter-de-jong-571169.jpg"
          alt="Photographer with sea landscape"
          fill
          objectFit="cover"
        />
      </section>

      <section className="space-y-6 bg-black px-8 py-16">
        <h1 className="text-3xl font-bold text-white">
          CREATE AND SHARE YOUR PHOTO STORIES.
        </h1>
        <p className="text-base text-zinc-400">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <button className="flex items-center gap-x-4 text-white">
          GET AN INVITE <ArrowLongRightIcon className="h-6 w-6" />
        </button>
      </section>

      <section className="relative h-96">
        <Image
          src="/assets/images/pexels-caio-56759.jpg"
          alt="Office Desk"
          fill
          objectFit="cover"
        />
      </section>

      <section className="space-y-6 bg-white px-8 py-16">
        <h1 className="text-3xl font-bold text-black">
          BEAUTIFUL STORIES EVERY TIME
        </h1>
        <p className="text-base text-zinc-700">
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
        </p>
        <button className="flex items-center gap-x-4 text-black">
          VIEW THE STORIES <ArrowLongRightIcon className="h-6 w-6" />
        </button>
      </section>

      <section className="relative h-96">
        <Image
          src="/assets/images/pexels-kyle-loftus-3379933.jpg"
          alt="Photographer"
          fill
          objectFit="cover"
        />
      </section>

      <section className="space-y-6 bg-white px-8 py-16">
        <h1 className="text-3xl font-bold text-black">DESIGNED FOR EVERYONE</h1>
        <p className="text-base text-zinc-700">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </p>
        <button className="flex items-center gap-x-4 text-black">
          VIEW THE STORIES <ArrowLongRightIcon className="h-6 w-6" />
        </button>
      </section>

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

      <section className="flex flex-col items-center space-y-6 bg-white px-8 py-16">
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

      <section className="flex flex-col items-center space-y-6 bg-white px-8 pb-16">
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

      <section className="flex flex-col items-center space-y-6 bg-white px-8 pb-16">
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
