import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery, Tabs, Tab, Typography, Box, useTheme, IconButton, Menu,MenuItem, CircularProgress } from "@mui/material";

import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import  FlexBetween from "./Styling/FlexBetween";
import HomeIcon from "../components/icons/HomeIcon";
import SendIcon from "../components/icons/SendIcon";
import DocumentIcon from "../components/icons/DocumentIcon";
import BuyIcon from "../components/icons/BuyIcon";
import GameIcon from "../components/icons/GameIcon";
import { LoadingButton } from "@mui/lab";
import Image from "next/image";
import Row from "./Styling/Row";
export default function Header() {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const { t } = useTranslation("public");
  <header className="flex justify-between items-center p-6 bg-transparent">
  {/* Logo */}
  <div className="w-12 animate-fadeIn"> {/* Animasyon eklenmiş logo */}
    <Link href="/">
      <a>
        <Image 
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/fundprio/icon-light.png`} 
          alt="Fundprio Logo" 
          width={30} 
          height={30} 
          className="cursor-pointer"
        />
      </a>
    </Link>
  </div>

  {/* Navigation Menu */}
  <nav className="hidden md:flex justify-center items-center animate-fadeIn"> {/* Animasyon eklenmiş menü */}
    <Link href="/">
      <a className="flex items-center">
        
        <span className="ml-4 text-sm">{t("public:home")}</span>
      </a>
    </Link>
    {/* Repeat for other menu items */}
  </nav>

  {/* Mobile Menu Toggle */}
  <button 
    onClick={() => setIsMobileMenuToggled(prev => !prev)} 
    className="md:hidden">
    {/* Menu or Close icon depending on isMobileMenuToggled */}
  </button>

  {/* Mobile Menu Items */}
  {isMobileMenuToggled && (
    <div className="absolute top-0 right-0 min-w-full bg-[#171D25] md:hidden">
      <div className="flex justify-end p-4">
        <button onClick={() => setIsMobileMenuToggled(prev => !prev)}>
       
        </button>
      </div>
      <div className="flex flex-col items-center gap-12">
        
        {/* Repeat for other mobile menu items */}
      </div>
    </div>
  )}
</header> 
//   const { t } = useTranslation();
//   const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
//   const navigate = useRouter();
 
//   const isNonMobileScreens = useMediaQuery("(min-width:1000px)"); 

//   const background = "#171D25";


//   if (isNonMobileScreens) {
//     return (
//       <FlexBetween p="1.5rem" backgroundColor={"transparent"}>

//         <Box sx={{ width: 50 }}>
//           <Box component="img" alt="Fundprio Logo" onClick={() => {}}   sx={{ cursor: "pointer", width: 30 }} />
//         </Box>

//         <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <FlexBetween gap="2rem" padding="0.1rem 5rem">
//         <MenuItem component={Link} href={"/"} onClick={() => { }}>
//               <HomeIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("home")}</Typography>
//             </MenuItem>
//           <MenuItem component={Link} href={"/"} onClick={() => { }}>
//               <GameIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("howitworks")}</Typography>
//             </MenuItem>
//           <MenuItem component={Link} href={"/"} onClick={() => { }}>
//               <BuyIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("pricing")}</Typography>
//             </MenuItem>
//           <MenuItem component={Link} href={"/"} onClick={() => { }}>
//               <DocumentIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("blog")}</Typography>
//             </MenuItem>
//           <MenuItem component={Link} href={"/"} onClick={() => { }}>
//               <SendIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("contact")}</Typography>
//             </MenuItem>
//           </FlexBetween>
//         </Box>

//         <Box>
//           <LoadingButton sx={{ borderRadius: "6px", height: 45, width: 157, textTransform: "initial", px: 3, fontSize: 15, fontWeight: 800, background: "#ffffff", '&:hover': { background: "#ffffff" }, color: "#131927" }}  loadingIndicator={<CircularProgress color="primary" size="1rem" />} id={"launchAppButton"}>{t("launchappbutton")}</LoadingButton>
//         </Box>

//       </FlexBetween>

//     );
//   }
//   else {
//     return (
//       <FlexBetween padding="1.5rem" backgroundColor={"transparent"}>
//         <FlexBetween>
//           <Box component="img" alt="Fundprio Logo" onClick={() => {}}  
//             sx={{
//               cursor: "pointer",
//               width: 30
//             }}
//           />
//         </FlexBetween>
//         <FlexBetween>
//           <IconButton onClick={() => setIsMobileMenuToggled((prev) => !prev)} sx={{ width: 50, height: 50 }}>
//             <Menu sx={{ width: 30, height: 30 }} />
//           </IconButton>
//         </FlexBetween>


//         {!isNonMobileScreens && isMobileMenuToggled && (
//           <Box
//             position="fixed"
//             right="0"
//             bottom="0"
//             height="100%"
//             zIndex="10"
//             maxWidth="500px"
//             minWidth="300px"
//             backgroundColor={background}
//           >
//             <Box display="flex" justifyContent="flex-end" p="1rem">
//               <IconButton onClick={() => setIsMobileMenuToggled((prev) => !prev)}>
//                 <Close />
//               </IconButton>
//             </Box>
//             <FlexBetween
//               display="flex"
//               flexDirection="column"
//               justifyContent="center"
//               alignItems="center"
//               gap="3rem"
//             >
//                <MenuItem component={Link} href={"/"} onClick={() => { }}>
//                 <HomeIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("home")}</Typography>
//               </MenuItem>
//                <MenuItem component={Link} href={"/"} onClick={() => { }}>
//                 <GameIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("howitworks")}</Typography>
//               </MenuItem>
//                <MenuItem component={Link} href={"/"} onClick={() => { }}>
//                 <BuyIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("pricing")}</Typography>
//               </MenuItem>
//                <MenuItem component={Link} href={"/"} onClick={() => { }}>
//                 <DocumentIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("blog")}</Typography>
//               </MenuItem>
//                <MenuItem component={Link} href={"/"} onClick={() => { }}>
//                 <SendIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("contact")}</Typography>
//               </MenuItem>

//               <LoadingButton sx={{ borderRadius: "6px", height: 45, width: 157, textTransform: "initial", px: 3, fontSize: 15, fontWeight: 800, background: "#ffffff", '&:hover': { background: "#ffffff" }, color: "#131927" }} onClick={()=>{}} loadingIndicator={<CircularProgress color="primary" size="1rem" />}>{t("launchappbutton")}</LoadingButton>
//             </FlexBetween>
//           </Box>
//         )}
//       </FlexBetween>
//     // <header>
//     //   <div className='bg-red-100 border-b-2 border-red-900 p-5 flex justify-center items-center space-x-6'>
//     //     <Link href='/'>
//     //       <h2 className='text-3xl font-mono font-semibold text-red-900 hover:underline'>
//     //         {t('app_title')}
//     //       </h2>
//     //     </Link>
//     //     <LanguageSwitcher />
//     //   </div>
//     // </header>
//   );
// }
}
