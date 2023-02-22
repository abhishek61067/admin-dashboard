import {createContext, useState, useEffect, useContext} from "react";

export const ProfileIconContext = createContext();

export const ProfileIconProvider = ({children}) =>{
    const [isProfileCollapsed, setIsProfileCollapsed] = useState(false);
    
        const toggleProfileIcon = ()=>{
            setIsProfileCollapsed(!isProfileCollapsed);
        }
        const ProfileIconClass = isProfileCollapsed ? "collapsed" : "";
        return (
            <ProfileIconContext.Provider value={[{ProfileIconClass, isProfileCollapsed}, toggleProfileIcon]}>
                {children}
            </ProfileIconContext.Provider>
        );
};



