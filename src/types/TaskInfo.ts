import type { ScriptLanguage } from './ScriptLanguage'
import type { TaskEvent } from './TaskEvent'
import type { TaskParams } from './TaskParams'
import type { UserInfo } from './UserInfo'

export type TaskStateChange = 'add' | 'remove'

export type TaskInfo<D extends Date | string = Date> = {
    pid: string;
    applicationId: string;
    parentPid?: string;
    scriptId: string;
    startedAt: D;
    status: 'started' | 'closed';
    owner: UserInfo['id'];
    events?: TaskEvent[];
    debugLevel: string;

    language: ScriptLanguage;
    startPath: string;
    startParams: TaskParams | undefined;
}

export type TaskList = {
    pid: string;
    applicationId: string;
    scriptId: string;
}[]

export const sortParameterValues = ['startedAt', 'path'] as const
export const sortOrderValues = ['asc', 'desc'] as const
export type SortParameter = (typeof sortParameterValues)[number]
export type SortOrder = (typeof sortOrderValues)[number]

export type TaskListParams = {
    sortBy?: {
        parameter?: SortParameter;
        order?: SortOrder;
    };
    filterBy?: {
        applicationId?: string;
        scriptId?: string;
    };
}
