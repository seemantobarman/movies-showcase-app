import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex justify-evenly flex-grow max-w-2xl">
                <HeaderItem Icon={HomeIcon} title="HOME" />
                <HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
                <HeaderItem Icon={CollectionIcon} title="COLLECTIONS" />
                <HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
                <HeaderItem Icon={UserIcon} title="ACCOUNT" />
                <HeaderItem Icon={SearchIcon} title="SEARCH" />
            </div>

            <Image
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
            />
        </header>
    );
}

export default Header;
