'use client'

import { useState } from 'react';

const ContentInfo = ({ info }) => {

    const [showMore, setShowMore] = useState(false)

    return (
        <div className="movie-normal-text">Nội dung :
            <p className={`movie-normal-text mt-1 mb-0  ${showMore ? '' : 'line-clamp-1'}`} dangerouslySetInnerHTML={{ __html: info.content }} />
            <button aria-label="Xem thêm" className="text-secondary underline underline-offset-2" onClick={() => { setShowMore(!showMore) }}>{showMore ? 'Ẩn bớt' : 'Xem thêm'}</button>
        </div>
    );
};

export default ContentInfo;
