import React from "react";
import { en_construccion } from "@/assets/images";

export default function HomeMovilNavbar() {
    return (
        <div className="flex justify-center items-center h-screen">
            <img src={en_construccion.src} alt="En construcción" />
        </div>
    );
}
