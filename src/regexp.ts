/*
* @Author: fw168
* @Date: 2023-10-27 15:21:40
* @Last Modified by: fw168
* @Last Modified time: 2023-10-27 15:21:40
*/

interface regexpInterFace {
    [key: string]: {
        reg: RegExp,
        regMsg: string
    }
}

export const regexp: regexpInterFace = {
    telephone: {
        reg: /^0\d{2,3}-?\d{7,8}$|^1[3456789]\d{9}$/,
        regMsg: '请输入正确格式的固定电话或手机号码'
    },
    registrationNumber: {
        reg: /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/,
        regMsg: '请输入正确的统一社会信用代码'
    },
    phone: {
        reg: /^1[3456789]\d{9}$/,
        regMsg: '请输入11位有效格式手机号'
    },
    idCard: {
        reg: /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/,
        regMsg: '请输入18位有效格式身份证号'
    },
    passport: {
        reg: /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,
        regMsg: '请输入正确格式的护照'
    },
    englishNameUnlimited: {
        reg: /(^([a-zA-Z]+\s)*[a-zA-Z]+$)/,
        regMsg: '请输入正确格式的英文名'
    },
    englishNameLimited: {
        reg: /^(\b[A-Z][a-z]*\s)*\b[A-Z][a-z]*$/,
        regMsg: '请输入正确格式的英文名（必须以大写字母开头）'
    }
}
