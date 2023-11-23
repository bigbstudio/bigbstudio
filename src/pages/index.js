import { createClient } from 'path-to-prismic-client';

const MyComponent = ({ myContent }) => {
  // Component logic using myContent
};

export default MyComponent;

export async function getServerSideProps() {
  const client = createClient({ accessToken: 'your-access-token' });

  // Fetch content from Prismic by type
  const content = await client.getByType('your-content-type');

  // Process and return the content as needed
  const processedContent = processContent(content);

  return {
    props: { myContent: processedContent },
  };
}

function processContent(content) {
  // Process the content as per your requirements
}





// REFERENCE BELOW





// import About from 'sections/Home/About';
// import Accommodations from 'sections/Home/Accommodations';
// import Footer from 'sections/shared/Footer';

// import { createClient } from '../../prismicio';
// import sm from '../../sm.json';

// const Home = ({ accommodationsList, accommodationsInternalPageData, about, links }) => {
//   return (
//     <>
//       <About text={about} />
//       <Accommodations accommodationsList={accommodationsList} accommodationsInternalPageData={accommodationsInternalPageData} />
//       <Footer links={links} fixed={true} />
//     </>
//   );
// };

// export default Home;

// export async function getServerSideProps() {
//   const client = createClient({ accessToken: sm.token });
//   const accomodations = await client.getAllByType('accommodation');

//   const accommodationsListTreated = accomodations.map((accomodation) => {
//     if (!accomodation.data) return null;
//     return {
//       id: accomodation.uid,
//       name: accomodation.data.name,
//       location: accomodation.data.location,
//       coming: accomodation.data.coming,
//       image: {
//         url: accomodation.data.image.url,
//       },
//     };
//   });

//   const accommodationsInternalPageData = [];
//   if (accommodationsListTreated?.length) {
//     for (let i = 0; i < accommodationsListTreated.length; i++) {
//       const item = accommodationsListTreated[i];
//       if (item) {
//         const accommodationItem = await client.getByUID('accommodation', item.id);
//         accommodationsInternalPageData.push(accommodationItem);
//       }
//     }
//   }

//   const orderReq = await client.getByType('order_home');
//   const order = orderReq.results[0].data.list_order.map((item) => item.project).map((item) => item.uid);

//   let accommodationsList = [];

//   order.forEach((item) => {
//     const found = accommodationsListTreated.find((acc) => acc?.id === item);
//     if (found) accommodationsList.push(found);
//   });

//   const home = await client.getByType('homepage');
//   const about = home?.results[0]?.data?.about[0]?.text || '';

//   const linksReq = await client.getByType('links');
//   const links = linksReq?.results[0]?.data?.links;

//   return {
//     props: { accommodationsList, about, links, order, accommodationsInternalPageData },
//   };
// }
