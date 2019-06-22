import _ from "lodash"

/* tslint:disable-next-line */
export const prn = x => (console.log(x), x);

// returns the maximum value of an array. If a fn is passed,
// equivalent to max(arr.map(fn))
export const max = (arr, fn) => {
    return _.max((fn && _.map(arr,fn)) || arr);
}