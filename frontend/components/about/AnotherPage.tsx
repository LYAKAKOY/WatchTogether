import { serviceArray } from "@/constants";
import Link from "next/link";

type AnotherPageProps = {
  currentHref: string;
};

type PageCardProps = {
  tip: string;
  href: string;
  title: string;
};

const PageCard = ({ tip, href, title }: PageCardProps) => {
  return (
    <Link
      href={href}
      className="border-bordercolor border-solid border-[1px] border-opacity-[0.2] rounded-[12px] min-w-[200px] min-h-[100px] p-4
          ease duration-300 hover:bg-subprimary"
    >
      <h2 className="text-white text-medium">{title}</h2>
      <p className="text-profileText max-w-[250px]">{tip}</p>
    </Link>
  );
};

const AnotherPage = ({ currentHref }: AnotherPageProps) => {
  return (
    <div className="mt-[40px]">
      <h2 className="sm:text-[32px] text-[24px] font-semibold">Почитать еще</h2>
      <div className="flex flex-wrap sm:flex-row flex-col mt-[20px] gap-[10px]">
        {serviceArray.map((item, id) => {
          if (item.href !== currentHref) {
            return <PageCard key={id} {...item} />;
          }
        })}
      </div>
    </div>
  );
};

export default AnotherPage;
