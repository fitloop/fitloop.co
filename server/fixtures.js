// // console.log(Exercises.findOne({slug: 'wall-extensions'})._id);

if(Equipment.find().count() === 0) {
	var equipment = [
		{
			name: "Aylio 3 Exercise Bands",
			price: "About $20",
			link: "http://www.amazon.com/gp/product/B0026PMD70/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0026PMD70&linkCode=as2&tag=fitloop-20",
			thumbnail: "//s3.amazonaws.com/fitloop/equipment/exercise-bands.jpg",
			slug: "aylio-3-bands"
		},
		{ 
			name: "Iron Gym Total Upper Body Workout Bar",
			price: "About $33",
			link: "//www.amazon.com/gp/product/B001EJMS6K/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B001EJMS6K&linkCode=as2&tag=fitloop-20",
			thumbnail: "//s3.amazonaws.com/fitloop/equipment/pullup-bar.jpg",
			slug: "iron-gym-total-upper"
		},
		{ 
			name: "Aylio 3 Loop Bands",
			price: "About $20",
			link: "http://www.amazon.com/gp/product/B0054MQUHQ/ref=as_li_ss_il?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0054MQUHQ&linkCode=as2&tag=fitloop-20",
			thumbnail: "//s3.amazonaws.com/fitloop/equipment/exercise-loops.jpg",
			slug: "aylio-3-loop-bands",
		},
		{
			name: "Nayoya Gymnastic Rings",
			link: "http://www.amazon.com/gp/product/B009RA6C1K/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B009RA6C1K&linkCode=as2&tag=fitloop-20",
			price: "About $32",
			slug: "nayoya-gymnastic-rings",
			thumbnail: "//s3.amazonaws.com/fitloop/equipment/rings.jpg"
		}
	];

	_.each(equipment, function(doc) {
		Equipment.insert(doc);
	})

}

