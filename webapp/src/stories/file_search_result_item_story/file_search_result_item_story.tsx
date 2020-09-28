import React, {useState} from 'react';

import {id as pluginId} from '../../manifest';

import {Team} from 'mattermost-redux/types/teams';
import {FileInfo} from 'mattermost-redux/types/files';

const {FileSearchResultItem, ViewImageModal} = window.Components;

import './file_search_result_item_story.scss';

function getPublicSamplePath(filename: string): string {
    return `/plugins/${pluginId}/public/sample-files/${filename}`;
}

type Props = {
    teamName: string;
}

export default function FileSearchResultItemStory(props: Props): React.ReactNode {
    const files = [
        {
            id: 'test-id',
            name: 'pdf.sample.pdf',
            post_id: 'post-test-id',
            link: getPublicSamplePath('pdf.sample.pdf'),
            has_image_preview: false,
            extension: 'pdf',
            size: 123456,
            create_at: 123465,
            post_id: 'test-post-id',
        },
        {
            id: 'test-id',
            post_id: 'post-test-id',
            has_image_preview: false,
            name: 'docx file.docx',
            extension: 'docx',
            size: 123456,
            create_at: 123465,
        },
        {
            id: 'test-id',
            post_id: 'post-test-id',
            has_image_preview: false,
            name: 'very long filename with spaces.docx',
            extension: 'docx',
            size: 123456,
            create_at: 123465,
        },
        {
            id: 'test-id',
            post_id: 'post-test-id',
            has_image_preview: false,
            name: 'verylongfilenamewithoutspaces.docx',
            extension: 'docx',
            size: 123456,
            create_at: 123465,
        },
        {
            id: 'test-id',
            post_id: 'post-test-id',
            has_image_preview: false,
            name: 'huge-file.wmv',
            extension: 'wmv',
            size: 123456000000000000000,
            create_at: 123465,
        },
        {
            id: 'test-id',
            post_id: 'post-test-id',
            has_image_preview: false,
            name: 'zero-size-file',
            extension: '',
            size: 0,
            create_at: 123465,
        },
        {
            id: 'test-id',
            post_id: 'post-test-id',
            name: 'image.sample.png',
            link: getPublicSamplePath('image.sample.png'),
            has_image_preview: true,
            extension: 'png',
            size: 123456,
            create_at: 123465,
        },
    ];
    const [selectedFileInfo, setSelectedFileInfo] = useState(-1);
    return (
        <div className='FileSearchResultItemStory'>
            <div className='list-result-items'>
                {files.map((fileInfo: FileInfo, idx: number): React.ReactNode => (
                    <FileSearchResultItem
                        key={idx}
                        fileInfo={fileInfo}
                        teamName={props.teamName}
                        onClick={(): void => setSelectedFileInfo(idx)}
                    />
                ))}
            </div>
            <ViewImageModal
                show={selectedFileInfo >= 0}
                onModalDismissed={(): void => setSelectedFileInfo(-1)}
                startIndex={selectedFileInfo >= 0 ? selectedFileInfo : 0}
                fileInfos={files}
            />
        </div>
    );
}
