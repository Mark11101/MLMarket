const ObjectTypes = {
  human: {
    title: 'Человек',
    analyticalDetectors: [
      'Нахождение человека / лица',
      'Распознавание лиц',
      'Распознавание поз',
      'Распознавание усталости',
      'Распознавание драк',
      'Распознавание бега',
      'Распознавание опьянения',
    ],
    aggregateDetectors: [
      'Траектория движения',
      'Тепловая карта',
      'Нахождение объекта в зоне',
      'Пересечение границ зоны',
      'Счетчик количества',
    ]
  },
  car: {
    title: 'Автомобиль',
    analyticalDetectors: [
      'Распознавание ГРЗ',
    ],
    aggregateDetectors: [
      'Счетчик количества',
      'Траектория движения',
    ]
  },
  subjects: {
    title: 'Предметы',
    analyticalDetectors: [
      'Детектор оставленных предметов',
    ]
  },
  fireOrSmoke: {
    title: 'Огонь / дым',
    analyticalDetectors: [
      'Нахождение дыма и огня',
    ]
  },
}

export default ObjectTypes
