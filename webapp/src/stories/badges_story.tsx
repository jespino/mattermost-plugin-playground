import React from 'react';

const {Badge, BotBadge, GuestBadge} = window.Components;

export default function BadgesStory(): React.ReactNode {
    return (
        <div className='BadgesStory'>
            <div><Badge>{'Custom Badge'}</Badge></div>
            <div><BotBadge/></div>
            <div><GuestBadge/></div>
        </div>
    );
}
