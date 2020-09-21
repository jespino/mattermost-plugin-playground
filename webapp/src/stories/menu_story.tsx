// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import './menu_story.scss';

const {InfoIcon, MenuIcon, Menu, MenuWrapper} = window.Components;

export default function MenuStory(): React.ReactNode {
    return (
        <div className='MenuStory'>
            <h2>{'Simple menu'}</h2>
            <div style={{position: 'relative'}}>
                <Menu ariaLabel='aria-label'>
                    <Menu.ItemAction
                        onClick={() => alert('first-item')}
                        ariaLabel='aria label item 1'
                        text='Text item 1'
                        icon={<InfoIcon/>}
                        show={true}
                        extraText='Extra text item 1'
                    />
                    <Menu.ItemAction
                        onClick={() => alert('second item')}
                        ariaLabel='aria label item 2'
                        text='Text item 2'
                        show={true}
                        extraText='Extra text item 2'
                    />
                    <Menu.ItemAction
                        onClick={() => alert('third item')}
                        ariaLabel='aria label item 3'
                        show={true}
                        text='Text item 3'
                    />
                </Menu>
            </div>

            <h2>{'One group'}</h2>
            <div style={{position: 'relative'}}>
                <Menu ariaLabel='aria label'>
                    <Menu.Header>
                        {'Header Text'}
                    </Menu.Header>
                    <Menu.Group>
                        <Menu.ItemAction
                            onClick={() => alert('first-item')}
                            ariaLabel='aria label item 1'
                            text='Text item 1'
                            icon={<InfoIcon/>}
                            show={true}
                            extraText='Extra text item 1'
                        />
                        <Menu.ItemAction
                            onClick={() => alert('second item')}
                            ariaLabel='aria label item 2'
                            text='Text item 2'
                            show={true}
                            extraText='Extra text item 2'
                        />
                        <Menu.ItemAction
                            onClick={() => alert('third item')}
                            ariaLabel='aria label item 3'
                            show={true}
                            text='Text item 3'
                        />
                    </Menu.Group>
                </Menu>
            </div>

            <h2>{'Multiple groups'}</h2>
            <div style={{position: 'relative'}}>
                <Menu ariaLabel='aria label'>
                    <Menu.Group>
                        <Menu.ItemAction
                            onClick={() => alert('first-item')}
                            ariaLabel='aria label item 1'
                            text='Text item 1'
                            icon={<InfoIcon/>}
                            show={true}
                            extraText='Extra text item 1'
                        />
                        <Menu.ItemAction
                            onClick={() => alert('second item')}
                            ariaLabel='aria label item 2'
                            text='Text item 2'
                            show={true}
                            extraText='Extra text item 2'
                        />
                    </Menu.Group>
                    <Menu.Group>
                        <Menu.ItemAction
                            onClick={() => alert('third item')}
                            ariaLabel='aria label item 3'
                            show={true}
                            text='Text item 3'
                        />
                    </Menu.Group>
                </Menu>
            </div>

            <h2>{'Menu wrapper'}</h2>
            <div style={{position: 'relative'}}>
                <MenuWrapper>
                    <strong>
                        <span>{'Title'}</span>
                        <MenuIcon/>
                    </strong>
                    <Menu ariaLabel='aria label'>
                        <Menu.ItemAction
                            onClick={() => alert('first-item')}
                            ariaLabel='aria label item 1'
                            text='Text item 1'
                            icon={<InfoIcon/>}
                            show={true}
                            extraText='Extra text item 1'
                        />
                        <Menu.ItemAction
                            onClick={() => alert('second item')}
                            ariaLabel='aria label item 2'
                            text='Text item 2'
                            show={true}
                            extraText='Extra text item 2'
                        />
                        <Menu.ItemAction
                            onClick={() => alert('third item')}
                            ariaLabel='aria label item 3'
                            text='Text item 3'
                            show={true}
                        />
                    </Menu>
                </MenuWrapper>
            </div>
        </div>
    );
}
