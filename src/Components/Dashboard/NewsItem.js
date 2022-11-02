import React from 'react';

const NewsItem = () => {
    return (
        <div className='news__item'>
            <div className='news-item__header'>
                <div className='news-item__date'>01/07/2022</div>
                <div className='news-item__authour'>By NKN</div>
            </div>
            <div className='news-item__title text_wrap_none'>NKN Monthly Report: June 2022</div>
            <div className='news-item__content'>Highlights Binance adding $NKN/$BUSD support nPool | An easy and secure NKN mining pool by our community Binance launches...</div>
            <a target="_blank" href="https://medium.com/nknetwork/nkn-monthly-report-june-2022-32d5d1dc4eaa?source=rss----74a530315018---4" className="news-item__more">
                Read More
                <svg viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg"><path d="M9.813 2.75H.374a.389.389 0 00-.281.125.338.338 0 00-.094.25v1.75c0 .104.031.198.094.281a.457.457 0 00.281.094h9.438v1.438c0 .208.072.385.218.53a.724.724 0 00.531.22.724.724 0 00.532-.22l2.687-2.687A.723.723 0 0014 4a.723.723 0 00-.219-.531L11.094.78a.724.724 0 00-.531-.219.724.724 0 00-.532.22.723.723 0 00-.219.53V2.75z" fill="#5769DF"></path></svg></a>
            <div className='news-item__divider'></div>
        </div>
    );
}

export default NewsItem;
