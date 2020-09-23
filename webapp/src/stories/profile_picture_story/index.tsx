// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getCurrentUser} from 'mattermost-redux/selectors/entities/users';

import ProfilePictureStory from './profile_picture_story';

function mapStateToProps(state: any): {currentUser: any} {
    return {
        currentUser: getCurrentUser(state),
    };
}

export default connect(mapStateToProps)(ProfilePictureStory);
