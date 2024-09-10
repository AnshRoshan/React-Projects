import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

function Workout({ workout }) {
	return (
		<SectionWrapper
			id={"workout"}
			header={"welcome to"}
			title={["The", "DANGER", "zone"]}
		>
			<div className="flex flex-col gap-4">
				{workout.map((exercise, index) => {
					return <ExerciseCard i={index} exercise={exercise} key={i} />;
				})}
			</div>
		</SectionWrapper>
	);
}
export default Workout;
