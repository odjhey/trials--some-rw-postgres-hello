import type { Prisma, Hello } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.HelloCreateArgs>({
  hello: {
    one: { data: { message: 'String9357731' } },
    two: { data: { message: 'String5070669' } },
  },
})

export type StandardScenario = ScenarioData<Hello, 'hello'>
