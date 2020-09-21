import {id as pluginId} from './manifest';
import {getCurrentTeam} from 'mattermost-redux/selectors/entities/teams';

import Playground from './playground';

const WebappUtils = window.WebappUtils;

export default class Plugin {
    // eslint-disable-next-line no-unused-vars
    public initialize(registry: any, store: any): void {
        registry.registerNeedsTeamRoute('/', Playground);
        registry.registerSlashCommandWillBePostedHook((message: string, args: any): any => {
            if (message.indexOf('/playground') === 0) {
                const currentTeam: any = getCurrentTeam(store.getState());
                WebappUtils.browserHistory.push(`/${currentTeam.name}/${pluginId}/`);
                return {};
            }
            return null;
        });
        registry.registerMainMenuAction('Playground', (): void => {
            const currentTeam: any = getCurrentTeam(store.getState());
            WebappUtils.browserHistory.push(`/${currentTeam.name}/${pluginId}/`);
        }, null);
    }
}

window.registerPlugin(pluginId, new Plugin());
