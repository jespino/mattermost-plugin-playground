import React from 'react';

import * as manifest from '../../manifest';

import BadgesStory from './stories/badges_story';

import './playground.scss';

type Props = {}
type State = {
    currentStory: string;
}

const stories = {
    Badges: BadgesStory,
};

export default class Playground extends React.PureComponent<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            currentStory: 'Badges',
        };
    }

    private renderStoriesList = (): React.ReactNode => {
        return (
            <ul>
                {Object.keys(stories).map((name) => (<li onClick={() => this.setState({currentStory: name})} key={name}>{name}</li>))}
            </ul>
        );
    }

    private renderCurrentStory = (): React.ReactNode => {
        const CurrentStory = stories[this.state.currentStory];
        return <CurrentStory/>;
    }

    public render(): React.ReactNode {
        return (
            <div className='Playground'>
                <div className='navbar'>
                    <div className='navbar-main'>
                        <span className='navbar-title'>{'Mattermost Playground'}</span>
                    </div>
                    <button
                        className='icon-close close-icon navbar-icon'
                        onClick={(): void => WebappUtils.browserHistory.push('/')}
                    />
                </div>
                <div className='body'>
                    <div className='body-nav'>
                        {this.renderStoriesList()}
                    </div>
                    <div className='story'>
                        {this.renderCurrentStory()}
                    </div>
                </div>
            </div>
        );
    }
}
