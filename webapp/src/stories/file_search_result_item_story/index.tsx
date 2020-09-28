// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getCurrentTeam} from 'mattermost-redux/selectors/entities/teams';
import {GlobalState} from 'mattermost-redux/types/store';

import FileSearchResultItem from './file_search_result_item_story';

function mapStateToProps(state: GlobalState): {teamName: string} {
    const currentTeam = getCurrentTeam(state);
    return {
        teamName: currentTeam && currentTeam.name,
    };
}

export default connect(mapStateToProps)(FileSearchResultItem);
