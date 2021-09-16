import OptionSelector from "../optionSelector/OptionSelector";

function FormItem (props) {
    console.log(props);
    const options= []
    for( let i=0; i < props.data.option.length; i ++ ){
        options.push(<OptionSelector secondData={props.data.option[i]}/>)
    }
    return(
        <div>
            <div className="container">
            <div className="card">
					<div className="card-body">
						<form action="">
							<div class="mb-3">
								<label for="exampleFormControlInput1" class="form-label">
                                    {props.data.title}
								</label>
								
                            </div>
                            {options}
						</form>
					</div>
				</div>
            </div>    

        </div>
    );
}
export default FormItem;