
import { useState, useEffect } from "react";
import { AnimateOnScroll, FadeIn, SlideIn } from "./ui/motion";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "JavaScript (ES6+)", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "GraphQL", icon: "graphql" },
  { name: "REST APIs", icon: "api" },
  { name: "Redux", icon: "redux" },
  { name: "React Query", icon: "reactquery" },
  { name: "AWS", icon: "aws" },
  { name: "PostgreSQL", icon: "postgresql" }
];

// Colors for tech logos
const colors: Record<string, string> = {
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  react: "#61DAFB",
  nextjs: "#000000",
  nodejs: "#339933",
  tailwind: "#06B6D4",
  graphql: "#E10098",
  api: "#FF5733",
  redux: "#764ABC",
  reactquery: "#FF4154",
  aws: "#FF9900",
  postgresql: "#4169E1"
};

// SVG icons for technologies
const techIcons: Record<string, React.ReactNode> = {
  javascript: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M3 3h18v18H3V3zm10.71 12.7c.39-.09.69-.16 1.22-.37 1.35-.53 2.03-1.3 2.03-2.38 0-.56-.16-1.05-.29-1.32-.34-.72-.87-1.19-1.53-1.44-.69-.25-1.34-.35-2.46-.35-1.25 0-2.28.32-3.03.96-.74.62-1.08 1.41-1.17 2.66l.02.06h1.91c0-.47.05-.82.19-1.13.29-.6.93-.88 1.94-.88.93 0 1.53.26 1.84.79.15.25.19.43.19.94 0 .56-.12.84-.7 1.2-.35.22-.7.36-1.37.56l-.87.23c-1.21.33-1.69.46-2.23.8-.87.54-1.25 1.32-1.25 2.42 0 .93.32 1.69.97 2.25.64.53 1.44.79 2.4.79 1 0 1.78-.22 2.62-.75.34-.21.68-.49 1.09-.91.02.35.09.63.19.88.1.25.23.45.38.6h2.17v-.08c-.36-.43-.53-.96-.58-1.75v-2.72c0-1.06-.01-1.3-.1-1.67-.16-.67-.45-1.17-.9-1.57-.57-.5-1.24-.8-2.04-.94-.37-.06-1.15-.11-1.9-.11-1.94 0-3.24.44-4.03 1.36-.65.75-.95 1.65-.97 2.94v.08h1.87c0-.64.13-1.19.38-1.54.38-.55 1.07-.79 2.07-.79.7 0 1.22.13 1.58.4.37.26.54.64.54 1.21 0 .12 0 .25-.02.37-.02.4-.13.69-.35.9-.21.22-.5.38-1.07.6l-1.07.32c-.9.27-1.34.44-1.8.7-.87.47-1.34 1.23-1.34 2.15 0 .63.22 1.2.62 1.63.41.45 1.03.7 1.75.7.48 0 .87-.09 1.25-.25.37-.17.75-.42 1.15-.78l.13-.12v.92h1.87v-.11c-.27-.21-.39-.53-.39-1v-3.09zm-2.94 3.38c-.23.14-.53.21-.85.21-.55 0-.82-.21-.82-.63 0-.36.13-.57.46-.75.32-.17.7-.29 1.57-.52l.69-.21v1.36l-.16.13c-.32.25-.63.34-.89.41z" />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  ),
  graphql: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M7 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2V7zm2 0h6v10H9V7zm10 0h-2v10h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    </svg>
  ),
  redux: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 0 0-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 0 1-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 0 0 1.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 0 0 1.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z" />
    </svg>
  ),
  reactquery: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M7.875 3.75a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Zm8.25 0a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Zm-8.25 8.25a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Zm8.25 0a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Zm4.5-5.626a2.626 2.626 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Zm0 8.25a2.626 2.626 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Zm-17.625 0a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Zm0-8.25a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Z" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M18.75 9c0-1.664-1.586-3-3.75-3-1.464 0-2.75.705-3.4 1.748-.23-.366-.438-.98-.518-1.512-.145-.976-.356-1.278-.585-1.278-.067 0-.203 0-.31.202-.096.183-.105.529-.096.75.45.803.102 1.377.413 2.147.102.24.16.414.262.705-.874.207-1.356.588-1.356 1.123 0 .318.225.608.6.851-.694.259-1.285.826-1.598 1.542-.7-.453-1.435-.778-2.105-.778-1.2 0-1.86.847-1.86 1.59 0 .328.22.695.581.788.298.078.77.096 1.337-.106.258.461.683.856 1.28 1.125 0 0-.414 1.338-2.394 1.338-.067 0-.134.035-.134.105 0 .078.039.105.115.105.077 0 .472-.098.578-.098 1.125 0 2.058.895 2.469 1.726.202.413.376.683.471.937.058.163.106.25.183.25.096 0 .269-.223.269-.443 0-.328-.289-.895-.596-1.24 1.01.096 1.932-.173 2.633-.761.395.195.826.318 1.26.375-.289.24-.48.645-.48 1.098 0 1.26 1.124 2.074 2.25 2.074.876 0 1.635-.376 1.942-1.144h.836c.434 0 .722-.415.722-.829 0-.356-.26-.616-.6-.616h-.195c0-.135 0-.75-.289-1.01h.635c.626 0 1.28-.627 1.28-1.425 0-.865-.725-1.528-1.538-1.528-.078 0-.87.075-.376.075-1.124 0-1.914-.946-1.914-2.003Zm-2.066 2.77c-.346 0-.63-.386-.63-.851 0-.472.284-.856.63-.856.346 0 .635.384.635.856 0 .465-.289.85-.635.85Z" />
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.482.415 6.682c.03.607.203 1.597.49 2.879s.69 2.783 1.193 4.152c.503 1.37 1.054 2.6 1.915 3.436.43.419 1.022.771 1.72.742.49-.02.933-.235 1.315-.552.186.245.385.352.566.451.228.125.45.21.68.266.413.103 1.12.241 1.948.1.282-.047.579-.139.875-.27.011.33.024.653.037.98.041 1.036.067 1.993.378 2.832.05.137.187.843.727 1.466.54.624 1.598 1.013 2.803.755.85-.182 1.931-.51 2.649-1.532.71-1.01 1.03-2.459 1.093-4.809.016-.127.035-.235.055-.336l.169.015h.02c.907.041 1.891-.088 2.713-.47.728-.337 1.279-.678 1.68-1.283.1-.15.21-.331.24-.643s-.149-.8-.446-1.025c-.595-.452-.969-.28-1.37-.197a6.27 6.27 0 0 1-1.202.146c1.156-1.947 1.985-4.015 2.458-5.845.28-1.08.437-2.076.45-2.947.013-.871-.058-1.642-.58-2.309C21.36.6 19.067.024 17.293.004c-.055-.001-.11-.002-.165-.001zm-.047.64c1.678-.016 3.822.455 5.361 2.422.346.442.449 1.088.437 1.884-.013.795-.16 1.747-.429 2.79-.522 2.02-1.508 4.375-2.897 6.488a.756.756 0 0 0 .158.086c.29.12.951.223 2.27-.048.332-.07.575-.117.827.075a.52.52 0 0 1 .183.425.704.704 0 0 1-.13.336c-.255.383-.758.746-1.403 1.045-.571.266-1.39.405-2.116.413-.364.004-.7-.024-.985-.113l-.018-.007c-.11 1.06-.363 3.153-.528 4.108-.132.77-.363 1.382-.804 1.84-.44.458-1.063.734-1.901.914-1.038.223-1.795-.017-2.283-.428-.487-.41-.71-.954-.844-1.287-.092-.23-.14-.528-.186-.926-.046-.398-.08-.885-.103-1.434a51.426 51.426 0 0 1-.03-2.523 3.061 3.061 0 0 1-1.552.76c-.689.117-1.304.002-1.671-.09a2.276 2.276 0 0 1-.52-.201c-.17-.091-.332-.194-.44-.397a.56.56 0 0 1-.057-.381.61.61 0 0 1 .218-.331c.198-.161.46-.251.855-.333.719-.148.97-.249 1.123-.37.13-.104.277-.314.537-.622a1.16 1.16 0 0 1-.003-.041 2.96 2.96 0 0 1-1.33-.358c-.15.158-.916.968-1.85 2.092-.393.47-.827.74-1.285.759-.458.02-.872-.211-1.224-.552-.703-.683-1.264-1.858-1.753-3.186-.488-1.328-.885-2.807-1.167-4.067-.283-1.26-.45-2.276-.474-2.766-.105-2.082.382-3.485 1.217-4.37.836-.885 1.982-1.22 3.099-1.284 2.005-.115 3.909.584 4.294.734.742-.504 1.698-.818 2.892-.798a7.39 7.39 0 0 1 1.681.218l.02-.009a6.854 6.854 0 0 1 .739-.214A9.626 9.626 0 0 1 17.08.642zm.152.67h-.146a8.74 8.74 0 0 0-1.704.192c1.246.552 2.187 1.402 2.85 2.25a8.44 8.44 0 0 1 1.132 1.92c.11.264.184.487.226.66.021.087.035.16.04.236.002.038.004.077-.012.144 0 .003-.005.01-.006.013.03.876-.187 1.47-.213 2.306-.02.606.135 1.318.173 2.095.036.73-.052 1.532-.526 2.319.04.048.076.096.114.144 1.254-1.975 2.158-4.16 2.64-6.023.258-1.003.395-1.912.407-2.632.01-.72-.124-1.242-.295-1.46-1.342-1.716-3.158-2.153-4.68-2.165zm-4.79.256c-1.182.003-2.03.36-2.673.895-.663.553-1.108 1.31-1.4 2.085-.347.92-.466 1.81-.513 2.414l.013-.008c.357-.2.826-.4 1.328-.516.502-.115 1.043-.151 1.533.039s.895.637 1.042 1.315c.704 3.257-.219 4.468-.559 5.382a9.61 9.61 0 0 0-.331 1.013c.043-.01.086-.022.129-.026.24-.02.428.06.54.108.342.142.577.44.704.78.033.089.057.185.071.284a.336.336 0 0 1 .02.127 55.14 55.14 0 0 0 .013 3.738c.023.538.057 1.012.1 1.386.043.373.104.657.143.753.128.32.315.739.653 1.024.338.284.823.474 1.709.284.768-.165 1.242-.394 1.559-.723.316-.329.505-.787.626-1.488.181-1.05.545-4.095.589-4.668-.02-.432.044-.764.182-1.017.142-.26.362-.419.552-.505.095-.043.184-.072.257-.093a5.956 5.956 0 0 0-.243-.325 4.456 4.456 0 0 1-.666-1.099 8.296 8.296 0 0 0-.257-.483c-.133-.24-.301-.54-.477-.877-.352-.675-.735-1.493-.934-2.29-.198-.796-.227-1.62.281-2.201.45-.516 1.24-.73 2.426-.61-.035-.105-.056-.192-.115-.332a7.817 7.817 0 0 0-1.041-1.764c-1.005-1.285-2.632-2.559-5.146-2.6h-.115zm-6.642.052c-.127 0-.254.004-.38.011-1.01.058-1.965.351-2.648 1.075-.684.724-1.134 1.911-1.036 3.876.019.372.181 1.414.459 2.652.277 1.238.67 2.695 1.142 3.982.473 1.287 1.046 2.407 1.59 2.937.274.265.512.372.728.363.217-.01.478-.135.797-.518a43.244 43.244 0 0 1 1.81-2.048 3.497 3.497 0 0 1-1.167-3.15c.103-.739.117-1.43.105-1.976-.012-.532-.05-.886-.05-1.107a.336.336 0 0 1 0-.019v-.005l-.001-.006v-.001a9.893 9.893 0 0 1 .592-3.376c.28-.744.697-1.5 1.322-2.112-.614-.202-1.704-.51-2.884-.568a7.603 7.603 0 0 0-.38-.01zM18.199 6.9c-.679.009-1.06.184-1.26.413-.283.325-.31.895-.134 1.597.175.703.537 1.489.877 2.142.17.327.335.621.468.86.134.24.232.41.292.555.055.134.116.252.178.362.263.52.683.85 1.285.998.602.15 1.304.004 1.979-.238.696-.248 1.455-.7 1.98-1.43.526-.73.72-1.737.336-2.748-.386-1.01-1.088-1.688-2.037-2.105a5.96 5.96 0 0 0-1.814-.52c-.76-.08-1.46-.087-2.151-.078z" />
    </svg>
  )
};

