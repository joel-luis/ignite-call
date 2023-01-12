import { z } from 'zod'
import { ConvertTimeStringToMinutes } from '../../../utils/convert-time-string-to-minutes'

export const timeIntervalsFormSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        enabled: z.boolean(),
        startTime: z.string(),
        endTime: z.string(),
      }),
    )
    .length(7)
    .transform((intervals) => intervals.filter((interval) => interval.enabled))
    .refine((intervals) => intervals.length > 0, {
      message: 'Você precisa selecionar pelo menos um dia da semana',
    })
    .transform((intervals) => {
      return intervals.map((interval) => {
        return {
          weekDay: interval.weekDay,
          startTimeInMinutes: ConvertTimeStringToMinutes(interval.startTime),
          endTimeInMinutes: ConvertTimeStringToMinutes(interval.endTime),
        }
      })
    })
    .refine(
      (intervals) => {
        return intervals.every(
          (interval) =>
            interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes,
        )
      },
      {
        message:
          'O horário de término deve ser pelo menos 1h distante do início.',
      },
    ),
})

export type TimeIntervalsFormInput = z.input<typeof timeIntervalsFormSchema>
export type TimeIntervalsFormOutput = z.output<typeof timeIntervalsFormSchema>

export const intervals = [
  { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
  { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
  { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
  { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
  { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
  { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
  { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
]
