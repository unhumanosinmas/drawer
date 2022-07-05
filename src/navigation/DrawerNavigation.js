import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../view/Home";
import Profile from "../view/Profile";

const Drawer = createDrawerNavigator();

 export function DrawerNavigation() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="HomeView" component={Home}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>

    )
}