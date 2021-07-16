import { useRouter } from "next/router";
import allEndpoints from "../utils/requests";

function Nav() {
    //Converting the object into an array, it will return an array structured as, [key,{values}]
    const allEndpointsArray = Object.entries(allEndpoints);
    const router = useRouter();

    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-30 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-auto scrollbar-hide">
                {allEndpointsArray.map((singleEndpoint) => {
                    //Array Destructing
                    const [key, { title, url }] = singleEndpoint;

                    return (
                        <h1
                            key={key}
                            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-24"
                            onClick={() => {
                                router.push(`/?genre=${key}`);
                            }}
                        >
                            {title}
                        </h1>
                    );
                })}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
        </nav>
    );
}

export default Nav;
