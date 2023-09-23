'use client'

import ReactPlayer from 'react-player';

const TrailerPlayer = ({ url }) => {
    return (
        <div className='aspect-video mx-auto mt-5 w-full bg-black'>
            <ReactPlayer
                width={'100%'}
                height={'100%'}
                url={url}
                pip={true}
                controls={true}
            />
        </div>
    );
};

export default TrailerPlayer;
