import "./Form.css";
import SurveyData from "../../Data/SurveyQuestionsData";
import FormItem from "../FormItem/FormItem";

function Form() {
	const allForm = [];
	for (let i = 0; i < SurveyData.length; i++) {
		allForm.push(<FormItem data={SurveyData[i]} />);
	}
	return (
		<div className="background">
			
			<div className="container">
				<div className="card">
					<div className="card-body">
						<h1>SHSN Awards voting.</h1>
						<p>
							You have nominated and these are the top nominees for each
							category. Now you must vote the ONE who goes home with the award..
						</p>
						<p>You only get one vote, make it count!</p>
						<hr />

						<h5>
							akanbifatimah@gmail.com
							<span>
							
								<a href="/">Switch account</a>
							</span>
						</h5>
					</div>
				</div>
			</div>
            {allForm}

		</div>
	);
}

export default Form;
