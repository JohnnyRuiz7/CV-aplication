import Input from "./Input.jsx"
import "./../styles/form.css"

function PersonalInfo() {
    return (
        <form>
            <h2>Personal information</h2>
            <Input label="Full name" type="text" id="full-name" name="full-name" />
            <Input label="Email" type="email" id="email" name="email" />
            <Input label="Phone number" type="phone-number" id="phone-number" name="phone-number" />
            <Input label="Address" type="text" id="address" name="address" />
        </form>
    )
}

export default PersonalInfo