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
			
			{ <div className="container">
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
							akanbifatimah@gmail.com{" "}
							<span>
								{" "}
								<a href="/">Switch account</a>
							</span>
						</h5>
					</div>
				</div>
			</div>}
            {allForm}
			{/* <div className="container">
				<div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
									Email address
								</label>
								<input
									type="email"
									class="form-control"
									id="exampleFormControlInput1"
									placeholder="Your Email"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
									Exco of the year.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Olusegun Samuel "Dre"
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Ilegbusi Kehinde Benson
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olarinjoye Olayinka "Epiphany"
					            </label>
				            </div>
							
						</form>
					</div>
				</div>
				
			</div>
            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
									Fresher of the year.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div> 
            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                Most sought after male 100level.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div>
            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
									Most sought after female 100level.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div>        
            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                Most sought after female 200level.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div>        

            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                Most sought after male 200level.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div>        

            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                Most sought after female 300level.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div>        
            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                Most sought after male 300level.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div>        
            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                Most supportive, 100level.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div> 
            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                Most supportive, 200level.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div> 
            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                Influencer of the Year.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div> 
            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                Most Fashionable Female 400level.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div> 
            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                Most Fashionable Male 400level.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div> 
            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                Enterpreneaur of the Year.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div> 
            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                    Writer of the Year.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div>
            </div> <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                    Historian of the Year.
								</label>
								
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Animashaun moralake
					            </label>
                            </div>    
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
                                    Adebola Omolade
					            </label>
				            </div>
                            <div class="form-check">
					            <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
					            />
					            <label class="form-check-label" for="flexRadioDefault2">
						            Olayinka "Epiphany"
					            </label>
				            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Bolanle
					            </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
						            Kikelomo
					            </label>
                            </div>
							
						</form>
					</div>
				</div> */}
            {/* </div> */}
		</div>
	);
}

export default Form;
