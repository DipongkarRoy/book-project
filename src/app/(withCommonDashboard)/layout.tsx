import Sidebar from "@/components/ui/Sidebar";
import { ReactNode } from "react";


const layout = ({children}:{children:ReactNode}) => {
    return (
        <Sidebar>
            {children}
        </Sidebar>
    );
};

export default layout;