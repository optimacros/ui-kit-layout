import type { TaskInfo, TaskListParams } from './TaskInfo'

export type Route = ApplicationListRoute | ApplicationRoute | TaskListRoute | TaskOutputRoute

export type ApplicationRoute = ApplicationHomeRoute | ApplicationFileRoute

export enum RouteName {
    applicationList = 'APPLICATION_LIST',
    application = 'APPLICATION',
    applicationFile= 'APPLICATION_FILE',
    applicationHome = 'APPLICATION_HOME',
    taskList = 'TASK_LIST',
    taskOutput = 'TASK_OUTPUT'
}

export type ApplicationListRoute = {
    name: RouteName.applicationList;
    filter?: string;
}

export type ApplicationFileRoute = {
    name: RouteName.applicationFile;
    applicationId: string;
    currentFilePath: string;
}

export type ApplicationHomeRoute = {
    name: RouteName.applicationHome;
    applicationId: string;
    currentFilePath: undefined;
}

export type TaskListRoute = {
    name: RouteName.taskList;
    filterBy?: {
        applicationId?: string;
        scriptId?: string;
    };
    currentTaskPid?: TaskInfo['pid'];
} & TaskListParams

export type TaskOutputRoute = {
    name: RouteName.taskOutput;
}
