// global.d.ts
declare module 'undici-types' {
    export interface Request {}
    export interface Response {}
    export interface FormData {}
    export interface Headers {}
    export interface MessageEvent {}
    export interface WebSocket {}
    export interface EventSource {}
    export interface CloseEvent {}
}

declare module 'csstype' {
    export interface Properties {}
}