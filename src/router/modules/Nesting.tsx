import React from "react";
import lazyLoad from "@/router/utils/lazyLoad";
import { LayoutIndex } from "@/router/constant";
import { RouteObject } from "@/router/interface";


// echarts 模块
const nestingRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "Nesting"
		},
        children: [
			{
				path: "/nesting/about",
				element: lazyLoad(React.lazy(() => import("@/views/nesting/about/index"))),
				meta: {
					requiresAuth: true,
					title: "About",
					key: "NestingAbout"
				}
			},
            {
				path: "/nesting/content",
				element: lazyLoad(React.lazy(() => import("@/views/nesting/content/index"))),
				meta: {
					requiresAuth: true,
					title: "Content",
					key: "NestingContent"
				}
			},
        ]
    }    
]

export default nestingRouter;