export default function About() {
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  // Animate skills one by one
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedSkills(prev => {
        if (prev.length >= skills.length) {
          return prev;
        }
        return [...prev, skills[prev.length].name];
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 items-center">
          <AnimateOnScroll>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="highlight">About Me</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm Devraj, a software engineer with a passion for crafting clean, 
                  user-friendly web applications. My journey in tech began in 2017 when I dove into web development.
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege of working at a start-up, 
                  a large corporation, and a student-led design studio. My main focus these days 
                  is building accessible, inclusive products and digital experiences.
                </p>
                <p>
                  When I'm not at the computer, I'm usually rock climbing, playing basketball, 
                  or exploring new hiking trails.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        
        {/* Skills section at the bottom */}
        <AnimateOnScroll className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Technologies</h3>
          <Card className="p-8 bg-background border border-border shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <FadeIn 
                  key={skill.name}
                  className={`flex items-center gap-3 transition-all duration-300 ${animatedSkills.includes(skill.name) ? 'opacity-100' : 'opacity-30'}`}
                  delay={index * 0.1}
                >
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white" 
                    style={{ backgroundColor: colors[skill.icon] || "#666" }}
                  >
                    {techIcons[skill.icon] || <span className="text-xs font-bold">{skill.icon.charAt(0).toUpperCase()}</span>}
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </FadeIn>
              ))}
            </div>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
