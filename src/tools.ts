/*
* @Author: fw168
* @Date: 2023-10-27 15:20:55
* @Last Modified by: fw168
* @Last Modified time: 2023-10-27 15:20:55
*/
import isColor from "./modules/isColor"
import {regexp} from "./regexp"

/**
 * 浮点数、整数转换千分位
 * @param target 需要转换的数字或数字字符串
 */
const decimalNumberThousandFormat = (target: string | number) => {
    if (!target) return ""
    const reg = /(?=\B(\d{3})+$)/g
    let _target = String(target)
    let _targetArr = _target.split('.')
    const integerResult = _targetArr[0].replace(reg, ',')
    if (_targetArr.length === 2) {
        // 存在小数
        return integerResult + '.' + _targetArr[1]
    }
    return integerResult
}
/**
 * 替换协议
 * http => https
 * @param url 链接地址
 */
const changeAgreement = (url: string) => {
    let _url
    let agreement = url.substring(0, 5)
    if (agreement === 'http:') {
        _url = 'https:' + url.substring(5, url.length)
    }
    return _url || url
}
/**
 * 根据证件号获取生日
 * @param idCard 证件号
 * @param separate 分隔符 默认-
 */
const idCartGetBirthday = (idCard: string, separate: string = '-') => {
    if (!regexp.idCard.reg.test(idCard)) {
        return ''
    }
    return idCard.substring(6, 10) + separate + idCard.substring(10, 12) + separate + idCard.substring(12, 14)
}
export const tools = {
    isColor,
    decimalNumberThousandFormat,
    changeAgreement,
    idCartGetBirthday
}

/**
 * 联合类型转交叉类型
 */
export type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never

// 深度只读
export type DeepReadonly<T extends Record<string | symbol, any>> = {
    readonly [K in keyof T]: DeepReadonly<T[K]>
}
