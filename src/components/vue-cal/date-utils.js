export const now = new Date()
// Cache today's date for better isDateToday() performances. Formatted without leading 0.
export const todayFormatted = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`

// eslint-disable-next-line
Date.prototype.addDays = function (days) {
  let date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

// eslint-disable-next-line
Date.prototype.subtractDays = function (days) {
  let date = new Date(this.valueOf())
  date.setDate(date.getDate() - days)
  return date
}

// eslint-disable-next-line
Date.prototype.getWeek = function () {
  let d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
}

export const isDateToday = date => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` === todayFormatted
}

/* export const getDateOfWeek = (w, y) => {
  let d = (1 + (w - 1) * 7) // 1st of January + 7 days for each week.
  return new Date(y, 0, d)
} */

// Returns today if it's Monday or previous Monday otherwise.
export const getPreviousMonday = (date = null) => {
  let prevMonday = (date && new Date(date.valueOf())) || new Date()
  prevMonday.setDate(prevMonday.getDate() - (prevMonday.getDay() + 6) % 7)
  return prevMonday
}

/**
 * @param {int} The month number, 0 based.
 * @param {int} The year, not zero based, required to account for leap years.
 * @return {Date[]} List with date objects for each day of the month.
 */
export const getDaysInMonth = (month, year) => {
  let date = new Date(year, month, 1)
  let days = []
  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }

  return days
}

/* export const getDaysInWeek = (date) => {
  date = getPreviousMonday(date)
  let days = []
  for (let i = 0; i < 7; i++) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }

  return days
} */

const nth = (d) => {
  if (d > 3 && d < 21) return 'th'
  switch (d % 10) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
    default: return 'th'
  }
}

export const formatTime = (time, format = 'HH:mm') => {
  const H = Math.floor(time / 60)
  const h = H % 12 ? H % 12 : 12
  const am = H < 12 ? 'am' : 'pm'
  const m = Math.floor(time % 60)
  const timeObj = {
    H,
    h,
    HH: (H < 10 ? '0' : '') + H,
    hh: (h < 10 ? '0' : '') + h,
    am,
    AM: am.toUpperCase(),
    m,
    mm: (m < 10 ? '0' : '') + m
  }

  return format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, (m, contents) => timeObj[contents.replace(/\{|\}/g, '')])
}

export const formatDate = (date, format = 'yyyy-mm-dd', localizedTexts) => {
  const d = date.getDate()
  const m = date.getMonth() + 1
  const dateObj = {
    D: date.getDay(), // 0 to 6.
    DD: localizedTexts.weekDays[(date.getDay() - 1 + 7) % 7][0], // M to S.
    DDD: localizedTexts.weekDays[(date.getDay() - 1 + 7) % 7].substr(0, 3), // Mon to Sun.
    DDDD: localizedTexts.weekDays[(date.getDay() - 1 + 7) % 7], // Monday to Sunday.
    d, // 1 to 31.
    dd: (d < 10 ? '0' : '') + d, // 01 to 31.
    S: nth(d), // st, nd, rd, th.
    m, // 1 to 12.
    mm: (m < 10 ? '0' : '') + m, // 01 to 12.
    mmm: localizedTexts.months[m - 1].substr(0, 3), // Jan to Dec.
    mmmm: localizedTexts.months[m - 1], // January to December.
    yyyy: date.getFullYear(), // 2018.
    yy: date.getFullYear().toString().substr(2, 4) // 18.
  }

  return format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, (m, contents) => {
    const result = dateObj[contents.replace(/\{|\}/g, '')]
    return result !== undefined ? result : contents
  })
}

export const daysBetween = (d1, d2, round = 'ceil', useAbs = true) => {
  const ONEDAY = 1000 * 60 * 60 * 24
  const d1MS = d1.getTime()
  d2.setHours(23, 59, 59, 999)
  const d2MS = d2.getTime()

  let differenceMs = 0
  if (useAbs) {
    differenceMs = Math.abs(d1MS - d2MS)
  } else {
    differenceMs = d1MS - d2MS
  }

  if (round === 'ceil') return Math.ceil(differenceMs / ONEDAY)
  if (round === 'floor') return Math.floor(differenceMs / ONEDAY)
  return Math.round(differenceMs / ONEDAY)
}
