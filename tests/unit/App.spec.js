import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import { messages } from '@/utils'

const factory = context => {
  return mount(App, {
    ...context,
  })
}

const threeDigit = 999

describe('App.vue first render', () => {
  test('Speed 1X should be active', () => {
    const wrapper = factory()
    expect(wrapper.find('.ze-speed:nth-child(1).active').exists()).toBe(true)
  })

  test('Play/Pause button should not be visible', () => {
    const wrapper = factory()
    expect(wrapper.find('.ze-play-pause-btn-container').isVisible()).toBe(false)
  })

  test('Timer should be 00:00', () => {
    const wrapper = factory()
    expect(wrapper.find('.ze-timer-container .ze-time:nth-child(1)').text()).toBe('00')
    expect(wrapper.find('.ze-timer-container .ze-time:nth-child(3)').text()).toBe('00')
  })

  test('Start button should show "Start"', () => {
    const wrapper = factory()
    expect(wrapper.find('.ze-btn-primary').text()).toBe('Start')
  })

  test('Minutes input should be empty', () => {
    const wrapper = factory()
    expect(wrapper.find('input[type=number]').element.value).toBe('')
  })
})

describe('Input value is 0', () => {
  test(`Message: "${messages.required}" when value set is 0`, () => {
    const wrapper = factory()
    const input = wrapper.find('input[type=number]')
    input.setValue(0)
    const message = wrapper.find('.ze-message')
    expect(message.exists()).toBe(true)
    expect(message.text()).toBe(messages.required)
  })

  test(`Message: "${messages.zero}" when clicked on start button`, () => {
    const wrapper = factory()
    const input = wrapper.find('input[type=number]')
    const start = wrapper.find('.ze-btn-primary')
    input.setValue(0)
    const message = wrapper.find('.ze-message')
    start.trigger('click')
    expect(message.isVisible()).toBe(true)
    expect(message.text()).toBe(messages.zero)
  })
})

describe(`Input value ${threeDigit}`, () => {
  test(`Message: "${messages.tooHigh}" when value changed`, () => {
    const wrapper = factory()
    const input = wrapper.find('input[type=number]')
    input.setValue(threeDigit)
    const message = wrapper.find('.ze-message')
    expect(message.exists()).toBe(true)
    expect(message.text()).toBe(messages.tooHigh)
  })

  test(`Start button show "Restart" when start clicked`, () => {
    const wrapper = factory()
    const input = wrapper.find('input[type=number]')
    const start = wrapper.find('.ze-btn-primary')
    input.setValue(threeDigit)
    start.trigger('click')
    expect(start.text()).toBe('Restart')
  })

  test(`Play/Pause shows and pause icon is active when start clicked`, () => {
    const wrapper = factory()
    const input = wrapper.find('input[type=number]')
    const start = wrapper.find('.ze-btn-primary')
    const playPauseBtn = wrapper.find('.ze-play-pause-btn-container')
    const pauseIcon = wrapper.find('.ze-pause')
    input.setValue(threeDigit)
    start.trigger('click')
    expect(playPauseBtn.exists()).toBe(true)
    expect(pauseIcon.isVisible()).toBe(true)
  })
})
