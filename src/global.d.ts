//для того, чтобы TS распознавал что создержится внутри файлов, которые мы хотим импортировать
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames
    export = classNames
}