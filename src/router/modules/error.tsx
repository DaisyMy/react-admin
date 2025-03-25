import React from "react";
import lazyLoad from "@/router/utils/lazyLoad";
import { RouteObject } from "@/router/interface";


// 错误页面模块
const errorRouter: Array<RouteObject> = [
	{
		path: "/404",
		element: lazyLoad(React.lazy(() => import("@/views/errorPage/404"))),
		meta: {
			requiresAuth: false,
			title: "404页面",
			key: "404"
		}
	},
];

export default errorRouter;