import React from 'react';

const {FileSearchResultItem} = window.Components;

import './file_search_result_item_story.scss';

export default function FileSearchResultItemStory(): React.ReactNode {
    return (
        <div className='FileSearchResultItemStory'>
            <div className='list-result-items'>
                <FileSearchResultItem
                    fileInfo={{
                        id: 'test-id',
                        name: 'pdf.pdf',
                        extension: 'pdf',
                        size: 123456,
                        create_at: 123465,
                    }}
                    teamName={}
                />
                <FileSearchResultItem
                    fileInfo={{
                        id: 'test-id',
                        name: 'docx file.docx',
                        extension: 'docx',
                        size: 123456,
                        create_at: 123465,
                    }}
                />
                <FileSearchResultItem
                    fileInfo={{
                        id: 'test-id',
                        name: 'very long filename with spaces.docx',
                        extension: 'docx',
                        size: 123456,
                        create_at: 123465,
                    }}
                />
                <FileSearchResultItem
                    fileInfo={{
                        id: 'test-id',
                        name: 'verylongfilenamewithoutspaces.docx',
                        extension: 'docx',
                        size: 123456,
                        create_at: 123465,
                    }}
                />
                <FileSearchResultItem
                    fileInfo={{
                        id: 'test-id',
                        name: 'huge-file.wmv',
                        extension: 'wmv',
                        size: 123456000000000000000,
                        create_at: 123465,
                    }}
                />
                <FileSearchResultItem
                    fileInfo={{
                        id: 'test-id',
                        name: 'zero-size-file',
                        extension: '',
                        size: 0,
                        create_at: 123465,
                    }}
                />
            </div>
        </div>
    );
}