if (Exercises.find().count() === 0) {
	var exercises = [
		{
		  name: "Open Tuck L-sit",
		  slug: "open-tuck-l-sit",
		  videoId: "gc0-uVMGCSM",
		  notes: "90 degree angle at the hips and knees",
		},
		{ 
			name: "Wall Pushup",
			slug: "wall-pushup",
			videoId: "a6YHbXD2XlU",
			notes: "Stand about two feet away from a wall. Put your hands on the wall. Bend your elbows and lean towards the wall, then push back to starting position. Be sure to keep your body as straight as possible."
		},
    { 
    	name: "Rings Wide Push Ups",
			equipment: [ Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id ],
			slug: "rings-wide-push-ups",
			videoId: "jbQyi9xshOU",
			notes: "Starting from a plank position on the rings, come down while allowing the elbows to come out to the side (the rings can turn in). Go until your forearm makes a 90 degree angle with the upper arm and come back up. Turn out the rings again at the top."
		},
    { 
    	name: "Jumping Pistol Squats",
			slug: "jumping-pistol-squats",
			videoId: "LTqh1v7aCjU",
		},
    {
    	name: "Pushup",
			slug: "pushup",
			videoId: "Eh00_rniF8E",
			notes: "Get into a Plank position, with your hands directly below your shoulders. Lower yourself so that your chest touches the ground, and push yourself back up. The core should be tight, keeping the body straight. The elbows should be kept back if possible, do not allow them to splay out more than 45 degrees from the body.",
		},
    { 
    	name: "Reverse Plank",
			slug: "reverse-plank",
			videoId: "1s1bPYBPERU",
			notes: "Keep the body straight by flexing the lower back, glutes, and abs. Make sure you are pushing down through the shoulders, retracting your scapula, and trying to lift the chest. To make it more difficult, elevate the feet so they are at shoulder height.",
		},
    { 
    	name: "Wall Extensions",
			slug: "wall-extensions",
			videoId: "d6V2Exzb324",
		},
    { 
    	name: "Freestanding Handstand",
			slug: "freestanding-handstand",
			videoId: "Y3FSeSecjKA",
		},
    { 
    	name: "Squat Jumps",
			slug: "squat-jumps",
			videoId: "CVaEhXotL7M",
		},
    { 
    	name: "Hollow Hold",
			slug: "hollow",
			videoId: "Y3FSeSecjKA",
			videoStart: "162",
			videoEnd: "248",
		},
    { 
    	name: "Row",
			slug: "row",
			videoId: "dvkIaarnf0g",
			notes: "If you don't have access to specialized gym equipment, this exercise can be performed in several different ways. Using the edge of a very sturdy table. Placing a pullup bar between two tables or chairs. Attaching rings or other rope-like attachments to a doorframe pullup bar. Whichever way you choose, make sure everything is sturdy and can hold your weight.",
			equipment: [ Equipment.findOne({slug: 'iron-gym-total-upper'})._id ,
										Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id ],
		},
		{
			name: "Front and Side Leg Swings",
			slug: "front-and-side-leg-swings",
			videoId: "4aoUZEZFJF8",
		},
		{
			name: "Box Headstand Push Up",
			slug: "box-headstand-push-up",
			videoId: "8LNrVMoGUsw",
		},
		{ 
			name: "Foot-supported L-sit",
			slug: "foot-supported-l-sit",
			videoId: "IUZJoSP66HI",
			videoEnd: "143",
			notes: "Sit down on the ground with your legs straight in front of you. Put your hands next to your thighs and push yourself up (straight arms!), leaving your feet on the ground. Hold for uptp 60 seconds. If you cannot hold for 60 seconds, do smaller timed sets totalling 60 seconds (3 sets of 20 second holds, for example).\n\nFocus on pushing the shoulder blades down (\"depressing the scapulae\", scapulae meaning shoulderblades).",
		},
		{
			equipment: [ Equipment.findOne({slug: 'aylio-3-bands'})._id ],
			name: "Wrist Mobility Exercises",
			slug: "wrist-mobility-exercises",
			videoId: "HU5UCh_E6Ns"
		},
		{ 
			name: "Parallel Bar support",
			slug: "parallel-bar-support",
			videoId: "Zv87Teu51tQ",
			notes: "Keep the arms straight. Focus on pushing your scapulae (shoulder blades) down (depressed).",
		},
		{ 
			name: "Pseudo Planche Push Ups",
			slug: "pseudo-planche-push-ups",
			videoId: "Cdmg0CfMZeo",
			notes: "Putting your hands sideways, lean forward with a straight body until your shoulders are in front of your hands. Perform a pushup while maintaining forward lean. Protract the shoulderblades at the top. Increase forward lean to make more difficult. Decrease forward lean to make easier. You won't run out of resistance anytime soon if you keep increasing your forward lean.",
		},
		{ 
			name: "Vertical Row",
			slug: "vertical-row",
			videoId: "e5fdh9_kH_Y",
			notes: "Grab a bar or door frame slightly lower than shoulder height. Place your feet near the base and lean back. Pull yourself towards the object.",
		},
		{ 
			name: "Wide Row",
			slug: "wide-row",
			videoId: "1yMRvsuk9Xg",
			notes: "It's okay to flare your elbows on this one.\n\nOn a bar: take a wide grip (1.5 times shoulder width) and perform rows like this. \n\nOn rings: while performing a row, bring out the elbows to the side up to a 90 degree angle.",
			equipment: [ Equipment.findOne({slug: 'iron-gym-total-upper'})._id ,
										Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id ],
		},
		{ 
			name: "Ring Support",
			slug: "ring-support",
			videoId: "V3IkFK5lvRw",
			equipment: [ Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id ]
		},
    { 
    	name: "Barbell Squat",
			slug: "barbell-squat",
			videoId: "b_uAOqA-pxY",
		},
    { 
    	name: "Full Body Circles",
			slug: "full-body-circles",
			videoId: "yRigKuEou7k",
			videoStart: "19",
		},
    { 
    	name: "Cat/Camel Bends",
			slug: "cat-camel-bends",
			videoId: "K9bK0BwKFjs",
		},
    { 
    	name: "Front/Back Leg Swings",
			slug: "front-back-leg swings",
			videoId: "4aoUZEZFJF8",
			videoStart: "62",
		},
    { 
    	name: "Wall Handstand Push Ups",
			slug: "wall-handstand-push-ups",
			videoId: "r-aiCMOOhNQ",
			notes: "Get into a wall handstand with your hands on raised objects. Slowly lower yourself so that your shoulders meet your hands. Push yourself back to starting position. Do not arch your back, and do not let your elbows flare out (you will fall if you do).",
		},
    { 
    	equipment: [ Equipment.findOne({slug: 'iron-gym-total-upper'})._id ],
			name: "Negative Pull Ups",
			slug: "negative-pull-up",
			videoId: "y5sqSwcRZzo",
			videoEnd: "83"
		},
    { 
    	name: "Incline Row",
			slug: "incline-row",
			videoId: "1G28qN9FCKE",
			notes: "If you don't have access to specialized gym equipment, this exercise can be performed in several different ways. Using the edge of a very sturdy table. Placing a pullup bar between two tables or chairs. Attaching rings or other rope-like attachments to a doorframe pullup bar. Whichever way you choose, make sure everything is sturdy and can hold your weight.",
			equipment: [ Equipment.findOne({slug: 'iron-gym-total-upper'})._id ,
										Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id ],
		},
    { 
    	name: "L-sit",
			slug: "l-sit",
			videoId: "ek76IXnE9tE",
		},
    {
			name: "Side Plank",
			slug: "side-plank",
			videoId: "xIFWxQgFMiE",
			videoStart: "5",
			videoEnd: "71",
			notes: "Keep the body straight.",
		},
    {
			name: "Incline Pushup",
			slug: "incline-pushup",
			videoId: "dWbmyYpNONk",
			notes: "Finding some raised object, put your hands on said object and perform a pushup. Lower the height to increase the difficulty.",
		},
    {
			name: "Burpees",
			slug: "burpees",
			videoId: "JZQA08SlJnM",
		},
		{
			name: "Tuck L-sit",
			slug: "tuck-l-sit",
			videoId: "IUZJoSP66HI",
			videoStart: "168",
			videoEnd: "233",
			notes: "Focus on depressing the shoulder blades.",
		},
		{
			name: "Wall Headstand Push Ups",
			slug: "wall-headstand-push-ups",
			videoId: "5Vs-hk74zOQ",
		},
		{
			name: "Wall Headstand Push Up Negatives",
			slug: "wall-headstand-push-up-negatives",
			videoId: "Lj2KZwbr_jo",
		},
		{
			name: "Assisted Bodyweight Squat",
			slug: "assisted-bodyweight-squat",
			videoId: "OuR_Fp7AB0c",
			notes: "Stand in front of a horizontal bar, handrail, or anything else that you can stably hold on to. Keep your legs approximately shoulder-width apart. Squat down while partially supporting your weight with your arms. In the squat, you should think of sitting backwards, not down. The knees should not move forward as you squat down. Check out how the shins of the guy in the video barely move at all and remain vertical at all times.",
		},
		{
			name: "Stomach-to-Wall Handstand Practice",
			notes: "5 minutes of handstand practice. Set a timer for 5 minutes and do handstands, resting as long as you need. Rest is included in time. Make sure you have an exit strategy, so you don't get stuck or fall down. If you don't feel comfortable with this exercise, then skip it until you better understand it and are more able.",
			slug: "stomach-to-wall-handstand-practice",
			videoId: "dRycbwdcz7Y"
		},
		{
			name: "Parallel Bar Dips",
			slug: "parallel-bar-dips",
			videoId: "_3RaUMKcGQI",
		},
		{
			name: "Pike Push Up",
			slug: "pike-headstand-push-up",
			videoId: "sposDXWEB0A",
		},
		{
			name: "Plank",
			slug: "plank",
			videoId: "PLu6k-uKOJ0",
			notes: "Get in a plank position, keeping your core tight and your body straight. Be sure to flex your glutes. You should not be feeling this in your lower back, but your abdominal muscles. Hold for time. Make it harder by putting weight on your butt/lower back. If this plank position is too difficult to hold, go down onto the elbows instead of holding arms straight.To make it more difficult, elevate the feet so they are at shoulder height.",
		},
		{
			name: "Deadlift",
			slug: "deadlift",
			videoId: "1nRRlk6264I",
		},
    { 
			name: "Pull Up",
    	equipment: [ Equipment.findOne({slug: 'iron-gym-total-upper'})._id ],
			slug: "pull-up",
			videoId: "RsnbDcsZbpk"
		},
    {
			name: "Backwards Quadrupedal Movement",
			slug: "backwards-quadrupedal-movement",
			videoId: "xaj4HlvF2YI",
		},
    {
			name: "Wrist Pushups",
			slug: "wrist-pushups",
			videoId: "NIeL0AYygiY",
		},
    {
			name: "Bodyweight Squat",
			slug: "bodyweight-squat",
			videoId: "AkQbbDGMzJk",
		},
    {
			name: "Diamond Pushup",
			slug: "diamond-pushup",
			videoId: "s8Ft6xyN5fw",
			notes: "Perform a pushup, but with your hands close together so that your thumb and forefinger form a diamond. If you have trouble doing this, start with a regular push-up, and gradually move your hands closer together over the course of many workouts.",
		},
    { 
			name: "Rings Push Ups",
    	equipment: [ Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id ],
			slug: "rings-push-ups",
			videoId: "jbQyi9xshOU",
			videos: [ { videoId: "jbQyi9xshOU" },
								{ videoId: "eiMqSbh3IRM" } ]
		},
    {
			name: "Pistol Squat",
			slug: "pistol-squat",
			videoId: "t7Oj8-8Htyw",
			videos: [ { title: "short demonstration",
			videoId: "M3zbtsZ1zbw" },
			{ title: "Longer tutorial by Antranik",
			videoId: "t7Oj8-8Htyw" } ],
		},
    {
			name: "Arch",
			slug: "arch",
			videoId: "wrzjVTK2brk",
			videoStart: "75",
			notes: "While lying prone, lift your arms (and chest) and legs (including thighs) off the ground. The more you engage your back muscles and glutes, the greater your spine will arch. \n\nThis bodyline drill is commonly one of the slowest to progress with so don't feel bad if you feel it's uncomfortable and awkward. \n\nYou'll often see it done with arms overhead, but to make it easier, you can point them back (toward your feet) while still lifting the chest.\n\nContributors: Antranik"
		},
    {
			name: "Band Dislocates",
			slug: "band-dislocates",
			videoId: "WyW5jGGxoZk",
			notes: "Take a wider grip to make it easier",
			equipment: [ Equipment.findOne({slug: 'aylio-3-loop-bands'})._id ]
		},
    {
			name: "Pull Over",
			slug: "pull-over",
			videoId: "saLtuweg8As",
			notes: "From a hang with straight arms, pullup while simultaneously bringing the legs up and spin around the bar. You'll end up on top of the bar. To get back down, reverse the motion: roll forward and then lower the legs while performing a negative pullup to get to a hang."
		},
    { 
			name: "L-sit Pull Up",
    	equipment: [ Equipment.findOne({slug: 'iron-gym-total-upper'})._id ],
			slug: "l-sit-pull-up",
			videoId: "quFBLtkxMRM",
			notes: "Hold your legs in an L-sit position, perform a pullup."
		},
		{
			name: "Wall Plank",
			slug: "wall-plank",
			videoId: "6jm4R3K4sJA",
			notes: "Put your feet up against the wall and perform a plank hold. Don't let the hips sag! Keep working on getting the feet up higher and higher until you're at the next progression.",
		},
		{
			name: "One-Leg Foot Supported L-sit",
			slug: "one-leg-foot-supported-l-sit",
			videoId: "IUZJoSP66HI",
			videoStart: "144",
			videoEnd: "168",
			notes: "Do a foot supported L-sit, but raise one of your legs up from the ground.",
		},
		{ 
			name: "Rings Turned Out Push Up",
			equipment: [ Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id ],
			notes: "Starting from a plank position with the rings turned out, perform a pushup while keeping the rings turned out. This will feel alot like a pseudo planche pushup, but on rings.",
			slug: "rings-turned-out-push-up",
			videoId: "MrlyEIpe0LI",
			videoStart: "176"
		},
		{
			name: "Rings Turned Out PPPU",
			slug: "rings-turned-out-psuedo-plance-push-ups",
			videoId: "-kwe1EOiWMY",
			notes: "Starting from an RTO plank position, lean forward until your shoulders are in front of your hand. Perform a pushup while maintaining forward lean. Really protract and depress the shoulderblades at the top.\n\nIncrease forward lean to make it more difficult. Decrease forward lean to make it easier. You won't run out of resistance anytime soon if you keep increasing your forward lean.",
			equipment: [ Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id ],
		},
		{
			name: "Tuck Ice Cream Maker",
			slug: "tuck-ice-cream-maker",
			equipment: [ Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id ],
			videoId: "AszLwoAvLKg",
			notes: "The video shows a full Ice Cream Maker. For now, do these in a tucked position.\nFrom the position in the top of a pullup, tuck your legs. Then, lean back while bringing the body horizontal. Lock out the arms (important!) and pause for a second in the tuck front lever position and pull back up until your body is vertical.",
		},
		{
			name: "Kneeling Lunge",
			slug: "kneeling-lunge",
			videoId: "iayBtEr06vQ",
			notes: "Kneel on the ground and place one foot in front of you, flat on the ground, in a lunge position with the back knee and top of foot on the ground. Squeeze the glutes and press the pelvis forward, stretching the rear leg. Move the front foot forward as needed to ensure the front shin remains roughly vertical. Ensure the torso remains vertical, and not bending backwards or leaning forwards.\n\nBeginner: Perform the kneeling lunge with hands on the front leg, supporting some of the torso\n\nIntermediate: Keep the hands at the side of the torso, with palms facing forward and shoulders pulled back\n\nAdvanced: Raise the rear leg up against your glutes and hold with both arms\n",
		},
		{
			name: "Rear Hand Clasp",
			slug: "rear-hand-clasp",
			videoId: "UJNEtK0Yv-U",
			notes: "With one hand overhead and the other hand behind your lower back, attempt to grasp fingertips behind your back. Make sure to do this on both sides (60s each side).\n\nBeginner: Use a towel or strap to bring the hands together\n\nIntermediate: Grab opposing fingers or hands\n\nAdvanced: Grab opposing wrists\n",
		},
		{
			name: "Ring Dips in L-sit",
			equipment: [ Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id ],
			notes: "With your legs in an L-sit position, perform a dip. Make sure to turn out the rings at the top!",
			slug: "ring-dips-in-l-sit",
			videoId: "K-fNLVAstcw"
		},
		{ 
			name: "Ring Dips",
			equipment: [ Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id ],
			notes: "Starting from a support position with the rings turned out, perform a dip. It's okay if the rings turn in, just make sure you turn them out at the top.",
			slug: "ring-dips",
			videoId: "cPFmMwC62d8"
		},
    {
			name: "Deep Step-up",
			notes: "Putting one leg up on a high object in front of you, put all of your weight on the front leg and step up to the object. Aim to minimize pushing off with the back leg. To make it harder, increase the height of the object, or hold some weight.",
			slug: "deep-step-up",
			videoId: "487aR3A7HvM",
		},
    {
			name: "One-leg L-sit",
			slug: "one-leg-l-sit",
			videoId: "gc0-uVMGCSM",
			notes: "Either tuck less than before, or stay tucked and extend only one leg straight like in a real L-sit."
		},
    {
			name: "Tuck Front Lever",
			slug: "tuck-front-lever",
			videoId: "tiST0765Sfo",
			notes: "The main points here are to actively depress and retract the scapulae, as well as keeping the elbows completely straight. There should be a strong activation of the lats (the big muscles on the outsides of your back) coupled with the depression.",
		},
    {
			name: "Tuck Front Lever Row",
			slug: "tuck-front-lever-row",
			videoId: "F-xEL0Ot0HA",
			notes: "From a tuck front lever position, pull up as far as you can while your body remains horizontal.",
			equipment: [ Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id ],
		},
    {
			name: "Advanced Tuck Front Lever Row",
			slug: "advanced-tuck-front-lever-row",
			videoId: "cVdb8oUGKAw",
			notes: "These are the same as tuck FL rows, but with the body less tightly tucked.",
			equipment: [ Equipment.findOne({slug: 'nayoya-gymnastic-rings'})._id ],
		},
    {
			name: "Bodyline Drills Combo",
			slug: "bodyline-drills",
			videoId: "44ScXWFaVBs",
			notes: "Follow along with Antranik to perform the Plank, Side Plank, Reverse Plank, Hollow Hold, and Arch.",
		}
	]

	_.each(exercises, function(doc) {
  	Exercises.insert(doc);
  });
}

// if(Progressions.find().count() === 0) {
// 	var progressions = [
// 		{
// 			name: "Pullup Progression",
// 			exercises: [
// 				{
//           level: 1,
//           exerciseId: Exercises.findOne({slug: 'negative-pull-up'})._id
//         },
//         {
//           level: 2,
//           exerciseId: Exercises.findOne({slug: 'pull-up'})._id
//         },
//         {
//           level: 3,
//           exerciseId: Exercises.findOne({slug: 'l-sit-pull-up'})._id
//         },
//         {
//           prefix: 'Level 4',
//           exerciseId: Exercises.findOne({slug: 'pull-over'})._id
//         }
//       ]
// 		},
// 		{
// 			name: "Pushup Progression",
// 			nodes: [
// 				{
// 					nodeId: 1,
// 					exercises: [

// 					],
// 					children: [2]
// 				},
// 				{
// 					nodeId: 2,
// 				}
// 			]

			
//     }

// 	];
// }

if (Routines.find().count() === 0) {
  var routines = [
    {
      name: 'Test Routine',
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