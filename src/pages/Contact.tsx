    import styled from "styled-components";

export function Contact() {
    return (
        <StyledContactUs>
            <form>
                <label>Form
                    <input type="text" placeholder="First Name" />
                    <input type="password" placeholder="Your Password" />
                    <textarea placeholder="Enter your text" />
                    <button type="submit">Submit</button>
                    <button type={"reset"}>Clear</button>
                </label>
            </form>
        </StyledContactUs>
    );
}

const StyledContactUs = styled.div `
    height: 100vh;
    text-align: center;
    align-items: center;
    form {
        margin:  0 auto;
    }
`