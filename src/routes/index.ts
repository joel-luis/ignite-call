export const USERS = '/users'

export const REGISTER_USERNAME = (username: string) =>
  `/register?username=${username}`

export const CONNECT_CALENDAR = '/register/connect-calendar'

export const SCHEDULE_USERNAME = (username?: string) => `/schedule/${username}`

export const UPDATE_PROFILE = '/register/update-profile'

export const TIME_INTERVALS = '/register/time-intervals'
