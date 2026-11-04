// Service worker: fires the focus-timer completion even when no new tab is
// open. The page sets/clears the 'pomodoro-end' alarm (see
// src/widgets/PomodoroWidget/alarm.ts); on alarm we advance the persisted
// state and, if the user opted in, show a notification.
//
// Kept dependency-free on purpose — the state shape mirrors
// src/widgets/PomodoroWidget/pomodoro.ts (completePhase). The write is
// idempotent with the page's own expiry effect, so double-firing is benign.

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name !== 'pomodoro-end') return

  const stored = await chrome.storage.local.get(['pomodoro:state', 'pomodoro:notify'])
  const state = stored['pomodoro:state']
  if (!state || state.status !== 'running' || state.endsAt === undefined) return
  if (state.endsAt > Date.now() + 1000) return // stale alarm; a newer one exists

  const finished = state.phase
  const next = finished === 'focus' ? 'break' : 'focus'
  await chrome.storage.local.set({
    'pomodoro:state': { phase: next, status: 'idle', finished },
  })

  if (stored['pomodoro:notify']) {
    chrome.notifications.create('pomodoro', {
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: finished === 'focus' ? 'Focus session complete' : 'Break over',
      message:
        finished === 'focus'
          ? 'Nice work — time for a break. Open a new tab to start it.'
          : 'Back to it — open a new tab to start the next focus session.',
      priority: 1,
    })
  }
})
