import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function manifest():MetadataRoute.Manifest{return{name:"ROAYN",short_name:"ROAYN",description:"Creating Digital Experiences That Inspire.",start_url:"/",display:"standalone",background_color:"#070B14",theme_color:"#070B14",icons:[{src:"/icons/favicon.svg",sizes:"any",type:"image/svg+xml"},{src:"/icons/apple-touch-icon.png",sizes:"180x180",type:"image/png"}]}}
