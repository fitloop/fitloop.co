Routines can be made up of progression+level or specific exercise.


{
  name: 'Strength Routine',
  creatorId: '3eefq3q3434',
  description: 'lorem ipsum',
  elements: [
    {
      type: 'section',
      title: 'Dynamic Stretches'
    },
    {
      type: 'exercise',
      exerciseId: 'exerciseId'
    },
    {
      type: 'note',
      text: 'Next up are paired exercises'
    },
    {
      type: 'pair',
      first: pushupProgression,
      rest: 90,
      second: rowProgression,
    },
    {
      type: 'pair',
      first: pullupProgression,
      rest: 90,
      second: dipsProgression,
      condition: {
        pushupProgression >= diamond pushups,
        rowsProgression >= horizontalRows
      }
    },
    {
      type: 'pair',
      first: squatProgression,
      rest: 90,
      second: lsitProgression,
    }
  ]
}



Name
Days a Week
Description

Sections
Notes
Exercise
Progression + (Optional Level)
Rests
Paired Exercises


Should be able to:
-------------------
Export as a nice PDF
Buildable with a tool
Render interactive routine
Create a day's log
