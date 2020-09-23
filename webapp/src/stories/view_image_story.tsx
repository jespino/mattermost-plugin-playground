// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {useState} from 'react';

import {id as pluginId} from '../manifest';

const {ViewImageModal} = window.Components;

function getPublicSamplePath(filename: string): string { 
    return `/plugins/${pluginId}/public/sample-files/${filename}`;
}

export default function ViewImageStory(): React.ReactNode {
    const [openPreviewIdx, setOpenPreviewIdx] = useState(-1);
    return (
        <div className='ViewImageStory'>
            <h2>{'One text file'}</h2>
            <button onClick={(): void => setOpenPreviewIdx(0)}>{'Open'}</button>
            <ViewImageModal
                show={openPreviewIdx === 0}
                onModalDismissed={(): void => setOpenPreviewIdx(-1)}
                startIndex={0}
                fileInfos={[
                    {
                        extension: 'txt',
                        id: 'playground-id',
                        has_image_preview: false,
                        link: getPublicSamplePath('file.sample.txt'),
                        name: 'file.sample.txt',
                    },
                ]}
            />
            <h2>{'One image file'}</h2>
            <button onClick={(): void => setOpenPreviewIdx(1)}>{'Open'}</button>
            <ViewImageModal
                show={openPreviewIdx === 1}
                onModalDismissed={(): void => setOpenPreviewIdx(-1)}
                startIndex={0}
                fileInfos={[
                    {
                        extension: 'png',
                        has_image_preview: true,
                        link: getPublicSamplePath('image.sample.png'),
                        name: 'image.sample.png',
                    },
                ]}
            />
            <h2>{'One pdf file'}</h2>
            <button onClick={(): void => setOpenPreviewIdx(2)}>{'Open'}</button>
            <ViewImageModal
                show={openPreviewIdx === 2}
                onModalDismissed={(): void => setOpenPreviewIdx(-1)}
                startIndex={0}
                fileInfos={[
                    {
                        extension: 'pdf',
                        id: 'playground-id',
                        has_image_preview: false,
                        link: getPublicSamplePath('pdf.sample.pdf'),
                        name: 'pdf.sample.pdf',
                    },
                ]}
            />
            <h2>{'Three files'}</h2>
            <button onClick={(): void => setOpenPreviewIdx(3)}>{'Open'}</button>
            <ViewImageModal
                show={openPreviewIdx === 3}
                onModalDismissed={(): void => setOpenPreviewIdx(-1)}
                startIndex={0}
                fileInfos={[
                    {
                        extension: 'txt',
                        id: 'playground-id',
                        has_image_preview: false,
                        link: getPublicSamplePath('file.sample.txt'),
                        name: 'file.sample.txt',
                    },
                    {
                        extension: 'png',
                        has_image_preview: true,
                        link: getPublicSamplePath('image.sample.png'),
                        name: 'image.sample.png',
                    },
                    {
                        extension: 'pdf',
                        id: 'playground-id',
                        has_image_preview: false,
                        link: getPublicSamplePath('pdf.sample.pdf'),
                        name: 'pdf.sample.pdf',
                    },
                ]}
            />
        </div>
    );
}
