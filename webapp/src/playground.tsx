import React from 'react';

import * as manifest from '../../manifest';

import {IntlProvider} from 'react-intl';

const WebappUtils = window.WebappUtils;

import BadgesStory from './stories/badges_story';
import MenuStory from './stories/menu_story';

import './playground.scss';

type Props = {}
type State = {
    currentStory: string;
}

const stories = {
    Badges: BadgesStory,
    Menus: MenuStory,
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
                {Object.keys(stories).map((name): React.ReactNode => (
                    <li
                        key={name}
                    >
                        <a
                            onClick={(): void => this.setState({currentStory: name})}
                            className={name === this.state.currentStory ? 'active' : ''}
                        >
                            {name}
                        </a>
                    </li>
                ))}
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
                        <IntlProvider
                            key={'en'}
                            locale={'en'}
                            messages={{}}
                            textComponent='span'
                            wrapRichTextChunksInFragment={false}
                        >
                            {this.renderCurrentStory()}
                        </IntlProvider>
                    </div>
                </div>
            </div>
        );
    }
}
