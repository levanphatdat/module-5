import React, { useState } from "react";

function MyForm() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <form>
            <label>
                Select an option:
                <select value={selectedOption} onChange={handleOptionChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </label>
            {selectedOption === "option1" && (
                <input type="text" name="option1Input" />
            )}
            {selectedOption === "option2" && (
                <input type="text" name="option2Input" />
            )}
            {selectedOption === "option3" && (
                <input type="text" name="option3Input" />
            )}
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;