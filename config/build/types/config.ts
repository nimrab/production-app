export type buildMode = 'production' | 'development'
export interface BuildPaths {
    entry: string
    build: string
    html: string
}

export interface BuildEnv {
    mode:buildMode
    port: number
}
export interface BuildOptions {
    mode:buildMode
    paths: BuildPaths
    isDev: boolean
    port: number
}