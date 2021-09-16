function OptionSelector(props){
    return(
        <div class="form-check">
        <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
            {props.secondData}
        </label>
    </div>    
    )
}

export default OptionSelector;