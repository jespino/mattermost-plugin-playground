// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {Client4} from 'mattermost-redux/client';

import {id as pluginId} from '../../manifest';

import './profile_picture_story.scss';

const {ProfilePicture} = window.Components;

export default function ProfilePictureStory(props: {currentUser: any}): React.ReactNode {
    return (
        <div className='ProfilePictureStory'>
            <h2>{'Profile Pictures by size'}</h2>
            {['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map((size): React.ReactNode => (
                <span
                    className='profile-picture'
                    key={size}
                >
                    <ProfilePicture
                        src={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                        userId={props.currentUser.id}
                        size={size}
                    />
                </span>
            ))}

            <h2>{'Profile Pictures with statuses'}</h2>
            {['online', 'offline', 'away', 'dnd', 'ooo'].map((status: string): React.ReactNode => (
                <span
                    className='profile-picture'
                    key={status}
                >
                    <ProfilePicture
                        src={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                        userId={props.currentUser.id}
                        size='md'
                        status={status}
                    />
                </span>
            ))}

            <h2>{'Profile Pictures with overwritten name and images'}</h2>
            <span className='profile-picture'>
                <ProfilePicture
                    src={`/plugins/${pluginId}/public/sample-files/image.sample.png`}
                    userId={props.currentUser.id}
                    hasMention={false}
                    isBusy={false}
                    isEmoji={false}
                    isRHS={false}
                    profileSrc={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    username={props.currentUser.username}
                    overwriteIcon={null}
                    overwriteName={null}
                />
            </span>
            <span className='profile-picture'>
                <ProfilePicture
                    src={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    userId={props.currentUser.id}
                    hasMention={false}
                    isBusy={false}
                    isEmoji={false}
                    isRHS={false}
                    profileSrc={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    username={props.currentUser.username}
                    overwriteIcon={null}
                    overwriteName={'Overwritten Name'}
                />
            </span>
            <span className='profile-picture'>
                <ProfilePicture
                    src={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    userId={props.currentUser.id}
                    hasMention={false}
                    isBusy={false}
                    isEmoji={false}
                    isRHS={false}
                    profileSrc={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    username={props.currentUser.username}
                    overwriteIcon={`/plugins/${pluginId}/public/sample-files/image.sample.png`}
                    overwriteName={null}
                />
            </span>
            <span className='profile-picture'>
                <ProfilePicture
                    src={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    userId={props.currentUser.id}
                    hasMention={false}
                    isBusy={false}
                    isEmoji={false}
                    isRHS={false}
                    profileSrc={`/plugins/${pluginId}/public/sample-files/image.sample.png`}
                    username={props.currentUser.username}
                    overwriteIcon={null}
                    overwriteName={null}
                />
            </span>

            <h2>{'Profile Pictures with other settings'}</h2>
            <span className='profile-picture'>
                <ProfilePicture
                    src={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    userId={props.currentUser.id}
                    hasMention={true}
                    isBusy={false}
                    isEmoji={false}
                    isRHS={false}
                    profileSrc={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    username={props.currentUser.username}
                    overwriteIcon={null}
                    overwriteName={null}
                />
            </span>
            <span className='profile-picture'>
                <ProfilePicture
                    src={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    userId={props.currentUser.id}
                    hasMention={false}
                    isBusy={true}
                    isEmoji={false}
                    isRHS={false}
                    profileSrc={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    username={props.currentUser.username}
                    overwriteIcon={null}
                    overwriteName={null}
                />
            </span>
            <span className='profile-picture'>
                <ProfilePicture
                    src={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    userId={props.currentUser.id}
                    hasMention={false}
                    isBusy={false}
                    isEmoji={true}
                    isRHS={false}
                    profileSrc={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    username={props.currentUser.username}
                    overwriteIcon={null}
                    overwriteName={null}
                />
            </span>
            <span className='profile-picture'>
                <ProfilePicture
                    src={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    userId={props.currentUser.id}
                    hasMention={false}
                    isBusy={false}
                    isEmoji={false}
                    isRHS={true}
                    profileSrc={Client4.getProfilePictureUrl(props.currentUser.id, props.currentUser.last_picture_update)}
                    username={props.currentUser.username}
                    overwriteIcon={null}
                    overwriteName={null}
                />
            </span>
        </div>
    );
}
