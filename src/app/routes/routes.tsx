import {LoginPage} from "../../modules/pages/LoginPage/LoginPage";
import {TestPage} from "../../modules/pages/TestPage/TestPage";
import {RouteObject} from "react-router-dom";
import {Provider} from "react-redux";
import {AuthPage} from "../authPage/AuthPage";
import {ProfilePage} from "../../modules/pages/ProfilePage/ProfilePage";

export const enum RoutesEnum {
    Test = "/test",
    Login = "/login",
    Profile = "/profile",
    Root = "/",
}

export const routes: RouteObject[] = [
    {
        path: RoutesEnum.Login,
        element: (
                <LoginPage />
        ),
    },
    {
        path: RoutesEnum.Test,
        element: (
                <TestPage />
        ),
    },
    {
        path: RoutesEnum.Root,
        element: (
            <AuthPage />
        ),
        children: [
            {  path: RoutesEnum.Profile,
                element: (
                    <ProfilePage />
                ),
            }
        ]
    },

];