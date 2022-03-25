/* eslint-disable @typescript-eslint/no-empty-interface */
import type { RecalculateRaw, SubmissionRaw } from '../ResponseType'

export class VisualizerSubmitEvent extends CustomEvent<SubmissionRaw> {}
export class VisualizerStartEvent extends CustomEvent<void> {}
export class VisualizerEndEvent extends CustomEvent<void> {}
export class RecalculateStartEvent extends CustomEvent<RecalculateRaw> {}
export class RecalculateEndEvent extends CustomEvent<RecalculateRaw> {}

declare global {
  interface WindowEventMap {
    submit: VisualizerSubmitEvent
    start: VisualizerStartEvent
    end: VisualizerEndEvent
    recalculatestart: RecalculateStartEvent
    recalculateend: RecalculateEndEvent
  }
}
