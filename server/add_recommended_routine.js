// console.log(Exercises.findOne({slug: 'wall-extensions'})._id);

if (Routines.find().count() === 2) {
  var routines = [
    {
      name: 'Recommended Beginner Routine (Beta)',
      slug: 'bwf-recommended-beginner-routine',
      description: 'Pick one level from each section. Perform this workout 3 days a week with at least one rest day in between workout days. Start your first workout with the first level of each section. Try and add repetitions each workout. Once you can do 3x8, move to the next level in the progression.',
      source: 'http://reddit.com/r/bodyweightfitness',
      progressions: [
        {
          notes: 'Warmup',
          name: 'Dynamic Stretches (Do all, 5-10 reps each)',
          exercises: [
            {
              exerciseId: Exercises.findOne({slug: 'wall-extensions'})._id
            },
            {
              exerciseId: Exercises.findOne({slug: 'band-dislocates'})._id
            },
            {
              exerciseId: Exercises.findOne({slug: 'cat-camel-bends'})._id
            },
            {
              exerciseId: Exercises.findOne({slug: 'full-body-circles'})._id
            },
            {
              exerciseId: Exercises.findOne({slug: 'front-and-side-leg-swings'})._id
            },
            {
              exerciseId: Exercises.findOne({slug: 'wrist-mobility-exercises'})._id
            }
          ]
        },
        {
          notes: 'Move swiftly from one exercise to the next.',
          name: 'Bodyline Work (Do all, 10 to 60s hold each)',
          exercises: [
            {
              exerciseId: Exercises.findOne({slug: 'plank'})._id
            },
            {
              exerciseId: Exercises.findOne({slug: 'arch'})._id
            },
            {
              exerciseId: Exercises.findOne({slug: 'side-plank'})._id,
              notes: 'Do both sides'
            },
            {
              exerciseId: Exercises.findOne({slug: 'hollow'})._id
            },
            {
              exerciseId: Exercises.findOne({slug: 'reverse-plank'})._id
            }
          ]
        },
        {
          notes: 'Sweating yet? If not, pick one of these activities.',
          name: 'Activity (Pick one, 10-20 reps)',
          exercises: [
            {
              exerciseId: Exercises.findOne({slug: 'squat-jumps'})._id
            },
            {
              exerciseId: Exercises.findOne({slug: 'burpees'})._id
            }
          ]
        },
        {
          notes: 'Skill Work',
          name: 'Handstand Progression (5-10 min)',
          exercises: [
            {
              prefix: 'Level 1',
              exerciseId: Exercises.findOne({slug: 'stomach-to-wall-handstand-practice'})._id
            },
            {
              prefix: 'Level 2',
              exerciseId: Exercises.findOne({slug: 'freestanding-handstand'})._id
            }
          ]
        },
        {
          name: 'Support Practice (1-2 min)',
          exercises: [
            {
              prefix: 'Level 1',
              exerciseId: Exercises.findOne({slug: 'parallel-bar-support'})._id
            },
            {
              prefix: 'Level 2 (optional)',
              exerciseId: Exercises.findOne({slug: 'ring-support'})._id
            }
          ]
        },
        {
          notes: 'Next up are paired exercises. Do a set of the first exercise, rest 90 seconds, then do a set of the second exercise and rest 90 seconds. Repeat until you\'ve done all sets. \n\nStrength Work - First Pair',
          name: 'Pullup Progression 3x(5-8)',
          exercises: [
            {
              prefix: 'Level 1',
              exerciseId: Exercises.findOne({slug: 'negative-pull-up'})._id
            },
            {
              prefix: 'Level 2',
              exerciseId: Exercises.findOne({slug: 'pull-up'})._id
            },
            {
              prefix: 'Level 3',
              exerciseId: Exercises.findOne({slug: 'l-sit-pull-up'})._id
            },
            {
              prefix: 'Level 4',
              exerciseId: Exercises.findOne({slug: 'pull-over'})._id
            }
          ]
        },
        {
          name: 'Dipping Progression 3x(5-8)',
          exercises: [
            {
              prefix: 'Level 1 (Dips)',
              exerciseId: Exercises.findOne({slug: 'parallel-bar-dips'})._id
            },
            {
              prefix: 'Level 2 (Dips)',
              exerciseId: Exercises.findOne({slug: 'ring-dips'})._id
            },
            {
              prefix: 'Level 3 (Dips)',
              exerciseId: Exercises.findOne({slug: 'ring-dips-in-l-sit'})._id
            }
          ],
        },
        {
          notes: 'Strength Work - Second Pair',
          name: 'Squat Progression 3x(5-8)',
          exercises: [
            {
              prefix: 'Level 1-3a',
              exerciseId: Exercises.findOne({slug: 'bodyweight-squat'})._id
            },
            {
              prefix: 'Level 1-3b',
              exerciseId: Exercises.findOne({slug: 'barbell-squat'})._id
            },
            {
              prefix: 'Level 1 (alt)',
              exerciseId: Exercises.findOne({slug: 'deep-step-up'})._id
            },
            {
              prefix: 'Level 2 (alt)',
              exerciseId: Exercises.findOne({slug: 'pistol-squat'})._id
            },
            {
              prefix: 'Level 3 (alt)',
              exerciseId: Exercises.findOne({slug: 'jumping-pistol-squats'})._id
            }
          ],
          // notes: 'You can choose to do the Barbell Squat and Deadlift, adding more weight as you progress, or progess with the pistol squat progression.'
        },
        {
          name: 'L-sit Progression (5 min)',
          exercises: [
            {
              prefix: 'Level 1',
              exerciseId: Exercises.findOne({slug: 'tuck-l-sit'})._id
            },
            {
              prefix: 'Level 2',
              exerciseId: Exercises.findOne({slug: 'open-tuck-l-sit'})._id
            },
            {
              prefix: 'Level 3',
              exerciseId: Exercises.findOne({slug: 'one-leg-l-sit'})._id
            },
            {
              prefix: 'Level 4',
              exerciseId: Exercises.findOne({slug: 'l-sit'})._id
            },
          ]
        },
        {
          notes: 'Strength Work - Third Pair',
          name: 'Pushup Progression 3x(5-8)',
          exercises: [
            {
              prefix: 'Level 1',
              exerciseId: Exercises.findOne({slug: 'diamond-pushup'})._id
            },
            {
              prefix: 'Level 2-4 (alt)',
              exerciseId: Exercises.findOne({slug: 'pseudo-planche-push-ups'})._id
            },
            {
              prefix: 'Level 2',
              exerciseId: Exercises.findOne({slug: 'rings-push-ups'})._id
            },
            {
              prefix: 'Level 3',
              exerciseId: Exercises.findOne({slug: 'rings-wide-push-ups'})._id
            },
            {
              prefix: 'Level 4',
              exerciseId: Exercises.findOne({slug: 'rings-turned-out-push-up'})._id
            }
          ]
        },
        {
          name: 'Row Progression 3x(5-8)',
          exercises: [
            {
              prefix: 'Level 1',
              exerciseId: Exercises.findOne({slug: 'row'})._id
            },
            {
              prefix: 'Level 2',
              exerciseId: Exercises.findOne({slug: 'wide-row'})._id
            },
            {
              prefix: 'Level 3',
              exerciseId: Exercises.findOne({slug: 'tuck-front-lever-row'})._id
            },
            {
              prefix: 'Level 4',
              exerciseId: Exercises.findOne({slug: 'advanced-tuck-front-lever-row'})._id
            }
          ]
        }
      ]
    }
  ];

  _.each(routines, function(doc) {
    Routines.insert(doc);
  });
}