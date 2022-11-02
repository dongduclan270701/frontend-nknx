import React, {useState, useEffect} from 'react';
import "Assets/scss/NewsLate.scss"
import NewsItem from './NewsItem';

const NewsLate = () => {
    const [news,setNews] = useState([])
    useEffect(() => {
        setNews([{
            id:1,
            title:"NKN Monthly Report: June 2022",
            content:"Highlights Binance adding $NKN/$BUSD support nPool | An easy and secure NKN mining pool by our community Binance launches...",
            by:"NKN",
            time:"01/07/2022"
        },
        {
            id:2,
            title:"NKN Monthly Report: June 2022",
            content:"Highlights Binance adding $NKN/$BUSD support nPool | An easy and secure NKN mining pool by our community Binance launches...",
            by:"NKN",
            time:"01/07/2022"
        },
        {
            id:3,
            title:"NKN Monthly Report: June 2022",
            content:"Highlights Binance adding $NKN/$BUSD support nPool | An easy and secure NKN mining pool by our community Binance launches...",
            by:"NKN",
            time:"01/07/2022"
        },
        {
            id:4,
            title:"NKN Monthly Report: June 2022",
            content:"Highlights Binance adding $NKN/$BUSD support nPool | An easy and secure NKN mining pool by our community Binance launches...",
            by:"NKN",
            time:"01/07/2022"
        },
        {
            id:5,
            title:"NKN Monthly Report: June 2022",
            content:"Highlights Binance adding $NKN/$BUSD support nPool | An easy and secure NKN mining pool by our community Binance launches...",
            by:"NKN",
            time:"01/07/2022"
        },
        {
            id:6,
            title:"NKN Monthly Report: June 2022",
            content:"Highlights Binance adding $NKN/$BUSD support nPool | An easy and secure NKN mining pool by our community Binance launches...",
            by:"NKN",
            time:"01/07/2022"
        },
        {
            id:6,
            title:"NKN Monthly Report: June 2022",
            content:"Highlights Binance adding $NKN/$BUSD support nPool | An easy and secure NKN mining pool by our community Binance launches...",
            by:"NKN",
            time:"01/07/2022"
        }])

    }, []);

    return (
        <div className='card col_4 col_start_auto col_end_auto row_4 card_padding_normal card_overflow'>
            <div className='news'>
                <div className='news__header'>
                    <h3 className="news__heading">Latest News</h3>
                    <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" className="news__icon"><rect width="22" height="22" rx="3" fill="#363165"></rect><path d="M5.969 7.633a.602.602 0 00-.192-.438L4.547 5.72V5.5h3.855l2.954 6.508L13.952 5.5h3.664v.219L16.551 6.73c-.091.073-.128.174-.11.301v7.438c-.018.127.019.228.11.3l1.039 1.012V16h-5.195v-.219l1.066-1.039c.055-.055.082-.091.082-.11a.47.47 0 00.027-.19V8.425l-2.953 7.547h-.41L6.734 8.426v5.058a.739.739 0 00.192.575l1.394 1.695v.219H4.383v-.22l1.394-1.694a.627.627 0 00.192-.575V7.633z" fill="#fff"></path></svg>
                </div>
                <div>
                    { news.map((item,index)=>{
                        return(
                            index < 5 && <NewsItem key={index}/>
                        )
                    })}
                </div>
                <div className='news__footer'>
                    <div className="news__pages">
                        Showing 5 of
                        10
                    </div>
                    <div className='news__buttons'>
                        <div className='news__button news__button_next'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsLate;
