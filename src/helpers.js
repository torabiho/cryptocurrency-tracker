export const sortByKey = (array, key, isAscending) => {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        if (isAscending) {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}