import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-black py-12 text-white">
      <div className="flex items-center gap-x-2">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={25}
          height={20}
        />
        <h1 className="text-xl font-black">PHOTOSNAP</h1>
      </div>
      <div className="mb-12 mt-8 flex items-center justify-center gap-x-4">
        <Image
          src="/assets/images/facebook.png"
          alt="Facebook"
          width={24}
          height={24}
        />
        <Image
          src="/assets/images/instagram.png"
          alt="Instagram"
          width={24}
          height={24}
        />
        <Image
          src="/assets/images/pinterest.png"
          alt="Pinterest"
          width={24}
          height={24}
        />
        <Image
          src="/assets/images/twitter.png"
          alt="Twitter"
          width={24}
          height={24}
        />
      </div>
      <ul className="space-y-4">
        <li className="text-center">HOME</li>
        <li className="text-center">STORIES</li>
        <li className="text-center">FEATURES</li>
        <li className="text-center">PRICING</li>
      </ul>
    </footer>
  );
};

export default Footer;
