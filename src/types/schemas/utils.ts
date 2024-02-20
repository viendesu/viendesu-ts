export const parseMaybeDate = (d: string | null | undefined): Date | null => {
    if (d != null && d != undefined) {
        return new Date(d)
    }
    return null;
};
