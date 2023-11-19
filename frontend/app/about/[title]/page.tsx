import MainInfo from "@/components/about/MainInfo";
import {
  missions,
  privacyPolicy,
  serviceArray,
  aboutService,
  features,
} from "@/constants";

const page = ({ params }: { params: { title: string } }) => {
  switch (params.title) {
    case "service":
      return (
        <MainInfo
          title={`${serviceArray[0].title}`}
          subtitle={`${serviceArray[0].tip}`}
          href={`${params.title}`}
          array={aboutService}
        />
      );
    case "missions":
      return (
        <MainInfo
          title={`${serviceArray[1].title}`}
          subtitle={`${serviceArray[1].tip}`}
          href={`${params.title}`}
          array={missions}
        />
      );
    case "features":
      return (
        <MainInfo
          title={`${serviceArray[2].title}`}
          subtitle={`${serviceArray[2].tip}`}
          href={`${params.title}`}
          array={features}
        />
      );
    case "privacy":
      return (
        <MainInfo
          title={`${serviceArray[3].title}`}
          subtitle={`${serviceArray[3].tip}`}
          href={`${params.title}`}
          array={privacyPolicy}
        />
      );
    case "contacts":
      return (
        <MainInfo
          title={`${serviceArray[4].title}`}
          subtitle={`${serviceArray[4].tip}`}
          href={`${params.title}`}
          array={features}
        />
      );
    // case "feedback":
    //   return (
    //     <MainInfo
    //       title={`${serviceArray[5].title}`}
    //       subtitle={`${serviceArray[5].tip}`}
    //       array={}
    //     />
    //   );
    default:
      return <div>page {params.title}</div>;
  }
};

export default page;
