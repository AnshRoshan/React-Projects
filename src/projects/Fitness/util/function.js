import { EXERCISES, SCHEMES, TEMPOS, WORKOUTS } from "./swoldier";
const exercises = exercisesFlattener(EXERCISES);

export function generateWorkout(args) {
	const { muscles, poison: workout, goal } = args;
	let exer = Object.keys(exercises);
	exer = exer.filter((key) => exercises[key].meta.environment !== "home");
	const includedTracker = [];
	const numSets = 5;
	let listOfMuscles;

	if (workout === "individual") {
		listOfMuscles = muscles;
	} else {
		listOfMuscles = WORKOUTS[workout][muscles[0]];
	}

	listOfMuscles = new Set(shuffleArray(listOfMuscles));
	const arrOfMuscles = Array.from(listOfMuscles);
	const scheme = goal;
	const sets = SCHEMES[scheme].ratio
		.reduce((acc, curr, index) => {
			//make this compound and exercise muscle -> array of objects and destructure in loop
			// The problem is due to object assign as it need getter and setter
			// return [
			// 	Object.assign(acc, {
			// 	...[...Array(Number.parseInt(curr)).keys()].map((val) =>
			// 		index === 0 ? "compound" : "accessory",
			// 	),
			// ];
			return acc.concat(
				[...Array(Number.parseInt(curr)).keys()].map((val) =>
					index === 0 ? "compound" : "accessory",
				),
			);
		}, [])
		.reduce((acc, curr, index) => {
			const muscleGroupToUse =
				index < arrOfMuscles.length
					? arrOfMuscles[index]
					: arrOfMuscles[index % arrOfMuscles.length];
			return [
				Object.assign(acc, {}),
				{
					setType: curr,
					muscleGroup: muscleGroupToUse,
				},
			];
		}, []);

	const { compound: compoundExercises, accessory: accessoryExercises } =
		exer.reduce(
			(acc, curr) => {
				let exerciseHasRequiredMuscle = false;
				for (const musc of exercises[curr].muscles) {
					if (listOfMuscles.has(musc)) {
						exerciseHasRequiredMuscle = true;
					}
				}
				if (!exerciseHasRequiredMuscle) {
					return acc;
				}
				acc[exercises[curr].type][curr] = exercises[curr];
			},
			{ compound: {}, accessory: {} },
		);

	const genWOD = sets.map(({ setType, muscleGroup }) => {
		const data =
			setType === "compound" ? compoundExercises : accessoryExercises;
		const filteredObj = Object.keys(data).reduce((acc, curr) => {
			if (
				includedTracker.includes(curr) ||
				!data[curr].muscles.includes(muscleGroup)
			) {
				// if (includedTracker.includes(curr)) { console.log('banana', curr) }
				return acc;
			}
			// Avoid the use of spread (`...`) syntax on accumulators.biomelint/performance/noAccumulatingSpread
			// return { ...acc, [curr]: exercises[curr] };
			acc[curr] = exercises[curr];
			return acc;
		}, {});
		const filteredDataList = Object.keys(filteredObj);
		const filteredOppList = Object.keys(
			setType === "compound" ? accessoryExercises : compoundExercises,
		).filter((val) => !includedTracker.includes(val));

		const randomExercise =
			filteredDataList[Math.floor(Math.random() * filteredDataList.length)] ||
			filteredOppList[Math.floor(Math.random() * filteredOppList.length)];

		// console.log(randomExercise)

		if (!randomExercise) {
			return {};
		}

		let repsOrDuraction =
			exercises[randomExercise].unit === "reps"
				? Math.min(...SCHEMES[scheme].repRanges) +
					Math.floor(
						Math.random() *
							(Math.max(...SCHEMES[scheme].repRanges) -
								Math.min(...SCHEMES[scheme].repRanges)),
					) +
					(setType === "accessory" ? 4 : 0)
				: Math.floor(Math.random() * 40) + 20;
		const tempo = TEMPOS[Math.floor(Math.random() * TEMPOS.length)];

		if (exercises[randomExercise].unit === "reps") {
			const tempoSum = tempo
				.split(" ")
				.reduce((acc, curr) => acc + Number.parseInt(curr), 0);
			if (tempoSum * Number.parseInt(repsOrDuraction) > 85) {
				repsOrDuraction = Math.floor(85 / tempoSum);
			}
		} else {
			//set to nearest 5 seconds
			repsOrDuraction = Math.ceil(Number.parseInt(repsOrDuraction) / 5) * 5;
		}
		includedTracker.push(randomExercise);

		return {
			name: randomExercise,
			tempo,
			rest: SCHEMES[scheme].rest[setType === "compound" ? 0 : 1],
			reps: repsOrDuraction,
			...exercises[randomExercise],
		};
	});

	return genWOD.filter((element) => Object.keys(element).length > 0);
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

function exercisesFlattener(exercisesObj) {
	const flattenedObj = {};

	for (const [key, val] of Object.entries(exercisesObj)) {
		if (!("variants" in val)) {
			flattenedObj[key] = val;
		} else {
			for (const variant in val.variants) {
				const variantName = `${variant}_${key}`;
				const variantSubstitutes = Object.keys(val.variants)
					.map((element) => {
						return `${element} ${key}`;
					})
					.filter((element) => element.replaceAll(" ", "_") !== variantName);

				flattenedObj[variantName] = {
					...val,
					description: `${val.description}___${val.variants[variant]}`,
					substitutes: [...val.substitutes, variantSubstitutes].slice(0, 5),
				};
			}
		}
	}
	return flattenedObj;
}
