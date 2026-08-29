function Form()
{
    return(
        <form id="form" >
            <div className="form">
            <label id="name" type="text" >Name</label>
            <input id="name"></input><br />
            <label id="name" type="email">Email:</label>
            <input id="name" type="text" /><br />
            <label id="name" type="tel">Phone:</label>
            <input  id="name" type="tel" inputMode="numeric" /><br />
            <label id="name" htmlFor="">Gender: </label>
            <input id="name" type="radio" name="gender" value="male" />Male 
            <input id="name" type="radio" namebr="gender" value="female" />Female
            <br />
            <label id="name" >Country: 
            </label>
            <select name="" id="">
                <option value="">Select Your Country</option>
                <option value="nepal">Nepal</option>
                <option value="India">india</option>
                <option value="Europe">Europe</option>

            </select>
            </div>
            
        </form>
    );
}

export default Form;