import React from "react";
import {
    Box,
    Typography
} from "@mui/material";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import blogService from "services/blogService";

function BlogHeader() {
    const [isBlogLoading, setBlogLoading] = React.useState(true);
    const [blogs, setBlogs] = React.useState([]);

    React.useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        await blogService.GetLastBlogs().then((res) => {
            if (res.data && res.data.isSuccessful) {
                setBlogs(res.data.data);
            }
        }).finally(() => {
            setBlogLoading(false);
        });

    }

    return (
        <>
            <Box sx={{ height: 300, width: "100%", position: "absolute", top: 85, left: 0, background: "url("+process.env.REACT_APP_CDN_URL +"images/blogBg.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.5 }}>
            </Box>

            <Box sx={{ height: 150, width: "100%", position: "absolute", top: 235, left: 0, background: "linear-gradient(180deg, rgba(15, 20, 31, 0) -28.24%, #192239 100%)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            </Box>

            <Box sx={{ height: 250, width: "100%", maxWidth: 1500, position: "absolute", top: 110, left: 0, right: 0, marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }}>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    style={{
                        "--swiper-pagination-color": "#fff",
                        "--swiper-navigation-color": "#fff",
                    }}
                >
                    {
                        blogs.map((item, i) =>
                            <SwiperSlide key={i}>
                                <Box sx={{ background: "transparent", display: "flex", width: "100%", height: 100, justifyContent: "center", alignItems: "center", mt: 10 }}>
                                    <Box sx={{ width: 1000, display: "flex", justifyContent: "center", alignItems: "center", px: 3 }}>
                                        <Box sx={{ mr: 3 }}>
                                            <Typography sx={{ fontSize: 26, fontWeight: 800, width: 75, textAlign: "center" }}>{item.shortDate.split('.')[0]}</Typography>
                                            <Typography sx={{ fontSize: 21, fontWeight: 400, width: 75, textAlign: "center" }}>{item.shortDate.split('.')[1].toUpperCase()}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography component="h3" variant="h3">{item.title}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        )
                    }
                </Swiper>

                {/* <Carousel sx={{ width: "100%", maxWidth: 1300 }}
                    NextIcon={<ChevronRight sx={{ fontSize: isNonMobile ? 100 : 50 }} />}
                    PrevIcon={<ChevronLeft sx={{ fontSize: isNonMobile ? 100 : 50 }} />}
                    navButtonsAlwaysVisible={true}
                    indicators={false}
                    navButtonsProps={{
                        style: {
                            backgroundColor: 'transparent',
                            borderRadius: 0
                        }
                    }}
                >
                    
                </Carousel> */}
            </Box>
        </>

    );
};
export default BlogHeader;
