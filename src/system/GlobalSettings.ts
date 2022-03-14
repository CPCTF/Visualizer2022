interface GlobalSettings {
  startTime: Date
  endTime: Date
}

export const globalSettings: GlobalSettings = {
  startTime: new Date(),
  endTime: new Date()
}

// TODO: set false in production build
export const isDevelop = true as const
