export const eventDataValues = ['console', 'status', 'debug'] as const
export type EventData = (typeof eventDataValues)[number]

export type TaskEvent = {
    scriptId: string;
    pid: string;
    parentPid?: string;
    rootPid?: string;
    state: 'started' | 'stopped';
    time: number;
    data?: [EventData, ...Array<unknown>];
    error?: string | undefined;
    stack?: string | undefined;
    result?: string;
}

export type EventType = 'console' | 'status' | 'debug' | 'error' | 'params'
