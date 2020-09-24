// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {useState} from 'react';

const {EmojiPicker} = window.Components;

import './emoji_picker_story.scss';

export default function EmojiPickerStory(): React.ReactNode {
    const [filter, setFilter] = useState('');
    const [selected, setSelected] = useState('');
    return (
        <div className='EmojiPickerStory'>
            <h2>{'EmojiPicker'}</h2>
            <EmojiPicker
                onEmojiClick={(emoji: string): void => setSelected(emoji.aliases[0])}
                filter={filter}
                handleFilterChange={(value: string): void => setFilter(value)}
            />
            <h3>{'Selected emoji'}</h3>
            <span>{selected ? selected : 'none'}</span>
        </div>
    );
}
