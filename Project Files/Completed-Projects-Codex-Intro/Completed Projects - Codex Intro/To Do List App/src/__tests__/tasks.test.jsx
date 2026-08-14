import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import App from '../App'

const addTask = (text) => {
  fireEvent.change(screen.getByLabelText('New task'), {
    target: { value: text },
  })
  fireEvent.click(screen.getByRole('button', { name: 'Add Task' }))
}

beforeEach(() => {
  localStorage.clear()
  vi.restoreAllMocks()
  delete window.AudioContext
  delete window.webkitAudioContext
})

describe('Todo App', () => {
  // PASSING: the app should render with a visible heading.
  it('renders the app title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Todo' })).toBeInTheDocument()
  })

  // FAILING: this test documents a missing feature.
  //
  // The app currently adds a task even when the input is empty.
  // Your job: open TaskInput.jsx and add a guard in handleAdd() so that
  // clicking "Add Task" with a blank field does nothing.
  // Once you do, this test will go green.
  it('does not add a task when the input is empty', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: 'Add Task' }))

    const items = screen.queryAllByRole('listitem')
    expect(items).toHaveLength(0)
  })

  it('plays a short sound when a task is marked complete', () => {
    const start = vi.fn()
    const stop = vi.fn()
    const connect = vi.fn()
    const setValueAtTime = vi.fn()
    const exponentialRampToValueAtTime = vi.fn()

    class FakeAudioContext {
      constructor() {
        this.currentTime = 0
        this.destination = {}
        this.state = 'running'
      }

      createOscillator() {
        return {
          connect,
          frequency: { setValueAtTime, exponentialRampToValueAtTime },
          start,
          stop,
          type: '',
        }
      }

      createGain() {
        return {
          connect,
          gain: { setValueAtTime, exponentialRampToValueAtTime },
        }
      }
    }

    window.AudioContext = FakeAudioContext

    render(<App />)

    fireEvent.change(screen.getByLabelText('New task'), {
      target: { value: 'Write sound test' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Add Task' }))

    const checkbox = screen.getByRole('checkbox', {
      name: 'Mark "Write sound test" as complete',
    })

    fireEvent.click(checkbox)
    expect(start).toHaveBeenCalledTimes(1)
    expect(stop).toHaveBeenCalledTimes(1)

    fireEvent.click(checkbox)
    expect(start).toHaveBeenCalledTimes(1)
  })

  it('shows an edit input when a task is double-clicked', () => {
    render(<App />)
    addTask('Edit this task')

    fireEvent.doubleClick(screen.getByText('Edit this task'))

    expect(screen.getByRole('textbox', { name: 'Edit "Edit this task"' })).toHaveValue(
      'Edit this task',
    )
  })

  it('saves edited task text when Enter is pressed', () => {
    render(<App />)
    addTask('Old task text')

    fireEvent.doubleClick(screen.getByText('Old task text'))
    const editInput = screen.getByRole('textbox', { name: 'Edit "Old task text"' })
    fireEvent.change(editInput, { target: { value: 'New task text' } })
    fireEvent.keyDown(editInput, { key: 'Enter' })

    expect(screen.getByText('New task text')).toBeInTheDocument()
    expect(screen.queryByText('Old task text')).not.toBeInTheDocument()
  })

  it('saves edited task text when the edit input loses focus', () => {
    render(<App />)
    addTask('Blur save task')

    fireEvent.doubleClick(screen.getByText('Blur save task'))
    const editInput = screen.getByRole('textbox', { name: 'Edit "Blur save task"' })
    fireEvent.change(editInput, { target: { value: 'Saved on blur' } })
    fireEvent.blur(editInput)

    expect(screen.getByText('Saved on blur')).toBeInTheDocument()
    expect(screen.queryByText('Blur save task')).not.toBeInTheDocument()
  })

  it('cancels edited task text when Escape is pressed', () => {
    render(<App />)
    addTask('Keep original text')

    fireEvent.doubleClick(screen.getByText('Keep original text'))
    const editInput = screen.getByRole('textbox', { name: 'Edit "Keep original text"' })
    fireEvent.change(editInput, { target: { value: 'Discard this text' } })
    fireEvent.keyDown(editInput, { key: 'Escape' })

    expect(screen.getByText('Keep original text')).toBeInTheDocument()
    expect(screen.queryByText('Discard this text')).not.toBeInTheDocument()
  })

  it('keeps the original task text when a blank edit is saved', () => {
    render(<App />)
    addTask('Do not blank me')

    fireEvent.doubleClick(screen.getByText('Do not blank me'))
    const editInput = screen.getByRole('textbox', { name: 'Edit "Do not blank me"' })
    fireEvent.change(editInput, { target: { value: '   ' } })
    fireEvent.keyDown(editInput, { key: 'Enter' })

    expect(screen.getByText('Do not blank me')).toBeInTheDocument()
  })
})
