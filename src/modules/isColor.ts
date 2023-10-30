/*
* @Author: fw168
* @Date: 2023-10-30 08:51:44
* @Last Modified by: fw168
* @Last Modified time: 2023-10-30 08:51:44
*/
const isColor = (value: string): boolean => {
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
}
export default isColor
