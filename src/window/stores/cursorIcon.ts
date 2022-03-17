let cursorIcon = ''

export const getCursorIcon = () => {
  return cursorIcon
}

export const updateCursorIcon = (value: string) => {
  cursorIcon = value
}

export const clearCursorIcon = () => {
  cursorIcon = ''
}

export const applyCursorIcon = () => {
  document.body.style.cursor = cursorIcon || 'default'
}
