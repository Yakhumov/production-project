
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {},  additional: string[] = []): string {
    const clasList =  [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))         
            .map(([className]) => className)
    ]
       return clasList.join(' ');
}



