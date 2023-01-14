import { useState } from 'react'
import dayjs from 'dayjs'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { getWeekDays } from '../../utils/get-week-days'
import {
  CalendarActions,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTable,
  CalendarTitle,
} from './styles'

export function Calendar() {
  const [currentDate, setCurrendDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month')
    setCurrendDate(previousMonthDate)
  }

  function handleNextMounth() {
    const previousMonthDate = currentDate.add(1, 'month')
    setCurrendDate(previousMonthDate)
  }

  const shortWeekdDays = getWeekDays({ short: true })
  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>
        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Previous month">
            <CaretLeft />
          </button>
          <button onClick={handleNextMounth} title="Next month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>
      <CalendarTable>
        <thead>
          <tr>
            {shortWeekdDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalendarDay>1</CalendarDay>
            </td>
            <td>
              <CalendarDay>2</CalendarDay>
            </td>
            <td>
              <CalendarDay>3</CalendarDay>
            </td>
          </tr>
        </tbody>
      </CalendarTable>
    </CalendarContainer>
  )
}
