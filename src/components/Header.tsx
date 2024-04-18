"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
    const [authenticated, setAuthenticated] = React.useState(false);
    
    
    return <div className="w-full h-20 bg-blue-400 flex flex-row items-center px-10">
        <div className="mr-10 w-4/5">
            <Link href="/home" className="text-3xl text-white">Home</Link>
        </div>
        
        
        <div>
            <Link href="/auth/login" className="text-3xl text-white mr-5">Login</Link>
            <Link href="/auth/register" className="text-3xl text-white">Register</Link>
        </div>
        
    </div>
};

export default Header