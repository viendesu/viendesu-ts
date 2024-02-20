export function constructMaybe<T, From>(
    from_: From | null | undefined,
    f: (val: From) => T
): T | null | undefined {
    if (from_ == null) {
        return null
    } else if (from_ == undefined) {
        return undefined
    } else {
        return f(from_)
    }
}

