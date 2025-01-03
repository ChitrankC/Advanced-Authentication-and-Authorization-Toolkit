"use client";


import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader
 } from "@/components/ui/card";
import { Header } from "./header";



interface CardWrapperProps{
    children: React.ReactNode;
    headerlabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};


export const CardWrapper = ({
    children,
    headerlabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return(
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerlabel} />
            </CardHeader>
            <CardContent>
                {children}

            </CardContent>
        </Card>
    );
};