import Image from "next/image"
import paperTextureImage from "@/assets/paper-texture.png";

interface IntroImmageBannerProps {
    imageSources: string[]
}

export default function IntroImageBanner({ imageSources }: IntroImmageBannerProps) {

    if (imageSources.length != 2) {
        return null;
    }

    const image1 = imageSources[0];
    const image2 = imageSources[1];

    return (
        <div className={`w-full flex justify-center rounded-[9.75px] overflow-hidden outline outline-border-subtle outline-opacity-30 aspect-[300/125] md:aspect-[300/109] bg-gold-1 relative`}>
                <Image
                    className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply"
                    src={paperTextureImage}
                    alt="Paper texture background"
                    width={800}
                    height={800}
                />
                <Image
                    key={1}
                    className="w-[75%] md:w-[42%] object-cover object-top rounded-lg shadow-[0px_5px_41px_0px_rgba(177,140,36,0.10)] border border-border-medium border-opacity-60 mx-2 relative top-4 md:top-8"
                    width={800}
                    height={800}
                    alt="Picture of project"
                    src={image1}
                />
                <Image
                    key={2}
                    className="w-[42%] object-cover object-top rounded-lg shadow-[0px_5px_41px_0px_rgba(177,140,36,0.10)] border border-border-medium border-opacity-60 mx-2 relative top-4 md:top-8 md:block hidden"
                    width={800}
                    height={800}
                    alt="Picture of project"
                    src={image2}
                />
        </div>
    )
}