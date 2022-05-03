interface GlobalSettings {
  startTime: Date
  endTime: Date
  cameraNumber: number
}

export const globalSettings: GlobalSettings = {
  startTime: new Date(),
  endTime: new Date(),
  cameraNumber: 0
}

// TODO: set false in production build
export const isDevelop = true as const
