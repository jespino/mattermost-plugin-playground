import React from 'react';

import Badge from 'components/widgets/badges/badge';
import GuestBadge from 'components/widgets/badges/guest_badge';
import BotBadge from 'components/widgets/badges/bot_badge';

type Props = {}
type State = {}

export default class Playground extends React.PureComponent<Props, State> {
    public render(): React.ReactNode {
        return (
            <div className='BadgesStory'>
                <div><Badge>{'Custom Badge'}</Badge></div>
                <div><BotBadge/></div>
                <div><GuestBadge/></div>
            </div>
        );
    }
}
