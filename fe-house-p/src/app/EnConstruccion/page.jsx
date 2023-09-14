import React from "react";
import { en_construccion } from "@/assets/images";
import Image from "next/image";

export default function HomeMovilNavbar() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Image src={en_construccion} alt="En construcción" />
        </div>
    );
}
