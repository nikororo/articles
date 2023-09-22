type Mods = Record<string, boolean | string>

export function classNames(mainClassName: string, mods: Mods, additional: string[]): string {
    return [
        mainClassName,
        ...additional,
        Object.entries(mods)
            .filter(([_className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}
