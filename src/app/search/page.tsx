import SidePanel from "@/components/Layout/SidePanel/SidePanel";
import Input from "@/components/UI/Input/Input";
import { NextPage } from "next";

const SearchPage: NextPage = () => {
  return (
    <main className="flex bg-background w-full min-h-screen">
      <SidePanel />
      <div className="p-4 w-full">
        <Input className="bg-darkbg text-white h-12 w-6/12 px-4 rounded-lg" placeholder="Search titles, artists or albums" />
      </div>
    </main>
  );
};

export default SearchPage;
