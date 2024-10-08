import React, { useState } from "react";
import { SCHEMES, WORKOUTS } from "../util/swoldier";
import Button from "./Button";
import SectionWrapper from "./SectionWrapper";

function Header({ index, title, description }) {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-center gap-2">
				<p className="font-semibold text-3xl text-slate-400 sm:text-4xl md:text-5xl">
					{index}
				</p>
				<h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
			</div>
			<p className="mx-auto text-sm sm:text-base">{description}</p>
		</div>
	);
}

export default function Generator({
	muscles,
	setMuscles,
	poison,
	setPoison,
	goal,
	setGoal,
	updateWorkout,
}) {
	const [showModal, setShowModal] = useState(false);

	// let showModal = false

	function toggleModal() {
		setShowModal(!showModal);
	}

	function updateMuscles(muscleGroup) {
		if (muscles.includes(muscleGroup)) {
			setMuscles(muscles.filter((val) => val !== muscleGroup));
			return;
		}

		if (muscles.length > 2) {
			return;
		}

		if (poison !== "individual") {
			setMuscles([muscleGroup]);
			setShowModal(false);
			return;
		}

		setMuscles([...muscles, muscleGroup]);
		if (muscles.length === 2) {
			setShowModal(false);
		}
	}

	return (
		<SectionWrapper
			id={"generate"}
			header={"generate your workout"}
			title={["It's", "Huge", "o'clock"]}
		>
			<Header
				index={"01"}
				title={"Pick your poison"}
				description={"Select the workout you wish to endure."}
			/>
			<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
				{Object.keys(WORKOUTS).map((type) => {
					return (
						<button
							type="button"
							onClick={() => {
								setMuscles([]);
								setPoison(type);
							}}
							className={`rounded-lg border bg-slate-950 px-4 py-3 duration-200 hover:border-blue-600 ${type === poison ? " border-blue-600" : " border-blue-400"}`}
							key={type}
						>
							<p className="capitalize">{type.replaceAll("_", " ")}</p>
						</button>
					);
				})}
			</div>
			<Header
				index={"02"}
				title={"Lock on targets"}
				description={"Select the muscles judged for annihilation."}
			/>
			<div className="flex flex-col rounded-lg border border-blue-400 border-solid bg-slate-950">
				<button
					type="button"
					onClick={toggleModal}
					className="relative flex items-center justify-center p-3"
				>
					<p className="capitalize">
						{muscles.length === 0 ? "Select muscle groups" : muscles.join(" ")}
					</p>
					<i className="fa-solid fa-caret-down -translate-y-1/2 absolute top-1/2 right-3" />
				</button>
				{showModal && (
					<div className="flex flex-col px-3 pb-3">
						{(poison === "individual"
							? WORKOUTS[poison]
							: Object.keys(WORKOUTS[poison])
						).map((muscleGroup) => {
							return (
								<button
									onClick={() => {
										updateMuscles(muscleGroup);
									}}
									type="button"
									key={muscleGroup}
									className={`duration-200 hover:text-blue-400 ${muscles.includes(muscleGroup) ? " text-blue-400" : ""}`}
								>
									<p className="uppercase">
										{muscleGroup.replaceAll("_", " ")}
									</p>
								</button>
							);
						})}
					</div>
				)}
			</div>
			<Header
				index={"03"}
				title={"Become Juggernaut"}
				description={"Select your ultimate objective."}
			/>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
				{Object.keys(SCHEMES).map((scheme) => {
					return (
						<button
							type="button"
							onClick={() => {
								setGoal(scheme);
							}}
							className={`rounded-lg border bg-slate-950 px-4 py-3 duration-200 hover:border-blue-600 ${scheme === goal ? " border-blue-600" : " border-blue-400"}`}
							key={scheme}
						>
							<p className="capitalize">{scheme.replaceAll("_", " ")}</p>
						</button>
					);
				})}
			</div>
			<Button func={updateWorkout} text={"Formulate"} />
		</SectionWrapper>
	);
}
