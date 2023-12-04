// Import required components
// import About from 'sections/Home/About';
// import Accommodations from 'sections/Home/Accommodations';
// import Footer from 'sections/shared/Footer';

import Image from 'next/image'

// Import the Prismic client creation method and configuration
import { createClient } from '../../prismicio';
import sm from '../../slicemachine.config.json';
import * as prismicH from '@prismicio/helpers'

// Home component definition
const Home = ({homeData, headerGallery, headerLabels}) => {

  return (
    <>
        <div className='home__header__wrapper'>
            <div className='home__header__gallery'>
                {headerGallery.gallery.map((gallery, index) => {
                    return gallery.image ? (
                        <Image
                            key={index}
                            className='header__gallery__image'
                            src={prismicH.asImageSrc(gallery.image, {lossless: true, q: 100}) ||''}
                            alt=''
                            width={gallery.width}
                            height={gallery.height}
                        />
                    ) : null;
                })}
            </div>

            <h2 className='home__header__label'>
                <span className='home__header__label__main'>
                    <span className='home__header__label__main__text'>{headerLabels.label}</span>
                    <span className='home__header__label__sub'>
                        <span className='home__header__label__texts'>
                            {headerLabels.sub_label.map((text, idx) => {
                                return <span key={idx} className='home__header__label__text'>{text.text}</span>;
                            })}
                        </span>
                    </span>
                </span>
            </h2>
        </div>
        <h1>HOME PAGE</h1>
    </>
  );
};

export default Home;

// Function to fetch server-side properties
export async function getServerSideProps() {
  const client = createClient({ accessToken: sm.token });
  const home = await client.getSingle('home')
  const homeData = home.data

  const headerGallery = {
    gallery: homeData?.header_gallery ? homeData?.header_gallery.map((gallery) => ({
        image: gallery.header_gallery_image,
        width: gallery.header_gallery_image.dimensions.width,
        height: gallery.header_gallery_image.dimensions.height,
    })) : [],
  }

  const headerLabels = {
    label: homeData?.header_label,
    sub_label: homeData?.header_label_entries ? homeData?.header_label_entries.map((item) => ({
        text: item.header_label_entries_text
    })) : []
  }

  console.log(headerLabels);

//   console.log(homeData);

  return {
    props: {
        homeData,
        headerGallery,
        headerLabels,
    }
  }
}
